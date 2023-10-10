import Image from "next/image";
import React, { useState } from "react";
import Modal from "react-modal";
import newsData from "../../data/newsData";
import Social from "../Social";

Modal.setAppElement("#__next");

const News = () => {
  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleblogsData = (id) => {
    const find = newsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  const handleModle = (id) => {
    handleblogsData(id);
  };

  return (
    <>
      <ul>
        {newsData.map((item) => (
          <li key={item.id}>
            <div className="list_inner"
            //  onClick={() => handleModle(item?.id)}
             >
              <div className="image">
                <div
                  className="main "
                  style={{
                    backgroundImage: `url(${item.img})`,
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="details">
                <h3 className="title">{item.title}</h3>
                
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}
            </div>
          </li>
        ))}

        {/* END SINGLE BLOG */}
      </ul>
      {/* START MODAL */}
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news">
          <button className="close-modal" onClick={() => setIsOpen(false)}>
            <Image
              width={45}
              height={45}
              src="/img/svg/cancel.svg"
              alt="close icon"
            />
          </button>
          {/* END CLOSE ICON */}

          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${singleData?.img})`,
                  }}
                ></div>
              </div>
              
              <div className="details">
                <div className="extra">
                  {/* <p className="date">
                    <a href="#">{singleData?.poster}</a>
                    <span>{singleData?.date}</span>
                  </p> */}
                </div>
                <h3 className="title">{singleData?.title}</h3>
              </div>
              
              <div className="main_content ">
                {singleData?.descriptions}
               
                <div className="news_share">
                  <span>Go To</span>
                  <Social />
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </Modal>
     
    </>
  );
};

export default News;
