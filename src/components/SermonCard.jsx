import { useState } from "react";
import ReactPlayer from "react-player";
import { Calendar, User, Play, X, Facebook, Youtube } from "lucide-react";

const SermonCard = ({ sermon, isFeatured = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState("youtube"); // default to youtube

  // Helper to determine embed URLs
  const getEmbedUrl = (platform) => {
    if (platform === "facebook" && sermon.facebookLink) {
      return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(sermon.facebookLink)}&show_text=false&width=auto`;
    } else if (platform === "youtube" && sermon.youtubeLink) {
      if (sermon.youtubeLink.includes("youtube.com/embed/")) {
        const match = sermon.youtubeLink.match(/youtube\.com\/embed\/([^?&]+)/);
        const videoId = match ? match[1] : null;
        return videoId
          ? `https://www.youtube.com/watch?v=${videoId}`
          : sermon.youtubeLink;
      }
      return sermon.youtubeLink;
    }
    return "";
  };

  const handlePlay = (platform) => {
    setSelectedPlatform(platform);
    setIsPlaying(true);
  };

  const currentPlatformLabel =
    selectedPlatform === "facebook" ? "Facebook" : "YouTube";
  const currentPlatformIcon =
    selectedPlatform === "facebook" ? (
      <Facebook className="w-4 h-4" />
    ) : (
      <Youtube className="w-4 h-4" />
    );

  return (
    <>
      <div
        className={`group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col ${isFeatured ? "md:flex-row" : ""}`}
      >
        {/* Thumbnail Section */}
        <div
          className={`relative overflow-hidden ${isFeatured ? "md:w-1/2" : "aspect-video"}`}
        >
          <img
            src={sermon.thumbnail}
            alt={sermon.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors duration-300" />
          <div className="absolute inset-0 flex items-center justify-center gap-4">
            {sermon.facebookLink && (
              <button
                onClick={() => handlePlay("facebook")}
                className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
                aria-label="Play on Facebook"
              >
                <Facebook className="w-6 h-6 text-white" />
              </button>
            )}
            {sermon.youtubeLink && (
              <button
                onClick={() => handlePlay("youtube")}
                className="w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
                aria-label="Play on YouTube"
              >
                <Youtube className="w-6 h-6 text-white" />
              </button>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div
          className={`p-6 md:p-8 flex flex-col justify-center flex-grow ${isFeatured ? "md:w-1/2" : ""}`}
        >
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-3">
            <span className="flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-full text-slate-700 font-medium">
              {sermon.series && <span>{sermon.series}</span>}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {sermon.date}
            </span>
          </div>

          <h3
            className={`font-bold text-slate-900 mb-2 ${isFeatured ? "text-2xl md:text-3xl" : "text-xl"}`}
          >
            {sermon.title}
          </h3>

          <p className="flex items-center gap-2 text-slate-600 mb-6">
            <User className="w-4 h-4" />
            {sermon.preacher}
          </p>

          <div className="flex gap-3 mt-auto">
            {sermon.facebookLink && (
              <button
                onClick={() => handlePlay("facebook")}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                <Facebook className="w-4 h-4" />
                Facebook
              </button>
            )}
            {sermon.youtubeLink && (
              <button
                onClick={() => handlePlay("youtube")}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                <Youtube className="w-4 h-4" />
                YouTube
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isPlaying && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="border-b border-white/10 px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-950/70">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
                  Now playing
                </p>
                <h2 className="text-xl font-semibold text-white">
                  {sermon.title}
                </h2>
                <div className="inline-flex items-center gap-2 text-sm text-slate-300">
                  {currentPlatformIcon}
                  <span>{currentPlatformLabel} video</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {sermon.facebookLink && (
                  <button
                    onClick={() => handlePlay("facebook")}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all ${selectedPlatform === "facebook" ? "bg-blue-600 text-white" : "bg-white/10 text-slate-200 hover:bg-white/20"}`}
                  >
                    <Facebook className="w-4 h-4" />
                    Facebook
                  </button>
                )}
                {sermon.youtubeLink && (
                  <button
                    onClick={() => handlePlay("youtube")}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all ${selectedPlatform === "youtube" ? "bg-red-600 text-white" : "bg-white/10 text-slate-200 hover:bg-white/20"}`}
                  >
                    <Youtube className="w-4 h-4" />
                    YouTube
                  </button>
                )}
              </div>
            </div>
            <div className="aspect-[16/9] w-full flex items-center justify-center bg-black relative z-10">
              {selectedPlatform === "facebook" ? (
                <iframe
                  src={`${getEmbedUrl("facebook")}&autoplay=1`}
                  className="w-full h-full border-0 absolute inset-0"
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <ReactPlayer
                  url={getEmbedUrl("youtube")}
                  playing={true}
                  controls={true}
                  width="100%"
                  height="100%"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SermonCard;
