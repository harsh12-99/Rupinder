import React from "react";

const Partners = () => {
  const partnerImg = ["1", "2", "3", "4", "5", "6", "7", "8"];
  return (
    <>
      {partnerImg.map((img, i) => (
        <li key={i}>
          <div className="list_inner">
            <img
              width={180}
              height={60}
              src={`/img/partners/dark/${img}.png`}
              alt="partners brand"
            />
          </div>
        </li>
      ))}
    </>
  );
};

export default Partners;
