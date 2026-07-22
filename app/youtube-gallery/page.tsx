import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { videos } from "@/data/videos";
import VideoGrid from "@/components/shared/VideoGrid";

export const metadata = {
  title: "YouTube Gallery - TechPikly",
};

export default function YoutubeGalleryPage() {
  return (
    <div className="container-x py-8">
      <div className="flex items-center gap-1.5 text-sm text-muted mb-6">
        <Link href="/" className="hover:text-brand">Home</Link>
        <ChevronRight size={14} />
        <span className="text-ink font-medium">YouTube Gallery</span>
      </div>

      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-extrabold text-ink mb-2">
          YouTube Gallery
        </h1>
        <p className="text-muted max-w-2xl text-sm">
          Watch unboxings, product tutorials, warehouse tours, and customer
          stories from the TechPikly channel.
        </p>
      </div>

      <VideoGrid videos={videos} />
    </div>
  );
}
