import About from "../components/about";
import Sidebar from "../components/sidebar/Sidebar";
import Seo from "../components/Seo";
import Head from "next/head";

const index = () => {
  return (
    <>
    <div>
      <Head>
        <title>About Us</title>
        <meta name="description" content="We offer comprehensive financial planning, investment management, tax consulting, and more. Let us help you secure your financial future today"/>
        <meta name="keywords" content="Taxation Services, Company Trust and SMSF Setup, Payroll Services, Bookkeeping Services, Accounting Services, Financial Reporting, Budgeting" />
      </Head>
    </div>
      <Seo pageTitle="About" />
      {/* End page title for seo */}

      <Sidebar />
      {/* END LEFT MENU CONTENT */}

      {/* START RIGHT PART CONTENT */}
      <div className="rightpart">
        <div className="rightpart_in">
          <div className="tokyo_tm_section">
            <div data-aos="fade-right" data-aos-duration="1200">
              <About />
            </div>
          </div>
        </div>
      </div>
      {/* END RIGHT PART CONTENT */}
    </>
  );
};

export default index;
