"use client";
import { useState } from "react";
import { Gallery } from "@/types";

interface ImageData {
  attributes: {
    url: string;
    name: string;
  };
}

const GalleryComponent: React.FC<Gallery> = ({ Title, Images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (Images?.data) {
      setSelectedImageIndex((prev) => 
        prev === Images.data.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (Images?.data) {
      setSelectedImageIndex((prev) => 
        prev === 0 ? Images.data.length - 1 : prev - 1
      );
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      nextImage();
    } else if (e.key === 'ArrowLeft') {
      prevImage();
    } else if (e.key === 'Escape') {
      closeModal();
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      <section className="py-16 px-4 bg-secondary text-primary">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-6xl font-bold mb-4 uppercase font-['Salford_Sans']">
              {Title}
            </h2>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Images?.data?.map((image, index) => (
              <div
                key={index}
                className="group cursor-pointer relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => openModal(index)}
              >
                <div className="aspect-square w-full relative overflow-hidden bg-gray-200">
                  <img
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${image.attributes.url}`}
                    alt={image.attributes.name || `Gallery image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Popup */}
      {isModalOpen && Images?.data && (
        <div
          className="fixed inset-0 z-50 hidden lg:flex items-center justify-center p-4  bg-opacity-15 backdrop-blur-sm"
          onClick={handleBackdropClick}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">

            {/* Previous Arrow */}
            {Images.data.length > 1 && (
              <button
                onClick={prevImage}
                className="absolute cursor-pointer left-4 top-1/2 transform -translate-y-1/2 bg-secondary bg-opacity-50 hover:bg-opacity-75 text-primary rounded-full p-3 transition-all duration-200 hover:scale-110 z-10"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            )}

            {/* Next Arrow */}
            {Images.data.length > 1 && (
              <button
                onClick={nextImage}
                className="absolute cursor-pointer right-4 top-1/2 transform -translate-y-1/2 bg-secondary bg-opacity-50 hover:bg-opacity-75 text-primary rounded-full p-3 transition-all duration-200 hover:scale-110 z-10"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            )}

            {/* Image Container */}
            <div className="bg-secondary pt-4 rounded-lg overflow-hidden shadow-2xl">
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${Images.data[selectedImageIndex].attributes.url}`}
                alt={Images.data[selectedImageIndex].attributes.name || `Gallery image ${selectedImageIndex + 1}`}
                className="w-full h-auto max-h-[80vh] object-cover"
              />
              
              {/* Image Caption and Counter */}
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">
                    {selectedImageIndex + 1} / {Images.data.length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default GalleryComponent;