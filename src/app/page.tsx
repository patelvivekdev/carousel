import VideoCarousel from "./components/VideoCarousel";

export interface CarouselItem {
  id: number;
  title: string;
  src: string;
}

export default function Home() {
  // This is just provided data.

  // This can be fetched from an API or a database and passed to the VideoCarousel component.
  const videos: CarouselItem[] = [
    { id: 1, title: "Whispers of Ipsum", src: "/video/1.mp4" },
    { id: 2, title: "Forest of Lorem Ipsum", src: "/video/2.mp4" },
    { id: 3, title: "Lorem Ipsum in the Wilderness", src: "/video/3.mp4" },
    { id: 4, title: "The Ipsum Tide", src: "/video/4.mp4" },
    { id: 5, title: "Echoes of Ipsum", src: "/video/5.mp4" },
    { id: 6, title: "Lorem Ipsum in the City", src: "/video/6.mp4" },
    { id: 7, title: "Whispers of Ipsum", src: "/video/7.mp4" },
    { id: 8, title: "Forest of Lorem Ipsum", src: "/video/8.mp4" },
    { id: 9, title: "Lorem Ipsum in the Wilderness", src: "/video/9.mp4" },
    { id: 10, title: "The Ipsum Tide", src: "/video/10.mp4" },
    { id: 11, title: "Echoes of Ipsum", src: "/video/11.mp4" },
    { id: 12, title: "Lorem Ipsum in the City", src: "/video/12.mp4" },
    { id: 13, title: "Whispers of Ipsum", src: "/video/13.mp4" },
    { id: 14, title: "Forest of Lorem Ipsum", src: "/video/14.mp4" },
    { id: 15, title: "Lorem Ipsum in the Wilderness", src: "/video/15.mp4" },
  ];
  return (
    <>
      <VideoCarousel videos={videos} />
    </>
  );
}
