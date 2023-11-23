import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  // form on submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(name, email, password, address, phone);
    // toast.success("Registration Success");
    try {
      const res = await axios.post(
        ` ${process.env.REACT_APP_API}/api/v1/auth/register`,
        { name, email, password, phone, address, answer }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        // use navigate
        navigate("/login");
      } else {
        toast.error("something went wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Register - Iconic Closet"}>
      <div className="register">
        <h1>Register Page </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              placeholder="Enter your name"
              value={name}
              type="text"
              className="form-control"
              id="exampleInputName"
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </div>
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
              placeholder="Enter your password"
              value={password}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>
          <div className="mb-3">
            <input
              placeholder="Enter your phone number"
              value={phone}
              type="text"
              className="form-control"
              id="exampleInputPhone"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              required
            />
          </div>
          <div className="mb-3">
            <input
              placeholder="Enter your address"
              value={address}
              type="text"
              className="form-control"
              id="exampleInputAddress"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              required
            />
          </div>
          <div className="mb-3">
            <input
              placeholder="What is your favorite picnic spot?"
              value={answer}
              type="text"
              className="form-control"
              id="exampleInputAnswer"
              onChange={(e) => {
                setAnswer(e.target.value);
              }}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
