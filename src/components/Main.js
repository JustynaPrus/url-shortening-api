import React from "react";
import brand from "../images/icon-brand-recognition.svg";
import detailed from "../images/icon-detailed-records.svg";
import fullyCustomizable from "../images/icon-fully-customizable.svg";

const Main = () => {
  return (
    <main>
      <h2>Advanced Statistics</h2>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <img src={brand} alt="brand" />
      <h3>Brand Recognition</h3>
      <p>
        Boost your brand recognition with each click. Generic links don't mean a
        thing. Branded links help instil confidence in your content.
      </p>
      <img src={detailed} alt="brand" />
      <h3>Detailed Records</h3>
      <p>
        Gain insights into who is clicking your links. Knowing when and where
        people engage with your content helps inform better decisions.
      </p>
      <img src={fullyCustomizable} alt="brand" />
      <h3>Fully Customizable</h3>
      <p>
        Improve brand awareness and content discoverability through customizable
        links, supercharging audience engagement.
      </p>
    </main>
  );
};

export default Main;
