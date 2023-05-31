"use client";

import Container from "../Container";
import { Logo, Search, UserMenu } from "../Navbar";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="fixed z-10 bg-white w-full shadow-sm">
      <div className=" border-b-[1px]">
        <Container>
          <div className="flex flex-grow justify-between items-center gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;
