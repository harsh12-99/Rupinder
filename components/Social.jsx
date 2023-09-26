import React from "react";

const SocialShare = [
  // {
  //   iconName: "facebook",
  //   link: "https://www.facebook.com/",
  // },
  // { iconName: "twitter", link: "https://twitter.com/" },
  {
    iconName: "instagram",
    link: "https://instagram.com/wolfstreetaccountant?igshid=OGQ5ZDc2ODk2ZA==",
  },
  // { iconName: "dribbble", link: "https://dribbble.com/" },
  {
    iconName: "tik-tok",
    link: "https://www.tiktok.com/@wolfstreetfinance?_t=8g0QaULtWRV&_r=1",
  },
];
const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/img/svg/social/${val.iconName}.png`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
