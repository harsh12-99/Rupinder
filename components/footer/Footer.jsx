const Footer = () => {
  return (
    <div className="copyright">
      <p>
        &copy; {new Date().getFullYear()} Sandha Accounting Services Pty Ltd.
        All rights reserved. &nbsp; &nbsp;
        <a
          href="https://www.wolfstreetaccountant.com/PrivacyPolicy/Privacy-Policy.pdf"
          class="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>
      </p>

      <style jsx>{`
        .copyright {
          width: 100%;
          background: #fefefe;
          color: #333;
          text-align: center;
          padding: 15px 0;
          font-size: 14px;
          position: relative;
          bottom: 0;
        }
        .copyright p {
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default Footer;
