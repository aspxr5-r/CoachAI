import { useState, useCallback } from "react";
import SignupForm from "./SignupForm";
import PortalPopup from "./PortalPopup";
import PropTypes from "prop-types";

const Navbar = ({ className = "" }) => {
  const [isSignupFormOpen, setSignupFormOpen] = useState(false);

  const openSignupForm = useCallback(() => {
    setSignupFormOpen(true);
  }, []);

  const closeSignupForm = useCallback(() => {
    setSignupFormOpen(false);
  }, []);

  return (
    <>
      <header
        className={`self-stretch flex flex-row items-end justify-between py-0 pr-[62px] pl-[55px] box-border relative max-w-full gap-[20px] z-[2] text-left text-26xl text-washed-purple-washed-purple-100 font-dr-sugiyama mq1125:pl-[27px] mq1125:pr-[31px] mq1125:box-border ${className}`}
      >
        <div className="h-[70px] w-full absolute !m-[0] right-[0px] bottom-[7px] left-[0px] bg-black" />
        <div className="w-[788.5px] flex flex-row items-start justify-start gap-[0.1px] max-w-full">
          <div className="h-[50px] w-[50px] flex items-center justify-center relative z-[1]">
            <img src="/logo.png" alt="Logo" className="h-full w-full object-cover" />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-w-full text-16xl text-absolute-white font-desktop-h4">
            <h1 className="m-0 self-stretch relative text-inherit font-medium font-inherit whitespace-nowrap z-[1]">
              WebCoach
            </h1>
          </div>
        </div>
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-6 text-7xl text-absolute-white font-desktop-h4">
          <div
            className="rounded-md bg-brand-washed-blue flex flex-row items-start justify-start py-px px-[30px] whitespace-nowrap cursor-pointer z-[1]"
            onClick={openSignupForm}
          >
            <b className="relative inline-block min-w-[94px]">Sign up</b>
          </div>
        </div>
      </header>
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

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;
