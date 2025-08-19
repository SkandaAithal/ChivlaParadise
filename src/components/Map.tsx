"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import type { Map } from "leaflet";

const MapComponent = () => {
  const mapRef = useRef<Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mapInstance: Map | null = null;

    const initMap = async () => {
      if (!mapContainerRef.current || mapRef.current) return;

      const L = (await import("leaflet")).default;

      delete (L.Icon.Default.prototype as { _getIconUrl?: string })._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "/marker-icon.png",
        iconUrl: "/marker-icon.png",
        shadowUrl: "/marker-icon.png",
      });

      const lat = 16.0659004;
      const lng = 73.4638758;

      try {
        mapInstance = L.map(mapContainerRef.current, {
          zoomControl: false,
          attributionControl: false,
        }).setView([lat, lng], 13);

        mapRef.current = mapInstance;

        L.tileLayer(
          "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
          {
            attribution: "",
          }
        ).addTo(mapInstance);

        const customIcon = L.icon({
          iconUrl: "/map-icon.png",
          iconRetinaUrl: "/map-icon.png",
          iconSize: [20, 32],
          iconAnchor: [10, 32],
          popupAnchor: [0, -32],
        });

        const marker = L.marker([lat, lng], { icon: customIcon }).addTo(
          mapInstance
        );

        marker.on("click", () => {
          const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
          window.open(url, "_blank");
        });

        mapInstance.on("click", () => {
          const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
          window.open(url, "_blank");
        });
      } catch (error) {
        if (mapInstance && error) {
          mapInstance.remove();
        }
      }
    };

    initMap();

    return () => {
      if (mapInstance) {
        mapInstance.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={mapContainerRef}
      className="w-full h-[370px] rounded-2xl shadow-2xl overflow-hidden"
    />
  );
};

export default MapComponent;
