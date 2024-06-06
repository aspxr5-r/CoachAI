import PropTypes from "prop-types";

const SignupForm = ({ className = "", onClose }) => {
  return (
    <div
      className={`w-[1023px] bg-brand-neutrals overflow-hidden flex flex-col items-center justify-start py-[39px] px-5 box-border gap-[48px] leading-[normal] tracking-[normal] max-w-full max-h-full text-left text-base text-absolute-white font-desktop-h4 mq675:gap-[24px] ${className}`}
    >
      <h1 className="m-0 w-[501px] h-[154px] relative text-36xl font-bold font-inherit text-foundation-blue-blue-1 inline-block shrink-0 max-w-full mq450:text-14xl mq750:text-25xl">
        Let’s revolutionise online learning
      </h1>
      <div className="w-96 flex flex-col items-start justify-start gap-[6px] max-w-full">
        <div className="relative inline-block min-w-[40px]">Email</div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[8px] text-slate-400 font-p-ui">
          <div className="flex-1 flex flex-col items-start justify-start min-w-[165px]">
            <div className="self-stretch rounded-md bg-absolute-white flex flex-row items-center justify-start py-1.5 px-3 border-[1px] border-solid border-lightgray">
              <input
                type="email"
                placeholder="Email"
                className="relative leading-[24px] inline-block min-w-[41px] bg-absolute-white border-none outline-none"
              />
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-2 px-4 bg-brand-washed-blue rounded-md flex flex-row items-center justify-center whitespace-nowrap hover:bg-royalblue">
            <div className="relative text-base font-desktop-h4 text-absolute-white text-left inline-block min-w-[90px]">
              Join Waitlist
            </div>
          </button>
        </div>
        <div className="relative text-brand-washed-blue">
          Enter your email address
        </div>
      </div>
      <div className="relative inline-block max-w-full">
        We respect your privacy. Your email is safe with us.
      </div>
    </div>
  );
};

SignupForm.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default SignupForm;
