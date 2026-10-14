import { supabase, isSupabaseConfigured } from './supabaseClient';
import { Campsite } from '../types';
import { taianCampsites } from '../data/taianCampsites';

/**
 * Fetch campsites by district with optional tag filtering.
 * Connects to Supabase if credentials are provided; falls back to mock data otherwise.
 *
 * @param districtName e.g., '泰安鄉'
 * @param tags Array of tags to filter by (e.g., ['草地', '雲海'])
 * @returns Promise<Campsite[]>
 */
export async function fetchCampsitesByDistrict(
  districtName: string = '泰安鄉',
  tags: string[] = []
): Promise<Campsite[]> {
  // If Supabase is not configured, gracefully use local mock data
  if (!isSupabaseConfigured() || !supabase) {
    console.info('[CampsiteService] Using local Mock Data (Supabase not configured).');
    return filterMockData(districtName, tags);
  }

  try {
    // 1. Build basic query
    let query = supabase
      .from('campsites')
      .select(`
        id,
        name,
        lat,
        lng,
        address,
        phone,
        google_rating,
        reviews_count,
        campsite_scores (
          cleanliness,
          management,
          road
        ),
        campsite_tags (
          tag_name
        ),
        campsite_summaries (
          summary_text
        )
      `);

    const isAll = !districtName || districtName === '全部地區' || districtName === '全台灣';
    if (!isAll) {
      query = query.ilike('address', `%${districtName}%`);
    }

    const { data, error } = await query;

    if (error) {
      console.warn('[CampsiteService] Supabase query failed, falling back to mock data:', error.message);
      return filterMockData(districtName, tags);
    }

    if (!data) return [];

    // 2. Map database schema to frontend Campsite interface
    const formattedCampsites: Campsite[] = data.map((item: any) => {
      const scores = item.campsite_scores?.[0] || item.campsite_scores || {
        cleanliness: 4.0,
        management: 4.0,
        road: 3.5,
      };

      const campsiteTags: string[] = Array.isArray(item.campsite_tags)
        ? item.campsite_tags.map((t: any) => t.tag_name)
        : [];

      const summaries: string[] = Array.isArray(item.campsite_summaries)
        ? item.campsite_summaries.map((s: any) => s.summary_text)
        : [];

      return {
        id: item.id,
        name: item.name,
        lat: item.lat,
        lng: item.lng,
        address: item.address,
        phone: item.phone || '',
        googleRating: Number(item.google_rating) || 4.5,
        reviewsCount: item.reviews_count || 0,
        tags: campsiteTags,
        scores: {
          cleanliness: Number(scores.cleanliness) || 4.0,
          management: Number(scores.management) || 4.0,
          road: Number(scores.road) || 3.5,
        },
        summaries: summaries.length > 0 ? summaries : ['暫無評語摘要'],
        district: districtName,
      };
    });

    // 3. Filter by tags if tags are specified
    if (tags.length > 0) {
      return formattedCampsites.filter((camp) =>
        tags.every((requiredTag) => camp.tags.includes(requiredTag))
      );
    }

    return formattedCampsites;
  } catch (err) {
    console.error('[CampsiteService] Unexpected error querying Supabase:', err);
    return filterMockData(districtName, tags);
  }
}

/**
 * Filter local mock data helper
 */
function filterMockData(districtName: string, tags: string[]): Campsite[] {
  const isAll = !districtName || districtName === '全部地區' || districtName === '全台灣';
  return taianCampsites.filter((camp) => {
    const matchDistrict = isAll || camp.address.includes(districtName) || camp.district === districtName;
    const matchTags = tags.length === 0 || tags.every((t) => camp.tags.includes(t));
    return matchDistrict && matchTags;
  });
}
