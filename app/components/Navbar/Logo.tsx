"use client";

import Image from "next/image";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Image
      src="/images/logo.png"
      alt="logo"
      height="100"
      width="100"
      className="hidden sm:block cursor-pointer"
    />
  );
};

export default Logo;
