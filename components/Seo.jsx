import Head from "next/head";

const Seo = ({ pageTitle }) => {
  return (
    <Head>
      <title>
        {pageTitle &&
          `${pageTitle} || Sandha Accounting Services Pvt. Ltd.}`}
      </title>
    </Head>
  );
};

export default Seo;
