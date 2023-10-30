import Head from "next/head";

const Seo = ({ pageTitle, }) => {
  
    <>
      <Head>
        <title>{pageTitle || `Wolf Street Accountant`}</title>
        <meta name="description" content="We offer comprehensive financial planning, investment management, tax consulting, and more. Let us help you secure your financial future today"/>
        <meta name="keywords" content="Taxation Services, Company Trust and SMSF Setup, Payroll Services, Bookkeeping Services, Accounting Services, Financial Reporting, Budgeting" />
      </Head>
    </>

};

export default Seo;
