import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Spinner = () => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    count === 0 &&
      // location is updated by the navigate hook and stored in react router dom memory
      navigate("/login", {
        state: location.pathname,
      });
    //   only works where you have given location state

    return () => clearInterval(interval);
    //  So, when you call clearInterval(interval), it tells the browser to stop executing
    // the code specified in the setInterval callback and cancels the interval associated
    // with the provided interval ID.
  }, [count, navigate]);
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center "
      style={{
        height: "100vh",
      }}
    >
      <h1 className="text-center">redirecting to you in {count} seconds</h1>
      <div className="spinner-border" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  );
};

export default Spinner;
