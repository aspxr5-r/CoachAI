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
        className={`flex flex-row items-center justify-between py-4 pr-[62px] pl-[55px] box-border relative w-full gap-[20px] z-[2] text-left text-26xl text-washed-purple-washed-purple-100 font-dr-sugiyama mq1125:pl-[27px] mq1125:pr-[31px] mq1125:box-border ${className}`}
      >
        <div className="flex flex-row items-center justify-start gap-[10px] w-full">
          <div className="h-[50px] w-[50px] flex items-center justify-center relative z-[1]">
            <img src="/logo.png" alt="Logo" className="h-full w-full object-cover" />
          </div>
          <div className="flex-1 flex flex-col items-center justify-center px-0 box-border w-full text-16xl text-absolute-white font-desktop-h4">
            <h1 className="m-0 self-stretch relative text-inherit font-medium font-inherit whitespace-nowrap z-[1] ml-4">
              WebCoach
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-center text-7xl text-absolute-white font-desktop-h4">
          <div
            className="rounded-md bg-brand-washed-blue flex items-center justify-center py-2 px-[30px] whitespace-nowrap cursor-pointer z-[1]"
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
