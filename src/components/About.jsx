import React from "react";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";

export const About = () => {
  return (
    <div className="container about">
        <div className="row">
            <div className="col-md-7 col-12">
                <h2 className="gradient">Welcome to Our Store!</h2>
                <p>
                    We believe in bringing you the finest products with a touch of unique
                    properties. Our mission is to provide you with main benefits or special
                    features.
                </p>
                <h2 className="gradient">Our Story</h2>
                <p>
                    Founded in 2010, Our Store has been a labor of love. We started with a
                    passion for products and a vision for a general objective or value. Over
                    the years, we've expanded in the world.
                </p>
            </div>
            <div className="col-md-5 col-12">
                <img className="img-fluid" src={about2} alt="" />
            </div>
        </div>
        <div className="row">
            <div className="col-md-5 col-12">
                <img className="img-fluid" src={about1} alt="" />
            </div>
            <div className="col-md-7 col-12">
                <h2 className="gradient">What Sets Us Apart?</h2>
                <p>
                    <strong>Quality Craftsmanship:</strong> Every product is crafted with
                    precision and care to ensure quality and durability.
                    <strong>Unique Designs:</strong> Discover categories that stand out with
                    our exclusive designs.
                    <strong>Customer Satisfaction:</strong> Your happiness is our priority.
                    We strive to provide an exceptional shopping experience and top-notch
                    customer service.
                </p>
                <h2 className="gradient">Connect With Us</h2>
                <p>
                    Join our community on social media to stay updated on the latest news
                    and promotions. Thank you for choosing Us.
                </p>
            </div>
      </div>
    </div>
  );
};
