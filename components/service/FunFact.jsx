import React from "react";

const FunFact = () => {
  const funFactContent = [
    {
      id: 1,
      number: "1000+",
      meta: "Individuals",
    },
    {
      id: 2,
      number: "150+",
      meta: "Business",
    },
    // {
    //   id: 3,
    //   number: "9K+",
    //   meta: "Lines of Code",
    // },
  ];
  return (
    <>
      {funFactContent.map((item) => (
        <li key={item.id}>
          <div className="list_inner">
            <h3>{item.number}</h3>
            <span>{item.meta}</span>
          </div>
        </li>
      ))}
    </>
  );
};

export default FunFact;
