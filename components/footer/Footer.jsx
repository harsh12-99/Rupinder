const Footer = () => {
  return (
    <div className="copyright">
      <p>
        &copy; {new Date().getFullYear()} Wolf Street Accountant. All rights reserved.
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
