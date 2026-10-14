import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Campsite } from '../../types';

// Fix Leaflet's default icon paths in bundlers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

interface CampingMapProps {
  campsites: Campsite[];
  selectedCampsite: Campsite | null;
  onOpenDetail: (campsite: Campsite) => void;
}

export const CampingMap: React.FC<CampingMapProps> = ({
  campsites,
  selectedCampsite,
  onOpenDetail,
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<{ [id: number]: L.Marker }>({});

  // 1. Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Check if map already exists
    if (!mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current, {
        center: [24.445, 120.950],
        zoom: 13,
        zoomControl: true,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      mapInstanceRef.current = map;
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // 2. Update markers when campsites change
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Remove old markers
    Object.values(markersRef.current).forEach((m) => map.removeLayer(m));
    markersRef.current = {};

    // Create custom pin icon
    const createCustomIcon = (rating: number) => {
      return L.divIcon({
        className: 'custom-camp-pin',
        html: `
          <div style="
            background: linear-gradient(135deg, #0284c7, #0369a1);
            color: white;
            padding: 4px 9px;
            border-radius: 9999px;
            font-size: 11px;
            font-weight: bold;
            display: flex;
            align-items: center;
            gap: 4px;
            box-shadow: 0 4px 12px rgba(2, 132, 199, 0.4);
            border: 2px solid white;
            white-space: nowrap;
          ">
            <span>⛺</span>
            <span>★${rating.toFixed(1)}</span>
          </div>
        `,
        iconSize: [64, 26],
        iconAnchor: [32, 26],
        popupAnchor: [0, -28],
      });
    };

    // Add new markers
    campsites.forEach((camp) => {
      const marker = L.marker([camp.lat, camp.lng], {
        icon: createCustomIcon(camp.googleRating),
      }).addTo(map);

      // AI Summary snippet for popup
      const summarySnippet =
        camp.summaries && camp.summaries.length > 0
          ? camp.summaries[0]
          : '風景優美，營區設施維護良好。';

      const coverImg =
        camp.images?.[0] ||
        'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80';

      const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        camp.name + ' ' + camp.address
      )}`;

      const popupContent = document.createElement('div');
      popupContent.className = 'p-1 text-slate-800 text-left';
      popupContent.innerHTML = `
        <div style="width: 100%; height: 100px; border-radius: 12px; overflow: hidden; margin-bottom: 7px; position: relative; background: #f1f5f9;">
          <img src="${coverImg}" style="width: 100%; height: 100%; object-fit: cover;" alt="${camp.name}" loading="lazy" />
          <div style="position: absolute; bottom: 5px; left: 6px; background: rgba(8, 47, 73, 0.85); color: #f0f9ff; font-size: 10px; font-weight: 500; padding: 2px 7px; border-radius: 9999px; backdrop-filter: blur(4px);">
            ${camp.city || ''} ${camp.district || ''}
          </div>
        </div>
        <div style="font-weight: bold; color: #0369a1; font-size: 14px; margin-bottom: 2px;">
          ${camp.name}
        </div>
        <div style="font-size: 11px; color: #64748b; margin-bottom: 6px;">
          <span style="color: #d97706; font-weight: bold;">★ ${camp.googleRating.toFixed(1)}</span>
          <span style="color: #94a3b8;">(${camp.reviewsCount} 則)</span> | 
          <span style="color: #0284c7; font-weight: 600;">衛浴: ${camp.scores.cleanliness.toFixed(1)}</span> | 
          <span style="color: #b45309; font-weight: 600;">路況: ${camp.scores.road.toFixed(1)}</span>
        </div>

        <!-- AI 摘要重點區塊 -->
        <div style="
          background-color: #f0f9ff;
          border: 1px solid #bae6fd;
          border-radius: 12px;
          padding: 6px 9px;
          margin: 6px 0 8px 0;
          font-size: 11px;
          line-height: 1.4;
          color: #0369a1;
        ">
          <div style="font-weight: bold; font-size: 10px; margin-bottom: 2px; color: #0284c7; display: flex; align-items: center; gap: 3px;">
            <span>✨ AI 評論重點摘要：</span>
          </div>
          <div>${summarySnippet}</div>
        </div>

        <!-- 導航與詳情按鈕組 -->
        <div style="display: flex; gap: 6px; margin-top: 6px;">
          <a
            href="${googleMapsUrl}"
            target="_blank"
            rel="noopener noreferrer"
            style="
              flex: 1;
              text-align: center;
              font-size: 11px;
              background: #f0f9ff;
              color: #0284c7;
              padding: 7px 6px;
              border-radius: 9999px;
              text-decoration: none;
              font-weight: 600;
              border: 1px solid #bae6fd;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 3px;
              box-shadow: 0 1px 2px rgba(0,0,0,0.05);
            "
          >
            <span>📍 Google導航</span>
          </a>

          <button
            id="popup-btn-${camp.id}"
            style="
              flex: 1.2;
              font-size: 11px;
              background: linear-gradient(135deg, #0284c7, #0369a1);
              color: white;
              padding: 7px 10px;
              border-radius: 9999px;
              border: none;
              cursor: pointer;
              font-weight: 600;
              box-shadow: 0 2px 6px rgba(2,132,199,0.3);
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 3px;
            "
          >
            <span>完整詳情 ➔</span>
          </button>
        </div>
      `;

      popupContent.querySelector(`#popup-btn-${camp.id}`)?.addEventListener('click', (e) => {
        e.stopPropagation();
        onOpenDetail(camp);
      });

      marker.bindPopup(popupContent, {
        maxWidth: 290,
        minWidth: 230,
        autoPan: true,
        autoPanPadding: [35, 35],
        className: 'campsite-custom-popup',
      });

      markersRef.current[camp.id] = marker;
    });

    // Auto-fit bounds if campsites exist
    if (campsites.length > 0) {
      const markersList = Object.values(markersRef.current);
      if (markersList.length > 0) {
        const group = L.featureGroup(markersList);
        map.fitBounds(group.getBounds().pad(0.2), { maxZoom: 13, animate: true });
      }
    }
  }, [campsites, onOpenDetail]);

  // 3. React to selected campsite from list
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || !selectedCampsite) return;

    map.flyTo([selectedCampsite.lat, selectedCampsite.lng], 15, {
      duration: 0.8,
    });

    const marker = markersRef.current[selectedCampsite.id];
    if (marker) {
      // Open popup after map finished flying
      const timer = setTimeout(() => {
        marker.openPopup();
      }, 850);
      return () => clearTimeout(timer);
    }
  }, [selectedCampsite]);

  return (
    <div className="w-full h-full relative">
      <div ref={mapContainerRef} className="w-full h-full min-h-[400px]" />
    </div>
  );
};
