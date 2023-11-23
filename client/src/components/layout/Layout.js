import React from "react";
import Headers from "./Headers";
import { Helmet } from "react-helmet";
import Footer from "./footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Headers />
      <main style={{ minHeight: "70vh" }}>
        <ToastContainer />
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Iconic Closet - Shop Now",
  description:
    "Unlock influencer style with Iconic Closet. Shop iconic looks from your favorite influencers. Elevate your wardrobe, effortlessly. Explore. Shop. Stand out.",
  keywords:
    "Influencer fashion, Iconic outfits, Shop celebrity looks, Trendsetting styles, Fashion inspiration, Social media influencers, Online wardrobe, Curated fashion, Exclusive clothing, Trendy apparel, Celebrity closets, Iconic Closet shop, Fashion marketplace, Stylish wardrobes, Shop influencer outfits, Trendy online shopping, Celebrity style store, Fashion discovery, Elevate your wardrobe, Explore iconic looks,",
  author: "Santhosh Bahadur",
};

export default Layout;
