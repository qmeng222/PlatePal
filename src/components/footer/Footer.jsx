import React from "react";
import "../../assets/css/Main.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        {/* create a horizontal row of elements, and horizontally center the content: */}
        <div className="row justify-content-center">
          {/* make the width of the column automatically adjust to the content it contains: */}
          <div className="col-auto">
            <p>&copy; 2023 PlatePal. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
