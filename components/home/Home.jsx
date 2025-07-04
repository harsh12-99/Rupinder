import React, { useState, useEffect } from "react";
import Typed from "react-typed";
import Social from "../Social";
import Seo from "../Seo";
import Footer from "../footer/Footer";

const Home = () => {
  const profiles = [
    {
      name: "Rupinder Singh",
      image: "/img/slider/Image_1.jpg",
      jobTitle: "Founder",
    },
    {
      name: "Mala Kapoor",
      image: "/img/slider/Image_2.jpg",
      jobTitle: "Accountant",
    },
  ];

  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProfileIndex((prevIndex) => (prevIndex + 1) % profiles.length);
    }, 10000);

    return () => {
      clearInterval(timer);
    };
  }, [currentProfileIndex]);

  const currentProfile = profiles[currentProfileIndex];

  const goToNextProfile = () => {
    setCurrentProfileIndex((prevIndex) => (prevIndex + 1) % profiles.length);
  };

  const goToPreviousProfile = () => {
    setCurrentProfileIndex((prevIndex) =>
      prevIndex === 0 ? profiles.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
    <Seo pageTitle={"Home | Wolf Street Accountant"} />
    <div className="home-parent">
      <div>
        <img
          width={30}
          height={30}
          className="home-carousel-left image-filter"
          src="/img/svg/rightarrow.svg"
          alt="Wolf Street Accountant"
          onClick={goToPreviousProfile}
        />
      </div>
      <div className="tokyo_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: `url(${currentProfile.image})`,
              }}
            ></div>
          </div>
          <div className="details">
            <h3 className="name">{currentProfile.name}</h3>
            <h4 className="typer">
              <Typed strings={[currentProfile.jobTitle]} loop typeSpeed={100} />
            </h4>

            <p className="job">Professional Accountant</p>
            <h5 className="job">Trust, Knowledge and Better Services</h5>
            <Social />
          </div>
          
        </div>
      </div>
      <div>
        <img
          width={30}
          height={30}
          className="image-filter"
          src="/img/svg/rightarrow.svg"
          alt="Wolf Street Accountant"
          onClick={goToNextProfile}
        />
      </div>  
    </div>
    <Footer/>
    </>
  );
};
export default Home;
