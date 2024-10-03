import VideoCarousel from './components/VideoCarousel';

export interface CarouselItem {
  id: number;
  title: string;
  src: string;
}

export default function Home() {
  // This is just provided data.

  // This can be fetched from an API or a database and passed to the VideoCarousel component.
  const videos: CarouselItem[] = [
    { id: 1, title: 'Video 1', src: '/video/1.mp4' },
    { id: 2, title: 'Video 2', src: '/video/2.mp4' },
    { id: 3, title: 'Video 3', src: '/video/3.mp4' },
    { id: 4, title: 'Video 4', src: '/video/4.mp4' },
    { id: 5, title: 'Video 5', src: '/video/5.mp4' },
    { id: 6, title: 'Video 6', src: '/video/6.mp4' },
    { id: 7, title: 'Video 7', src: '/video/7.mp4' },
    { id: 8, title: 'Video 8', src: '/video/8.mp4' },
    { id: 9, title: 'Video 9', src: '/video/9.mp4' },
    { id: 10, title: 'Video 10', src: '/video/10.mp4' },
    { id: 11, title: 'Video 11', src: '/video/11.mp4' },
    { id: 12, title: 'Video 12', src: '/video/12.mp4' },
    { id: 13, title: 'Video 13', src: '/video/13.mp4' },
    { id: 14, title: 'Video 14', src: '/video/14.mp4' },
    // { id: 15, title: 'Video 15', src: '/video/15.mp4' },
  ];

  return <VideoCarousel videos={videos} />;
}
