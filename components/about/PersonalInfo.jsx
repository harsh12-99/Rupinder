import React from "react";

const PersonalInfo = () => {
  const personalInfoContent = [
    {
      id: 1,
      colClass: "left",
      info: [
        
        {
          id: 1,
          name: "Address",
          content:(<>
          <h6>
            L2 191 193, Liverpool Street,<br /> Hobart TAS 7000 Australia
          </h6>
          </>) 
        },
        
      ],
    },
    {
      id: 1,
      colClass: "right",
      info: [
        {
          id: 1,
          name: "Email",
          content: (
            <>
              <a href="mailto:info@wolfstreetaccountant.com"><h6>info@wolfstreetaccountant.com</h6> <br /></a>
            </>
          ),
        },
        {
          id: 2,
          name: "Phone",
          content: (
            <>
              <h6> (03) 70346278 <br /> +61 406846120 </h6>
            </>
          ),
        },
      ],
    },
  ];
  return (
    <>
      {personalInfoContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_tm_info">
            <ul>
              {item?.info?.map((value) => (
                <li key={value.id}>
                  <span>{value.name}:</span>
                  <span>{value.content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default PersonalInfo;
