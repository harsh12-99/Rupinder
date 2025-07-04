import Link from "next/link";
import sidebarData from "../../data/sidebarData";
import CopyRight from "../CopyRight";
import { isActiveLink } from "../../utilis/linkActiveChecker";
import { useRouter } from "next/router";
import { useState } from "react";

const Sidebar = () => {
  const router = useRouter();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <div className="header">
        <div className="header-inner">
          <div className="logo">
            <Link className="navbar-brand" href="/">
              <img
                width={80}
                height={80}
                src="/img/logo/img_logo.png"
                alt="brand"
              />
            </Link>
          </div>
          {/* End logo */}

          <div className="my_trigger" onClick={handleClick}>
            <div
              className={
                click
                  ? "hamburger hamburger--collapse-r is-active"
                  : "hamburger"
              }
            >
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
            {/* End hamburger menu */}
          </div>
        </div>
      </div>
      {/* Header */}

      {/* START LEFT MENU CONTENT */}
      <div className={click ? "leftpart active" : "leftpart"}>
        <div className="leftpart_inner">
          <div className="logo">
            <Link className="navbar-brand" href="/">
              <img
                width={80}
                height={80}
                src="/img/logo/img_logo.png"
                alt="brand"
              />
            </Link>
          </div>
          <div>
            <h3 className="logo-text" style={{ fontSize: "18px", padding: "10px" }}>Wolf Street Accountant</h3>
          </div>
          {/* END LOGO */}

          <div className="menu">
            <ul>
              {sidebarData.map((item) => (
                <li key={item.id} onClick={handleClick}>
                  <Link
                    className={`${
                      isActiveLink(item.routePath, router.asPath)
                        ? "active "
                        : ""
                    }`}
                    href={item.routePath}
                  >
                    <img
                      width={15}
                      height={15}
                      className="svg"
                      src={item.icon}
                      alt="Wolf Street Accountant"
                    />
                    <span className="menu_content">{item.menuName}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* END MENU */}

          <CopyRight />
          {/* END COPYRIGHT */}
        </div>
      </div>
      {/* END LEFT MENU CONTENT */}
    </>
  );
};

export default Sidebar;
