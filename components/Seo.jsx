import Head from "next/head";

const Seo = ({ pageTitle, }) => {
  
    <>
      <Head>
        <title>{pageTitle || `Wolf Street Accountant`}</title>
        <meta name="description" content="We offer comprehensive financial planning, investment management, tax consulting, and more. Let us help you secure your financial future today"/>
        <meta name="keywords" content="Accountant in Melbourne,Accounting Services in Melbourne,Taxation Services in Melbourne, Company Trust and SMSF Setup Services in Melbourne, Payroll Services in Melbourne, Bookkeeping Services in Melbourne, Financial Reporting Services in Melbourne, Budgeting" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" /> 
      </Head>
    </>

};

export default Seo;
