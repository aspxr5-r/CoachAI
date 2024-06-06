import { useCallback } from "react";
import Card from "./Card";
import PropTypes from "prop-types";

const Offer = ({ className = "" }) => {
  const onIconarrowDownCircle1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='howItWorks']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[60px] pr-5 pl-[21px] box-border max-w-full text-justify text-46xl text-absolute-white font-desktop-h4 mq800:pb-[25px] mq800:box-border mq1125:pb-[39px] mq1125:box-border ${className}`}
    >
      <div className="w-[1301px] flex flex-col items-start justify-start gap-[155px] max-w-full mq1350:gap-[77px] mq800:gap-[39px] mq450:gap-[19px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full">
          <h1
            className="m-0 h-14 w-[378px] relative text-inherit font-bold font-inherit inline-block shrink-0 max-w-full mq800:text-33xl mq450:text-20xl"
            data-scroll-to="oUROFFERText"
          >
            OUR OFFER!
          </h1>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[44px_41px] min-h-[510px] max-w-full text-center text-xl font-lexend mq800:gap-[20px]">
          <Card
            icon="/icon.svg"
            cardTitles="Effectiveness Multiplier"
            paragraph="Coach multiple students simultaneously to help them achieve their individual goals effectively."
          />
          <Card
            icon="/icon1.svg"
            cardTitles="Increase Course Revenue"
            paragraph="Offer AI coaching services to your students to generate additional revenue and enhance their learning experience. "
            propBackground="linear-gradient(180deg, rgba(116, 214, 128, 0.2), rgba(116, 214, 128, 0) 71.63%)"
            propBackground1="linear-gradient(180deg, rgba(116, 214, 128, 0.2), rgba(116, 214, 128, 0) 71.63%)"
            propBorder="1px solid rgba(116, 214, 128, 0.2)"
          />
          <Card
            icon="/icon2.svg"
            cardTitles="Boost Your Value"
            paragraph="Provide answers to unique and complex questions, and charge a premium for personalized coaching services."
            propBackground="linear-gradient(180deg, rgba(249, 156, 63, 0.2), rgba(249, 156, 63, 0) 71.63%)"
            propBackground1="linear-gradient(180deg, rgba(249, 156, 63, 0.2), rgba(249, 156, 63, 0) 71.63%)"
            propBorder="1px solid rgba(249, 156, 63, 0.2)"
          />
          <Card
            icon="/icon3.svg"
            cardTitles="Pioneering AI Coaching"
            paragraph="Impress your students by being the pioneer in your field to offer innovative AI coaching services."
            propBackground="linear-gradient(180deg, rgba(255, 34, 34, 0.2), rgba(255, 34, 34, 0) 71.63%)"
            propBackground1="linear-gradient(180deg, rgba(255, 34, 34, 0.2), rgba(255, 34, 34, 0) 71.63%)"
            propBorder="1px solid rgba(255, 34, 34, 0.2)"
          />
          <Card
            icon="/icon4.svg"
            cardTitles="Student Satisfaction"
            paragraph="Enhance your students' satisfaction and performance by providing them with dedicated assistance and support."
            propBackground="linear-gradient(180deg, rgba(255, 227, 17, 0.2), rgba(255, 227, 17, 0) 71.63%)"
            propBackground1="linear-gradient(180deg, rgba(255, 227, 17, 0.2), rgba(255, 227, 17, 0) 71.63%)"
            propBorder="1px solid rgba(255, 227, 17, 0.2)"
          />
          <Card
            icon="/icon5.svg"
            cardTitles="Easy Setup"
            paragraph="Rest easy while we handle the entire process of building your AI coach specifically for you."
            propBackground="linear-gradient(180deg, rgba(237, 145, 209, 0.2), rgba(237, 145, 209, 0) 71.63%)"
            propBackground1="linear-gradient(180deg, rgba(237, 145, 209, 0.2), rgba(237, 145, 209, 0) 71.63%)"
            propBorder="1px solid rgba(237, 145, 209, 0.2)"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
          <img
            className="h-[100px] w-[100px] relative overflow-hidden shrink-0 cursor-pointer"
            loading="lazy"
            alt=""
            src="/iconarrowdowncircle1.svg"
            onClick={onIconarrowDownCircle1Click}
          />
        </div>
      </div>
    </section>
  );
};

Offer.propTypes = {
  className: PropTypes.string,
};

export default Offer;
