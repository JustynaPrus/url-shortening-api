import React from "react";
import MobileNavigation from "./organisms/MobileNavigation";
import DesktopNavigation from "./organisms/DesktopNavigation";

const Navigation = () => {
  return (
    <nav>
      <MobileNavigation />
      <DesktopNavigation />
    </nav>
  );
};

export default Navigation;
