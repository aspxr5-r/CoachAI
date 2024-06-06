import { useMemo } from "react";
import PropTypes from "prop-types";

const Card = ({
  className = "",
  icon,
  cardTitles,
  paragraph,
  propBackground,
  propBackground1,
  propBorder,
}) => {
  const iconContainerStyle = useMemo(() => {
    return {
      background: propBackground,
    };
  }, [propBackground]);

  const iconStyle = useMemo(() => {
    return {
      background: propBackground1,
      border: propBorder,
    };
  }, [propBackground1, propBorder]);

  return (
    <div
      className={`h-[233px] w-[405px] rounded-2xl bg-grey-10 box-border flex flex-col items-center justify-start pt-2.5 pb-8 pr-[43px] pl-[13px] relative gap-[24px] max-w-full text-center text-xl text-absolute-white font-lexend border-[1.5px] border-solid border-grey-15 ${className}`}
    >
      <div
        className="w-[82px] h-[82px] !m-[0] absolute top-[10px] left-[13px] rounded-51xl [background:linear-gradient(180deg,_rgba(5,_113,_237,_0.1),_rgba(5,_113,_237,_0)_46.77%)] flex flex-col items-start justify-start p-2.5 box-border"
        style={iconContainerStyle}
      >
        <div
          className="w-[62px] h-[62px] rounded-31xl [background:linear-gradient(180deg,_rgba(5,_113,_237,_0.1),_rgba(5,_113,_237,_0)_46.77%)] box-border flex flex-row items-start justify-start py-3.5 px-[13px] border-[1px] border-solid border-linearbluefillback2"
          style={iconStyle}
        >
          <img className="h-[34px] w-[34px] relative" alt="" src={icon} />
        </div>
      </div>
      <div className="absolute !m-[0] top-[36px] left-[108px] leading-[150%] font-semibold mq450:text-base mq450:leading-[24px]">
        {cardTitles}
      </div>
      <div className="w-[349px] h-[102px] absolute !m-[0] top-[99px] left-[13px] text-lg leading-[150%] font-light text-grey-70 text-left inline-block">
        {paragraph}
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  cardTitles: PropTypes.string,
  paragraph: PropTypes.string,

  /** Style props */
  propBackground: PropTypes.any,
  propBackground1: PropTypes.any,
  propBorder: PropTypes.any,
};

export default Card;
