import { useState, useCallback } from "react";
import SignupForm from "./SignupForm";
import PortalPopup from "./PortalPopup";
import PropTypes from "prop-types";

const NextSteps = ({ className = "" }) => {
  const [isSignupForm1Open, setSignupForm1Open] = useState(false);

  const openSignupForm1 = useCallback(() => {
    setSignupForm1Open(true);
  }, []);

  const closeSignupForm1 = useCallback(() => {
    setSignupForm1Open(false);
  }, []);

  return (
    <>
      <section
        className={`w-[1594px] flex flex-row items-start justify-end py-0 px-[49px] box-border max-w-full text-left text-46xl text-absolute-white font-desktop-h4 mq1350:pl-6 mq1350:pr-6 mq1350:box-border ${className}`}
      >
        <div className="flex-1 flex flex-col items-start justify-start gap-[10px] max-w-full mq800:gap-[10px] mq450:gap-[5px]">
          <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[118px] max-w-full mq800:gap-[59px] mq450:gap-[29px]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[449px] max-w-full mq800:gap-[10px] mq800:min-w-full mq450:gap-[5px]">
              <h1
                className="m-0 w-[579px] relative text-inherit font-bold font-inherit inline-block max-w-full mq800:text-2xl mq450:text-xl"
                data-scroll-to="heresWhatsNext"
              >
                Here’s what’s next
              </h1>
              <h1 className="m-0 self-stretch h-[503px] relative text-2xl font-bold font-inherit inline-block shrink-0 mq800:text-xl mq450:text-lg">
                <h2 className="m-0">
                  We are working tirelessly to bring you your own AI Coach!
                </h2>
                <h2 className="m-0">&nbsp;</h2>
                <h2 className="m-0">
                  Sign up for our waitlist to get notified when the prototype is
                  ready for you
                </h2>
              </h1>
            </div>
            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-4 box-border min-w-[447px] max-w-full mq800:min-w-full">
              <img
                src="/prototypescreenshot.png"
                alt="Prototype Screenshot"
                className="self-stretch h-[603px] object-contain"
              />
            </div>
          </div>
          <button
            className="cursor-pointer [border:none] py-2 px-8 bg-brand-washed-blue rounded-md flex flex-row items-start justify-start whitespace-nowrap hover:bg-royalblue"
            onClick={openSignupForm1}
          >
            <div className="relative text-16xl font-medium font-desktop-h4 text-absolute-white text-left">
              Get Updates
            </div>
          </button>
        </div>
      </section>
      {isSignupForm1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSignupForm1}
        >
          <SignupForm onClose={closeSignupForm1} />
        </PortalPopup>
      )}
    </>
  );
};

NextSteps.propTypes = {
  className: PropTypes.string,
};

export default NextSteps;
