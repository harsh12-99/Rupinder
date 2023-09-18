import React, { useState, useEffect } from "react";
import Typed from "react-typed";
import ShareSocial from "../social-share/ShareSocial";
import Image from "next/image";

const Home = () => {
  const profiles = [
    {
      name: "Rupinder Singh",
      image: "/img/slider/Image_1.jpg",
      jobTitle: "Accountant",
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

  return (
    <>
      <div>
        <Image
          width={15}
          height={15}
          className="svg"
          src="/img/svg/rightArrow.svg"
          alt="homerun"
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

            <p className="job">Professional Accountant Based In Melbourne</p>
            <ShareSocial />
            {/* <Social /> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
