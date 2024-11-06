
import Contact from "./layouts/contactUs";
import Features from "./layouts/features";
import Header from "./layouts/header";
import NavBar from "./layouts/navBar";
import Partners from "./layouts/partners";
import Purpose from "./layouts/pupose";

export default function Home() {
  return (
    <div className=" w-full overflow-x-hidden">
      <NavBar></NavBar>
      <Header></Header>
      <Features></Features>
      <Purpose></Purpose>
      <Partners></Partners>
      <Contact></Contact>
      
    </div>
  );
}
