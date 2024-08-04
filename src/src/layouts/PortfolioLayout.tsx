import { Outlet } from "react-router";
import { FooterLinks } from "../components/FooterLinks/FooterLinks";
import { HeaderMegaMenu } from "../components/HeaderMegaMenu/HeaderMegaMenu";

const PortfolioLayout = () => {

  return (
    <>
    
    <HeaderMegaMenu />
      <div className="min-h-[40vh]">
          <div className="flex">
              <div className="flex-none hidden md:block">

              </div>
              <div className="flex-grow mx-auto">
                  <Outlet />
              </div>
          </div>
      </div>

    <FooterLinks />
    </>
  );
};

export default PortfolioLayout;