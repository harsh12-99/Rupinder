import React from "react";

const Certificate = ()=> {
    const cerImg = ["cer-1", "cer-2"];
    console.log(cerImg);
    return(
        <div style={{display:"flex", gap:40, justifyContent: "center", alignItems: "center"}}>
        {cerImg.map((img, i) => (
        <div key={i} style={{ borderRadius: 10,}}>
          <img
            width={240}
            height={160}
            src={`/img/certificate/${img}.jpg`}
            alt="Certificate"
          />
        </div>
      ))}
      </div>
    )
}
export default Certificate
