import React from "react";
import Layout from "../components/layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact Page - Iconic Closet"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img src="" alt="contactus" />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            any query and info about the product feel free to call anytime we
            are 24 x 7 available
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@ecommerce.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 1122334455
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
