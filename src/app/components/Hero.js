"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Hero() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // Data card NFT dengan konten yang lebih lengkap
  const nftCards = [
    {
      id: 1,
      image: "/cover1.jpg",
      title: "SOLO LEVELING",
      rating: "4.9",
      description: "Popular 1",
      genre: "Action, Fantasy",
      chapter: "Chapter 179",
    },
    {
      id: 2,
      image: "/cover2.jpg",
      title: "ONE PIECE",
      rating: "4.8",
      description: "Popular 2",
      genre: "Adventure, Fantasy",
      chapter: "Chapter 1085",
    },
    {
      id: 3,
      image: "/cover.jpg",
      title: "NARUTO",
      rating: "4.7",
      description: "Popular 3",
      genre: "Action, Adventure",
      chapter: "Chapter 700",
    },
  ];

  // Fungsi untuk berpindah ke card berikutnya
  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % nftCards.length);
  };

  // Fungsi untuk berpindah ke card sebelumnya
  const prevCard = () => {
    setCurrentCardIndex(
      (prevIndex) => (prevIndex - 1 + nftCards.length) % nftCards.length
    );
  };

  // Indicator dots for carousel
  const renderDots = () => {
    return (
      <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
        {nftCards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentCardIndex(index)}
            className={`h-2 rounded-full transition-all ${
              currentCardIndex === index
                ? "w-6 bg-purple-500"
                : "w-2 bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    );
  };

  // Gunakan useEffect untuk mengatur interval
  useEffect(() => {
    const interval = setInterval(() => {
      nextCard();
    }, 5000); // Increased to 5 seconds for better reading time

    // Membersihkan interval saat komponen di-unmount
    return () => clearInterval(interval);
  }, []);

  // Data card yang sedang aktif
  const currentCard = nftCards[currentCardIndex];

  return (
    <section className="relative w-full min-h-screen text-white flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-8 md:py-12  gap-8">
      {/* Kiri: Teks & Tombol */}
      <div className="w-full md:w-1/2 text-center md:text-left relative z-10">
        <div className="mt-8 sm:mt-10 lg:mt-2">
          <a href="#" className="inline-flex space-x-6">
            <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold text-indigo-400 ring-1 ring-indigo-500/20 ring-inset">
              Terbaru
            </span>
            <span className="inline-flex items-center space-x-2 text-sm font-medium text-gray-300">
              <span>Boku no Hero Ac....</span>
              <ChevronRightIcon
                aria-hidden="true"
                className="size-5 text-gray-500"
              />
            </span>
          </a>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-4">
          Baca Manga <br /> Terlengkap dan <br />{" "}
          <div className=""> No Iklan</div>
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-300 max-w-md mx-auto md:mx-0">
          Website baca manga Terlengkap dan No Iklan bikin kamu baca manga
          dengan nyaman.
        </p>

        {/* Tombol */}
        <div className="mt-6 flex justify-center md:justify-start space-x-4">
          <button className="rounded-md bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-80 hover:scale-105">
            Jelajahi
          </button>
          <button className="border border-gray-400 px-6 py-3 text-sm font-semibold text-white rounded-md hover:bg-gray-800 transition-all">
            Genre
          </button>
        </div>
      </div>

      {/* Kanan: Card NFT - Improved for mobile and visuals */}
      <div className="w-full md:w-1/3 flex items-center justify-center">
        <div className="relative w-full max-w-sm h-[420px] sm:h-[480px] rounded-3xl shadow-xl overflow-hidden border border-purple-500/30">
          {/* Glass effect container with animation */}
          <div className="relative rounded-3xl bg-gray-900/80 backdrop-blur-sm overflow-hidden h-full transform transition-all duration-500 hover:scale-[1.02] group">
            {/* Gambar dengan better loading */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={currentCard.image}
                alt={`${currentCard.title} Cover`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                className="rounded-3xl transition-transform duration-700 group-hover:scale-110"
                unoptimized
              />
            </div>

            {/* Improved Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-3xl"></div>

            {/* Badge di pojok kanan atas */}
            <div className="absolute top-4 right-4 bg-purple-600/90 px-3 py-1 rounded-full text-xs font-bold">
              {currentCard.chapter}
            </div>

            {/* Genre tags */}
            <div className="absolute top-4 left-4">
              <span className="bg-black/60 text-xs px-2 py-1 rounded-md backdrop-blur-sm">
                {currentCard.genre}
              </span>
            </div>

            {/* Informasi di bawah dengan layout yang lebih baik */}
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 via-black/70 to-transparent rounded-b-3xl text-white">
              <div className="flex justify-between items-end mb-3">
                <div>
                  <p className="text-indigo-300 text-sm mb-1">
                    {currentCard.description}
                  </p>
                  <h3 className="font-bold text-xl md:text-2xl tracking-wide">
                    {currentCard.title}
                  </h3>
                </div>
                <div className="flex items-center bg-black/30 px-3 py-1 rounded-full">
                  <span className="text-yellow-400 mr-1">⭐</span>
                  <span className="font-semibold">{currentCard.rating}</span>
                </div>
              </div>

              {/* Tombol dengan desain yang lebih modern */}
              <div className="flex space-x-3">
                <button className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 text-sm rounded-lg hover:shadow-purple-500/30 hover:shadow-lg transition-all duration-300 font-medium">
                  Baca sekarang
                </button>
                <button className="flex-1 bg-gray-800/70 backdrop-blur-sm border border-gray-700 text-white py-3 text-sm rounded-lg hover:bg-gray-700 transition-all duration-300 font-medium">
                  Bookmarks
                </button>
              </div>
            </div>
          </div>

          {/* Improved navigation buttons */}
          <button
            onClick={prevCard}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white w-8 h-8 flex items-center justify-center rounded-full backdrop-blur-sm transition-all duration-300 opacity-70 hover:opacity-100"
            aria-label="Previous manga"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextCard}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white w-8 h-8 flex items-center justify-center rounded-full backdrop-blur-sm transition-all duration-300 opacity-70 hover:opacity-100"
            aria-label="Next manga"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Dots indicator */}
          {renderDots()}
        </div>
      </div>
    </section>
  );
}
