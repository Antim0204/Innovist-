import { useEffect, useState } from "react";
import Banner from "./Banner";
import { banners } from "./constants";

function BannerList() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Banner
      title={banners[current].title}
      subtitle={banners[current].subtitle}
      backgroundImage={banners[current].image}
    />
  );
}

export default BannerList;