import Features from "./layouts/features";
import Header from "./layouts/header";
import NavBar from "./layouts/navBar";
import Pricing from "./layouts/pricing";
import Purpose from "./layouts/pupose";

export default function Home() {
  return (
    <div className=" w-full overflow-x-hidden">
      <NavBar></NavBar>
      <Header></Header>
      <Features></Features>
      <Purpose></Purpose>
    </div>
  );
}
