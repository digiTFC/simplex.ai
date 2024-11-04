import Header from "./layouts/header";
import NavBar from "./layouts/navBar";
import Pricing from "./layouts/pricing";

export default function Home() {
  return (
    <div className=" w-full overflow-x-hidden">
      <NavBar></NavBar>
      <Header></Header>

    </div>
  );
}
