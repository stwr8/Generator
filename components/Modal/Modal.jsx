import React from "react";
import { useEffect } from "react";
import AOS from "aos";

// ------> Css
import "aos/dist/aos.css";

function Modal({ isVisible, onClose, children }) {
  // ------> Use aos animation library
  useEffect(() => {
    AOS.init();
  }, []);

  if (!isVisible) return null;

  const handleClick = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      id="wrapper"
      onClick={handleClick}
      className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-[2px] flex justify-center items-center z-50 duration-300"
    >
      <div
        data-aos="fade-right"
        data-aos-duration="300"
        className={`${
          isVisible ? "left-0" : "-left-[100%]"
        } w-full h-full top-0 absolute bg-white px-4`}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;