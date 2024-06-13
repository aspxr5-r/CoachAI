import { useCallback } from "react";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import Offer from "../components/Offer";
import FrameComponent3 from "../components/FrameComponent3";
import NextSteps from "../components/NextSteps";

const MacBookPro16 = () => {
  const onIconarrowDownCircleClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='heresWhatsNext']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="w-full relative bg-brand-neutrals overflow-hidden flex flex-col items-end justify-center pt-0 px-0 pb-[198px] box-border gap-[200px] leading-[normal] tracking-[normal] mq1125:gap-[73px] mq450:gap-[36px]">
      <section className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[42px] box-border max-w-full mq800:pb-5 mq800:box-border mq1125:pb-[27px] mq1125:box-border">
        <Navbar />
        <Content />
      </section>
      <img
        className="w-[799px] relative h-[600px] object-cover hidden max-w-full z-[1]"
        loading="lazy"
        alt=""
        src="/image-3@2x.png"
      />
      <img
        className="w-[100px] h-[100px] absolute !m-[0] bottom-[1000px] left-[364px] overflow-hidden shrink-0 cursor-pointer z-[1]"
        loading="lazy"
        alt=""
        src="/iconarrowdowncircle.svg"
        onClick={onIconarrowDownCircleClick}
      />
      <Offer />
      <FrameComponent3 />
      <NextSteps />
    </div>
  );
};

export default MacBookPro16;
