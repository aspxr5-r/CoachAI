import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";

const FrameComponent3 = ({ className = "" }) => {
  const [selectedItem, setSelectedItem] = useState(0); // Default to the first item
  const [hoveredItem, setHoveredItem] = useState(null);
  const whiteBackgroundRef = useRef(null);
  const blueBackgroundRef = useRef(null);

  useEffect(() => {
    const adjustHeight = () => {
      if (whiteBackgroundRef.current && blueBackgroundRef.current) {
        const whiteHeight = whiteBackgroundRef.current.offsetHeight;
        blueBackgroundRef.current.style.height = `${whiteHeight}px`;
      }
    };

    adjustHeight();
    window.addEventListener("resize", adjustHeight);

    return () => {
      window.removeEventListener("resize", adjustHeight);
    };
  }, [selectedItem]);

  const handleClick = (index) => {
    setSelectedItem(index === selectedItem ? null : index);
  };

  const accordionItems = [
    {
      title: "Contact us about your own AI coach.",
      content: (
        <>
          <p>
            In the course of just a few emails we will figure out your personal needs. Customize the Coach just right for your students to offer the best experience. Become an innovator today with just a simple email!
          </p>
        </>
      ),
      image: "/explainers/iPhone 11 Pro Open Mail.jpg"
    },
    {
      title: "We build your coach using your course.",
      content: (
        <>
          <p>
            We will train the AI based on your course material and requirements to provide the best coaching experience. Our process ensures a personalized coaching tool tailored to your course.
          </p>
        </>
      ),
      image: "/explainers/Progress.png"
    },
    {
      title: "Review your coach and it’s done!",
      content: (
        <>
          <p>
            Once the AI coach is built, you can review and provide feedback. We will make any necessary adjustments based on your feedback.
          </p>
        </>
      ),
      image: "/explainers/MacBook.png"
    },
    {
      title: "We never stop improving your coach.",
      content: (
        <>
          <p>
            Continuous improvement is our goal. We will keep enhancing the AI coach based on new data and feedback. Your coach will evolve to better meet your needs and those of your students.
          </p>
        </>
      ),
      image: "/explainers/Imacnotif.png"
    }
  ];

  return (
    <section className={`relative w-full font-sans ${className}`}>
      <div className="flex">
        <div
          ref={whiteBackgroundRef}
          className="w-[854px] bg-gray-300 overflow-hidden flex flex-col items-start justify-start pt-[94px] px-[54px] pb-[324px] gap-[145px] min-w-[854px] max-w-full mq1350:flex-1 mq1350:pt-[61px] mq1350:pb-[211px] mq800:pt-10 mq800:pb-[137px] mq1125:gap-[72px] mq1125:pl-[27px] mq1125:pr-[27px] mq1125:min-w-full mq450:gap-[36px]"
        >
          <div className="self-stretch flex flex-row items-start justify-end py-0 px-[3px] max-w-full">
            <h1
              className="m-0 w-[614px] relative font-bold inline-block shrink-0 max-w-full z-[1] text-7xl mq800:text-6xl mq450:text-5xl"
              data-scroll-to="howItWorks"
            >
              How it works
            </h1>
          </div>
          <div className="w-[694px] flex flex-col items-start justify-start pt-0 px-0 pb-0 max-w-full z-[1] text-26xl">
            {accordionItems.map((item, index) => (
              <div
                key={index}
                className="self-stretch flex flex-col items-start justify-start relative gap-[15px] max-w-full"
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => handleClick(index)}
              >
                <div
                  className={`absolute top-0 left-0 right-0 bg-gray-400 transition-all duration-200 ease-in-out ${
                    hoveredItem === index ? 'h-12' : 'h-0'
                  } rounded-lg`}
                ></div>
                <div
                  className={`absolute top-0 left-0 right-0 bg-gray-300 transition-all duration-500 ease-in-out ${
                    selectedItem === index ? 'h-full' : 'h-0'
                  } rounded-lg`}
                ></div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-[31px] max-w-full cursor-pointer">
                  <b className="flex-1 relative inline-block max-w-full z-[3] text-3xl">
                    {item.title}
                  </b>
                </div>
                {selectedItem === index && (
                  <div className="self-stretch relative text-base text-blue-900 inline-block shrink-0 z-[1] px-[31px] transition-opacity duration-700 ease-in-out opacity-100">
                    {item.content}
                  </div>
                )}
                {index < accordionItems.length - 1 && (
                  <img
                    className="self-stretch relative max-w-full overflow-hidden max-h-full shrink-0"
                    alt=""
                    src="/line-15.svg"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <div
          ref={blueBackgroundRef}
          className="flex-1 relative bg-blue-100 min-w-[568px] max-w-full flex items-center justify-center"
        >
          {selectedItem !== null && (
            <img
              className="max-w-full max-h-full"
              src={accordionItems[selectedItem].image}
              alt="Selected Item"
            />
          )}
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
