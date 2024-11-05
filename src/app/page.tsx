
import Contact from "./layouts/contactUs";
import CopyRight from "./layouts/copyright";
import Features from "./layouts/features";
import Footer from "./layouts/footer";
import Header from "./layouts/header";
import NavBar from "./layouts/navBar";
import Partners from "./layouts/partners";
import Purpose from "./layouts/pupose";

export default function Home() {
  return (
    <div className=" w-full overflow-x-hidden">
      <div><NavBar></NavBar></div>
      <div><Header></Header></div>
      <div><Features></Features></div>
      <div><Purpose></Purpose></div>
      <div><Partners></Partners></div>
      <div><Contact></Contact></div>
      <div><Footer></Footer></div>
      <div>
      <CopyRight></CopyRight>
      </div>
    </div>
  );
}
