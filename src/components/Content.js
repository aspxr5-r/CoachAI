import { useState, useCallback } from "react";
import SignupForm from "./SignupForm";
import PortalPopup from "./PortalPopup";
import PropTypes from "prop-types";

const Content = ({ className = "" }) => {
  const [isSignupFormOpen, setSignupFormOpen] = useState(false);

  const openSignupForm = useCallback(() => {
    setSignupFormOpen(true);
  }, []);

  const closeSignupForm = useCallback(() => {
    setSignupFormOpen(false);
  }, []);

  const onButtonContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='heresWhatsNext']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButtonContainer2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='oUROFFERText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <div
  className={`w-[1565px] flex flex-col items-start justify-center py-0 pr-0 pl-[0px] box-border gap-[70px] max-w-full text-left text-46xl text-absolute-white font-desktop-h4 mq800:gap-[37px] mq450:gap-[18px] ${className}`}
>
        <div className="self-stretch flex flex-row items-start justify-start [row-gap:0px] max-w-full mq1350:flex-wrap">
          <div className="w-[671px] flex flex-col items-start justify-start pt-[140.2px] px-0 pb-0 box-border min-w-[671px] max-w-full mq1350:flex-1 mq800:pt-[94px] mq800:box-border mq800:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[50px] max-w-full mq800:gap-[24px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
                <h1 className="m-0 self-stretch h-[151.1px] relative text-inherit font-bold font-inherit inline-block shrink-0 mq800:text-33xl mq450:text-20xl">
                  BRINGING COACHES TO YOUR COURSES!
                </h1>
                <h1 className="m-0 w-[624px] relative text-16xl font-medium font-inherit text-primary-blue-primary-blue-100 inline-block max-w-full mq800:text-9xl mq450:text-2xl">
                  SUPERCHARGE YOUR COURSES WITH AI COACHES
                </h1>
              </div>
              <div className="w-[644px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[74px] max-w-full text-16xl mq800:flex-wrap mq800:gap-[37px] mq450:gap-[18px]">
                <button
                  className="cursor-pointer [border:none] py-2 px-8 bg-brand-washed-blue rounded-md flex flex-row items-start justify-start whitespace-nowrap hover:bg-royalblue"
                  onClick={openSignupForm}
                >
                  <div className="relative text-16xl font-medium font-desktop-h4 text-absolute-white text-left">
                    Get Updates
                  </div>
                </button>
                <div
                  className="flex-1 rounded-md box-border flex flex-row items-start justify-start py-1 px-3 min-w-[179px] cursor-pointer border-[3px] border-solid border-brand-washed-blue"
                  onClick={onButtonContainerClick}
                >
                  <h1 className="m-0 relative text-inherit font-medium font-inherit mq800:text-9xl mq450:text-2xl">
                    What’s coming
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <img
            className="h-[700px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[568px] z-[1] mq800:min-w-full"
            alt=""
            src="/presently--macbook@2x.png"
          />
        </div>
        <div className="w-[1362px] flex flex-row items-center justify-center py-0 px-5 box-border max-w-full text-26xl">
          <div className="h-[82px] w-[390px] relative max-w-full">
            <div
              className="absolute top-[0px] left-[0px] rounded-31xl bg-brand-washed-blue flex flex-row items-start justify-start py-[11.5px] px-[69px] box-border gap-[500px] whitespace-nowrap w-full h-full cursor-pointer mq450:pl-5 mq450:pr-5 mq450:box-border"
              onClick={onButtonContainer2Click}
            >
              <h1 className="m-0 h-[60px] relative text-inherit font-bold font-inherit inline-block">
                Learn more
              </h1>
            </div>
            <img
              className="absolute top-[23px] left-[318px] w-10 h-10 overflow-hidden z-[1]"
              alt=""
              src="/iconarrowdown.svg"
            />
          </div>
        </div>
      </div>
      {isSignupFormOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSignupForm}
        >
          <SignupForm onClose={closeSignupForm} />
        </PortalPopup>
      )}
    </>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
