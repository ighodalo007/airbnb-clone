"use client";

import Image from "next/image";

type Props = {};

const Avatar = (props: Props) => {
  return (
    <Image
      alt="avatar"
      height="30"
      width="30"
      src="/images/placeholder.png"
      className="rounded-full"
    />
  );
};

export default Avatar;
