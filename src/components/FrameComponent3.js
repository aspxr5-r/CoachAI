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
    <section className={`relative w-full ${className}`}>
      <style jsx>{`
        .accordion-item {
          position: relative;
          overflow: hidden;
        }

        .accordion-item .background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          background-color: #F0F0F1;
          height: 0;
          transform-origin: top;
          transition: height 0.5s ease-in-out;
          border-radius: 15px;
        }

        .accordion-item .background.expand {
          height: 100%;
        }

        .accordion-item .background-hover {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 0;
          background-color: rgba(211, 211, 211, 0.7);
          transition: height 0.2s ease-in-out;
          border-radius: 15px;
        }

        .accordion-item .background-hover.expand {
          height: 50px;
        }

        .heading {
          font-size: 4rem; /* Equivalent to text-7xl */
        }

        .accordion-title {
          font-size: 2rem; /* Equivalent to text-3xl */
        }

        @media (max-width: 800px) {
          .heading {
            font-size: 3.5rem; /* Equivalent to text-6xl */
          }

          .accordion-title {
            font-size: 1.75rem; /* Equivalent to text-2xl */
          }
        }

        @media (max-width: 450px) {
          .heading {
            font-size: 3rem; /* Equivalent to text-5xl */
          }

          .accordion-title {
            font-size: 1.5rem; /* Equivalent to text-xl */
          }
        }
      `}</style>
      <div className="flex font-sans">
        <div
          ref={whiteBackgroundRef}
          className="w-[854px] bg-neutrals-neutrals-3 overflow-hidden flex flex-col items-start justify-start pt-[50px] px-[70px] pb-[324px] h-[1000px] box-border gap-[145px] min-w-[854px] max-w-full mq1350:flex-1 mq1350:pt-[61px] mq1350:pb-[211px] mq1350:box-border mq800:pt-10 mq800:pb-[137px] mq800:box-border mq1125:gap-[72px] mq1125:pl-[27px] mq1125:pr-[27px] mq1125:box-border mq1125:min-w-full mq450:gap-[36px]"
        >
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[0px] box-border max-w-full">
            <h1
              className="m-0 w-[614px] relative text-inherit font-bold font-inherit inline-block shrink-0 max-w-full z-[1] heading"
              data-scroll-to="howItWorks">
              How it works
            </h1>
          </div>
          <div className="w-[694px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border max-w-full z-[1] text-26xl">
            {accordionItems.map((item, index) => (
              <div
                key={index}
                className="self-stretch flex flex-col items-start justify-start box-border relative gap-[15px] max-w-full accordion-item"
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => handleClick(index)}
              >
                <div
                  className={`background-hover ${hoveredItem === index ? 'expand' : ''}`}
                ></div>
                <div
                  className={`background ${selectedItem === index ? 'expand' : ''}`}
                ></div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-[31px] box-border max-w-full shrink-0 cursor-pointer">
                  <b className="flex-1 relative inline-block max-w-full z-[3] accordion-title">
                    {item.title}
                  </b>
                </div>
                {selectedItem === index && (
                  <div className="self-stretch relative text-base text-foundation-blue-blue-9 inline-block shrink-0 z-[1] px-[31px] transition-opacity duration-700 ease-in-out opacity-100">
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
          className="flex-1 relative bg-brand-washed-blue min-w-[568px] max-w-full flex items-center justify-center"
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
