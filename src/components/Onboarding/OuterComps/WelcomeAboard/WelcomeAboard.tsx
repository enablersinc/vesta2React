import React from "react";
import "./WelcomeAboard.scss";
const WelcomeAboard: React.FC = () => {
  return (
    <div className="top">
      <div className="bodyText">
        <h3>Welcome Aboard, John!</h3>
        <p>
          We are excited that you have signed up for Vetsa. We can not wait for
          you to start. We've included some helpful information and ask that you
          complete this initial setup so we can get things going. If you have
          any questions, please don't hesitate to reach out.
        </p>
      </div>
      <div className="img" />
    </div>
  );
};

export default WelcomeAboard;
