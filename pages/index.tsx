import Image from "next/image";
import type { NextPage } from "next";
import { bitpinSnapshot } from "_/images";
import { memo } from "react";

const Home: NextPage = () => {
  return (
    <section className="my-4">
      <Image className="rounded-3" src={bitpinSnapshot} alt="اسکرین شات وبسایت بی‌پین" />
    </section>
  );
};

export default memo(Home);
