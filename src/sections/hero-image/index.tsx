import React from "react";
import Image from "next/image";

const HeroMedia: React.FC<{ data: any }> = ({ data }) => {
  const mediaUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${data.data.attributes.url}`;
  
  // Function to determine if the URL is a video
  const isVideo = (url: string): boolean => {
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi'];
    return videoExtensions.some(ext => url.toLowerCase().includes(ext));
  };

  // Function to determine if the URL is an image
  const isImage = (url: string): boolean => {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp'];
    return imageExtensions.some(ext => url.toLowerCase().includes(ext));
  };

  console.log(data.data.attributes.url);

  return (
    <div className="w-full">
      {isVideo(mediaUrl) ? (
        <video 
          className="w-full h-auto" 
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src={mediaUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : isImage(mediaUrl) ? (
        <Image
          src={mediaUrl}
          alt="hero-media"
          className="w-full h-auto"
          width={800} // You may want to adjust these based on your needs
          height={600}
           // Add this if it's above the fold
        />
      ) : (
        <div className="w-full p-4 bg-gray-100 text-center">
          <p>Unsupported media type</p>
        </div>
      )}
    </div>
  );
};

export default HeroMedia;
