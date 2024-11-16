import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNav from "../components/layout-components/LeftNav";
import RightNav from "../components/layout-components/RightNav";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <Header></Header>
      <LatestNews></LatestNews>
      <Navbar></Navbar>
      <main className="w-[85%] mx-auto mt-6 grid grid-cols-12">
        <aside className="left col-span-3"><LeftNav></LeftNav></aside>
        <section className="left col-span-6"> <Outlet></Outlet> </section>
        <aside className="left col-span-3"><RightNav></RightNav></aside>
      </main>
    </div>
  );
};

export default HomeLayout;
