import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,
        { email, newPassword, answer }
      );

      if (res.data.success) {
        toast.success(res.data.message);

        // use navigate
        navigate("/login");
        // checks the previous state and redirects to that place else to the login page
      } else {
        toast.error("something went wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };
  return (
    <Layout title={"Forgot Password - Iconic Closet"}>
      <div className="register">
        <h1>Forgot Password</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              placeholder="Enter your email"
              value={email}
              type="email"
              className="form-control"
              id="exampleInputEmail"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>
          <div className="mb-3">
            <input
              placeholder="Enter your New Password"
              value={newPassword}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
              required
            />
          </div>
          <div className="mb-3">
            <input
              placeholder="Enter your favorite picnic spot"
              value={answer}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => {
                setAnswer(e.target.value);
              }}
              required
            />
          </div>

          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              forgot password
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
