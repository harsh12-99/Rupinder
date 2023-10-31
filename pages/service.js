import Seo from "../components/Seo";
import Service from "../components/service";
import Sidebar from "../components/sidebar/Sidebar";
import Head from "next/head";

const index = () => {
  return (
    <>
    <div>
      <Head>
        <title>Service Page</title>
        <meta name="description" content="We offer comprehensive financial planning, investment management, tax consulting, and more. Let us help you secure your financial future today"/>
        <meta name="keywords" content="Taxation Services, Company Trust and SMSF Setup, Payroll Services, Bookkeeping Services, Accounting Services, Financial Reporting, Budgeting" />
      </Head>
    </div>

      <Seo pageTitle="Service" />
      {/* End page title for seo */}

      <Sidebar />
      {/* END LEFT MENU CONTENT */}

      {/* START RIGHT PART CONTENT */}
      <div className="rightpart">
        <div className="rightpart_in">
          <div className="tokyo_tm_section">
            <div data-aos="fade-right" data-aos-duration="1200">
              <Service />
            </div>
          </div>
        </div>
      </div>
      {/* END RIGHT PART CONTENT */}
    </>
  );
};

export default index;
