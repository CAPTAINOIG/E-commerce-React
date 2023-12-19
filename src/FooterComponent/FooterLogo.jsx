import React from "react";
import cap from '../assets/cap.jpg'

const FooterLogo = () => {
  return (
    <>
      <div className="mb-8">
        <img
          src={cap}
          alt=""
          className="w-40 h-40 object-cover rounded-md mx-auto"
        />
      </div>
    </>
  );
};

export default FooterLogo;
