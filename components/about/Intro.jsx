import React from "react";

const Intro = () => {
  const introContent = {
    image: "/img/slider/1.jpg",
    name: "Rupinder Singh",
    designation: "Accountant",
    text: (
      <>
        <p>
          With 8 years of experience as a dedicated financial accountant, I bring a strong foundation in accounting principles and a commitment to accuracy. As a part-qualified CPA, I have the expertise to deliver reliable financial information. Specializing in the insurance broking industry, I excel in managing financials for brokers. This experience has given me a deep understanding of the industry's reporting requirements, enabling me to provide comprehensive financial services and contribute to brokers' success.
        </p>
        <p>
          I am proficient in accounting software platforms, streamlining processes and improving accuracy in financial reporting. I leverage automation to increase efficiency and reduce errors, ensuring high-quality financial information. As a proactive individual, I identify areas for improvement and implement process enhancements, driving positive change and optimizing financial practices through technology.
        </p>
        <p>
          With strong analytical and communication skills, I provide valuable financial insights to stakeholders. Committed to professional development, I stay informed about industry trends and regulatory changes. Reliable and meticulous, I thrive in collaborative environments, building successful relationships across departments.
        </p>
      <p>
        As a financial accountant specializing in trust accounting, with expertise in the insurance broking industry, I have a track record of driving business improvements. I am dedicated to delivering accurate and valuable financial insights to contribute to your organization's growth and success.
      </p>
      </>
    ),
  };

  return (
    <>
      <div className="top_author_image">
        <img src={introContent.image} alt="about" />
      </div>
      <div className="about_title">
        <h3>{introContent.name}</h3>
        <span>{introContent.designation}</span>
      </div>
      <div className="about_text">{introContent.text}</div>
    </>
  );
};

export default Intro;
