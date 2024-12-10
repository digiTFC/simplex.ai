import Footer from "@/app/layouts/core/footer";
import "../../globals.css";
import NavBar from "@/app/layouts/core/navBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>
    <NavBar></NavBar>
    <div className="">
    {children}
    </div>
    <div className=''>
            <Footer></Footer>
        </div>
    
    </div>;
}
