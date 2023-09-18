import Head from "next/head";

const Seo = ({ pageTitle }) => {
  return (
    <Head>
      <title>
        {pageTitle &&
          `Wolf Street Accountant`}
      </title>
    </Head>
  );
};

export default Seo;
