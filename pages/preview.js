import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Seo from "../components/Seo";
import Link from "next/link";
import { useTheme } from "next-themes";

const Preview = () => {
  var settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  };

  const demoItems = [
    {
      id: 1,
      img: "/img/intro/light.png",
    },
    // {
    //   id: 2,
    //   img: "/img/intro/dark.png",
    // },
  ];

  const { theme, setTheme } = useTheme();

  // toggle of dark & light mode
  const handle = (e) => {
    setTheme(e);
  };

  return (
    <>
      <Seo pageTitle="Preview" />
      {/* End page title for seo */}
      <div className="tokyo_tm_all_wrap">
        <div className="tokyo_tm_intro">
          <div className="short_info">
            <img src="/img/logo/dark.png" alt="logo" style={{width:100,height:100}} />
            <h3>
               <strong>Sandha Accounting Services Pvt. Ltd.</strong> 
            </h3>
          </div>
          
          <div className="container" style={{marginTop:100}}>
            <Slider {...settings}>
              {demoItems.map((item) => {
                const mode = item.id % 2 === 0 ? "dark" : "light";
                return (
                  <div
                    className="left"
                    key={item.id}
                    onClick={() => handle(mode)}
                  >
                    <Link href="/home">
                      <div className="desc" >
                        <img src={item.img} alt="demo item" style={{borderRadius:20 ,width:400,height:240 ,marginLeft:290}}/>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preview;
