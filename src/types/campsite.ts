export interface CampsiteScores {
  cleanliness: number; // 衛浴整潔 (1.0 - 5.0)
  management: number;  // 環境管理 & 靜音表現 (1.0 - 5.0)
  road: number;        // 抵達難易度 (越高越好走, 1.0 - 5.0)
}

export interface Campsite {
  id: number;
  name: string;
  lat: number;
  lng: number;
  phone: string;
  address: string;
  googleRating: number;
  reviewsCount: number;
  tags: string[];
  scores: CampsiteScores;
  summaries: string[];
  district?: string;
  city?: string;
  images?: string[];
  siteMapUrl?: string;
}

export interface DistrictSummary {
  districtName: string;
  city: string;
  title: string;
  badge: string;
  description: string;
  highlightPoints?: string[];
  warningRoad?: string;
}

export interface CampsiteFilterState {
  searchQuery: string;
  selectedTags: string[];
  minCleanliness?: number;
  minRoad?: number;
}

export interface UGCFeedback {
  id: string;
  campsiteId: number;
  userName: string;
  tag: string;
  comment?: string;
  createdAt: string;
}

