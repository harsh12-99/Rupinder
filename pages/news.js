import Seo from "../components/Seo";
import News from "../components/news/News";
import Sidebar from "../components/sidebar/Sidebar";
import Head from "next/head";

const index = () => {
  return (
    <>
    <div>
      <Head>
        <title>Why Choose us</title>
        <meta name="description" content="We offer comprehensive financial planning, investment management, tax consulting, and more. Let us help you secure your financial future today"/>
        <meta name="keywords" content="Taxation Services, Company Trust and SMSF Setup, Payroll Services, Bookkeeping Services, Accounting Services, Financial Reporting, Budgeting" />
      </Head>
    </div>
      <Seo pageTitle="Blog" />
      {/* End page title for seo */}

      <Sidebar />
      {/* END LEFT MENU CONTENT */}

      {/* START RIGHT PART CONTENT */}
      <div className="rightpart">
        <div className="rightpart_in">
          <div className="tokyo_tm_section">
            <div data-aos="fade-right" data-aos-duration="1200">
              <div className="container">
                <div className="tokyo_tm_news">
                  <div className="tokyo_tm_title">
                    <div className="title_flex">
                      <div className="left">
                        <h3>Why Choose US</h3>
                      </div>
                    </div>
                  </div>
                  {/* END TITLE */}
                  <News />
                </div>
              </div>
              {/* End .container */}
            </div>
          </div>
        </div>
      </div>
      {/* END RIGHT PART CONTENT */}
    </>
  );
};

export default index;
