import Home from "../components/home/Home";
import Seo from "../components/Seo";
import Sidebar from "../components/sidebar/Sidebar";
import Head from 'next/head'

const index = () => {
  return (
    <>

    <div>
      <Head>
        <title>Home Page</title>
        <meta name="google-site-verification" content="pqAUqYIutNRklsrdGGkeFoYiCHTXKsIPZ8S71f0ipkk" />
        <meta name="description" content="We offer comprehensive financial planning, investment management, tax consulting, and more. Let us help you secure your financial future today"/>
        <meta name="keywords" content="Taxation Services, Company Trust and SMSF Setup, Payroll Services, Bookkeeping Services, Accounting Services, Financial Reporting, Budgeting" />
      </Head>
    </div>
      <Seo pageTitle="Home" />
      {/* En Seo Page Title */}

      <Sidebar />
      {/* END LEFT MENU CONTENT */}

      {/* START RIGHT PART CONTENT */}
      <div className="rightpart">
        <div className="rightpart_in">
          <div className="tokyo_tm_section">
            <div data-aos="fade-right" data-aos-duration="1200">
              <Home />
            </div>
          </div>
        </div>
      </div>
      {/* END RIGHT PART CONTENT */}
    </>
  );
};

export default index;
