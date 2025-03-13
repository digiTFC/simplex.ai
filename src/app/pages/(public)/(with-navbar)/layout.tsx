import Footer from "@/app/layouts/footer";
import "../../../globals.css";
import NavBar from "@/app/layouts/navBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavBar></NavBar>
      <div className="pt-12">{children}</div>
      <div className="">
        <Footer></Footer>
      </div>
    </div>
  );
}
