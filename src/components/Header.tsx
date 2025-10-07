import Container from "./Container";
import React from "react";
import HeaderMenu from "./HeaderMenu";
import { Button } from "./ui/button";
// import Link from "next/link";
// import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="bg-neutral-50 border-b border-gray-800/20 px-5">
      <Container className="flex justify-between items-center py-5">
        <div className="w-auto md:w-1/3 flex items-center justify-start gap-2.5 md:gap-0">
          {/* <MobileMenu /> */}
          {/* <Logo /> */}
        </div>

        <HeaderMenu />

        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
          <Button
            className="bg-dark-blue text-white hover:bg-dark-blue/90 border-0 px-5 py-2.5 font-semibold shadow-lg shadow-light-blue/20 hover:shadow-light-blue/20 hoverEffect"
            aria-label="Contact Us"
          >
            Contact Us
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
