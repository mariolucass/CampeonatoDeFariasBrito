// Using URL strings instead of static imports so Next.js <Image>
// can serve optimised WebP/AVIF on-demand via its image pipeline.
// Static imports bundled ALL 10 images into JS (~5 MB uncompressed).

export const imgsWeekends = [
  { name: "image1",  image: "/assets/img1.jpg"  },
  { name: "image2",  image: "/assets/img2.jpg"  },
  { name: "image3",  image: "/assets/img9.png"  },
  { name: "image4",  image: "/assets/img8.png"  },
  { name: "image5",  image: "/assets/img10.png" },
  { name: "image6",  image: "/assets/img6.jpg"  },
  { name: "image7",  image: "/assets/img7.jpg"  },
  { name: "image8",  image: "/assets/img3.jpg"  },
  { name: "image9",  image: "/assets/img4.jpg"  },
  { name: "image10", image: "/assets/img5.jpg"  },
];
