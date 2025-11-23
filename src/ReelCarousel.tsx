import React, { useState, useEffect } from "react";
import styles from "./ReelCarousel.module.css";
import { registerVevComponent } from "@vev/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Props = {
  title: string;
  sheetUrl: string;
};

type Reel = {
  id: number;
  title: string;
  video: string;
};

const getVimeoEmbedUrl = (vimeoUrl: string): string => {
  const videoId = vimeoUrl.split("/").pop()?.split("?")[0];
  return `https://player.vimeo.com/video/${videoId}`;
};

const parseCSV = (csvText: string): Reel[] => {
  const lines = csvText.trim().split("\n");
  if (lines.length < 2) return [];

  const headers = lines[0].split(",").map((h) => h.trim().toLowerCase());
  const urlIndex = headers.findIndex((h) => h === "url");
  const titleIndex = headers.findIndex((h) => h === "navn");

  if (urlIndex === -1) return [];

  return lines.slice(1).map((line, index) => {
    const values = line.split(",").map((v) => v.trim());
    const url = values[urlIndex] || "";
    const title = titleIndex !== -1 ? values[titleIndex] || `Reel ${index + 1}` : `Reel ${index + 1}`;

    return {
      id: index + 1,
      title,
      video: url,
    };
  }).filter((reel) => reel.video); // Filter out rows without URLs
};

const ReelCarousel = ({ 
  title = "Vev", 
  sheetUrl = "enter spreadsheet url" 
}: Props) => {
  const [reels, setReels] = useState<Reel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!sheetUrl || sheetUrl === "enter spreadsheet url" || sheetUrl.trim() === "") {
      setLoading(false);
      return;
    }

    const fetchReels = async () => {
      try {
        setLoading(true);
        const response = await fetch(sheetUrl);
        const csvText = await response.text();
        const parsedReels = parseCSV(csvText);
        setReels(parsedReels);
      } catch (error) {
        console.error("Error fetching reels:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReels();
  }, [sheetUrl]);

  if (!sheetUrl || sheetUrl === "enter spreadsheet url" || sheetUrl.trim() === "") {
    return (
      <div className={styles.wrapper}>
        <h2>Hello, {title} - how are you doing?</h2>
        <p>Please add Spreadsheet URL</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className={styles.wrapper}>
        <h1>Reels Carousel</h1>
        <p>Loading reels...</p>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <h1>{title}</h1>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        navigation={true}
        pagination={{ clickable: true }}
        className={styles.carousel}
      >
        {reels.map((reel) => (
          <SwiperSlide key={reel.id}>
            <div className={styles.slide}>
              <h2>{reel.title}</h2>
              <div className={styles.videoContainer}>
                <iframe
                  className={styles.video}
                  src={getVimeoEmbedUrl(reel.video)}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={reel.title}
                  frameBorder="0"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

registerVevComponent(ReelCarousel, {
  name: "ReelCarousel",
  props: [
    { name: "title", type: "string", initialValue: "Vev" },
    { 
      name: "sheetUrl", 
      type: "string", 
      initialValue: "enter spreadsheet url" 
    },
  ],
  editableCSS: [
    {
      selector: styles.wrapper,
      properties: ["background"],
    },
    {
      selector: styles.videoContainer,
      properties: ["height", "border-radius"],
    },
  ],
  type: 'standard',
});

export default ReelCarousel;
