import React ,{ useState , useEffect}from "react";
import "./scrollIndicate.css";

const ScrollIndicate = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onscroll);
  }, []);
  return (
    <div className="progress-indicator-wrapper">
      <div className="progress-main-style"
        style={{width: `${scrollTop}%`}}
      ></div>
    </div>
  );
};

export default ScrollIndicate;
