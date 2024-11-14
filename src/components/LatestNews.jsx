import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="w-[85%] mx-auto bg-black bg-opacity-10 flex justify-center items-center gap-4 p-4 rounded">
      <p className="py-2 px-3 bg-[#D72050] w-fit text-white">Latest</p>
      <Marquee pauseOnHover={true} className="space-x-7">
        <Link to={"/news"} className="font-medium">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt,
          accusantium.
        </Link>
        <Link to={"/news"} className="font-medium">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt,
          accusantium.
        </Link>
        <Link to={"/news"} className="font-medium">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt,
          accusantium.
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
