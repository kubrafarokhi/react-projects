import "./caraousel.css";
import { useState, useRef, useEffect } from "react";
import Arrows from "./views/Arrows/Arrows";
import Slide from "./views/Slide/Slide";

const images = [
  {
    img:
      "https://i.pinimg.com/originals/52/c6/65/52c665df0515dd447eb92544374cf543.jpg",
    alt: "image1"
  },
  {
    img:
      "https://www.pngall.com/wp-content/uploads/2016/07/Tom-And-Jerry-Free-Download-PNG.png",
    alt: "image1"
  },
  {
    img:
      "https://i.pinimg.com/736x/b3/ef/e6/b3efe6aeec2e4bad5c7bb2419effe9d3.jpg",
    alt: "image1"
  }
];

export default function Caraousel() {
  const delay = 1000;
  const [carauselData, setCaraouselData] = useState(images);
  const [current, setCurrent] = useState(0);
  const [image, setImage] = useState(carauselData[current]);

  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrent((prevIndex) =>
          prevIndex === carauselData.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [current]);

  useEffect(() => setImage(carauselData[current]), [current, image]);

  const nextImage = () => {
    current === carauselData.length - 1
      ? setCurrent(0)
      : setCurrent(current + 1);
  };

  const prevImage = () => {
    current === 0
      ? setCurrent(carauselData.length - 1)
      : setCurrent(current - 1);
  };
  return (
    <div className="App">
      <section>
        <div className="slideshow-container">
          <Slide image={image} />
          <Arrows nextImage={nextImage} prevImage={prevImage} />
        </div>
      </section>
    </div>
  );
}
