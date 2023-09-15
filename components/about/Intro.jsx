import React from "react";

const Intro = () => {
  const introContent = [ 
    {
      image: "/img/slider/1.jpg",
      name: "Rupinder",
      designation: "Accountant",
      text: (
        <>
          <p>
            Mr. Rupinder Singh started Wolf Street Accountant as he wanted to change the way
            clients are helped. Right from the start, our goal was to offer better and more 
            useful solutions. We decided to be flexible and focus on giving real value to our 
            clients.
          </p>
          <p>
          Since we began, Wolf Street Accountant has grown a lot. We&apos;ve expanded a whole bunch 
          and now use the latest technology and secure online systems. This means we can help 
          people not just in Greater Sydney but all over Australia and even around the world.
          </p>
          <p>
            Our main goal is to work closely with people who own small businesses and want to 
            make their businesses bigger. With Wolf Street Accountant, you get access to a group 
            of experts who have lots of experience from big companies and many useful connections. 
            What makes us different is that we don&apos;t like complicated rules and red tape. We believe 
            in getting things done quickly and efficiently.

          </p>
          <p>
          One special thing about us is that we are completely independent. This means we can give
          you practical and doable advice that fits your business goals. Our independence allows us 
          to provide advice that helps your business grow in a smart and practical way.
          </p>
        </>
      ),}
    ,{
    image: "/img/slider/2.jpg",
    name: "Mala Kapoor",
    designation: "Accountant",
    text: (
      <>
        <p>
          With 8 years of experience as a dedicated financial accountant, I
          bring a strong foundation in accounting principles and a commitment to
          accuracy. As a part-qualified CPA, I have the expertise to deliver
          reliable financial information. Specializing in the insurance broking
          industry, I excel in managing financials for brokers. This experience
          has given me a deep understanding of the industry&apos;s reporting
          requirements, enabling me to provide comprehensive financial services
          and contribute to brokers&apos; success.
        </p>
        <p>
          I am proficient in accounting software platforms, streamlining
          processes and improving accuracy in financial reporting. I leverage
          automation to increase efficiency and reduce errors, ensuring
          high-quality financial information. As a proactive individual, I
          identify areas for improvement and implement process enhancements,
          driving positive change and optimizing financial practices through
          technology.
        </p>
        <p>
          With strong analytical and communication skills, I provide valuable
          financial insights to stakeholders. Committed to professional
          development, I stay informed about industry trends and regulatory
          changes. Reliable and meticulous, I thrive in collaborative
          environments, building successful relationships across departments.
        </p>
        <p>
          As a financial accountant specializing in trust accounting, with
          expertise in the insurance broking industry, I have a track record of
          driving business improvements. I am dedicated to delivering accurate
          and valuable financial insights to contribute to your organization&apos;s
          growth and success.
        </p>
      </>
    ),}
    ];
    const currentItem = introContent[0];

  return (
    <>
      {introContent.map((item, index) => (
        <div key={index}>
          <div className="top_author_image">
            <img src={item.image} alt="about" style={{ borderRadius: 20 }} />
          </div>
          <div className="about_title">
            <h3>{item.name}</h3>
            <span>{item.designation}</span>
          </div>
          <div className="about_text">{item.text}</div>
        </div>
      ))}
    </>
  );
};

export default Intro;
