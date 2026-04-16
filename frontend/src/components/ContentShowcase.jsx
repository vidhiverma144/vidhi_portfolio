import React from 'react';
import { Play } from 'lucide-react';

const ContentShowcase = () => {
  const youtubeVideos = [
    {
      title: "This app is beating OLA & Uber",
      metric: "83K+ views",
      url: "https://youtu.be/jDy4ixzUJ1E",
      videoId: "jDy4ixzUJ1E"
    },
    {
      title: "Can Zepto BEAT Zomato?",
      metric: "35K+ views",
      url: "https://youtu.be/1Gz328oew5M",
      videoId: "1Gz328oew5M"
    },
    {
      title: "Mokobara Investment Story",
      metric: "Case Study",
      url: "https://youtu.be/2aCbAitBS1o",
      videoId: "2aCbAitBS1o"
    },
    {
      title: "Is Product Management for you?",
      metric: "Career Guide",
      url: "https://youtu.be/tI4lA-zFvW4",
      videoId: "tI4lA-zFvW4"
    },
    {
      title: "Flipkart Wins GenZ",
      metric: "Strategy Analysis",
      url: "https://youtu.be/6bKq3X5qEdw",
      videoId: "6bKq3X5qEdw"
    },
    {
      title: "PM Career Blueprint with Razorpay",
      metric: "Podcast",
      url: "https://youtu.be/jyzk702zHRc",
      videoId: "jyzk702zHRc"
    },
    {
      title: "Product Management Insights",
      metric: "Podcast",
      url: "https://youtu.be/7L0AO9AF-rk",
      videoId: "7L0AO9AF-rk"
    },
    {
      title: "Building Products at Scale",
      metric: "Podcast",
      url: "https://youtu.be/V-DdSnxFCG0",
      videoId: "V-DdSnxFCG0"
    },
    {
      title: "Product Strategy Deep Dive",
      metric: "Podcast",
      url: "https://youtu.be/gIXRefMVDxc",
      videoId: "gIXRefMVDxc"
    }
  ];

  return (
    <section id="content" className="py-24 bg-gradient-to-br from-white via-cherry-50/20 to-brown-50/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-4">
            <span className="text-cherry font-display font-semibold text-lg">// YouTube Content</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-black mb-6">
            Video Content That Educates
          </h2>
          <p className="text-xl text-black/70 max-w-2xl mx-auto">
            Scripted, shot, and produced engaging YouTube content for Airtribe
          </p>
        </div>

        {/* YouTube Video Grid - Uniform Size */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {youtubeVideos.map((video, idx) => (
            <a
              key={idx}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-black rounded-xl overflow-hidden border-2 border-black/10 hover:border-cherry hover:shadow-2xl transition-all duration-300"
            >
              {/* Thumbnail - Uniform aspect ratio */}
              <div className="relative aspect-video overflow-hidden bg-black">
                <img
                  src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                  <div className="w-16 h-16 bg-cherry rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                </div>
              </div>
              
              {/* Video Info */}
              <div className="p-4 bg-white">
                <h4 className="font-bold text-black mb-2 group-hover:text-cherry transition-colors line-clamp-2">
                  {video.title}
                </h4>
                <p className="text-sm text-black/60 font-semibold">{video.metric}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentShowcase;
