"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";
import type { Video } from "@/data/videos";

export default function VideoGrid({ videos }: { videos: Video[] }) {
  const [active, setActive] = useState<Video | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((v) => (
          <button
            key={v.id}
            onClick={() => setActive(v)}
            className="group text-left rounded-lg overflow-hidden border border-gray-100 shadow-card hover:shadow-lg transition-shadow"
          >
            <div className="relative aspect-video bg-black">
              <Image
                src={`https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg`}
                alt={v.title}
                fill
                className="object-cover opacity-90 group-hover:opacity-70 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-14 w-14 rounded-full bg-brand/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="text-white ml-0.5" size={22} fill="white" />
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-sm text-ink line-clamp-2 mb-1">
                {v.title}
              </h3>
              <p className="text-xs text-muted line-clamp-2">{v.description}</p>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="w-full max-w-3xl bg-black rounded-lg overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute -top-10 right-0 text-white hover:text-brand"
              aria-label="Close"
            >
              <X size={26} />
            </button>
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${active.youtubeId}?autoplay=1`}
                title={active.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-ink mb-1">{active.title}</h3>
              <p className="text-sm text-muted">{active.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
