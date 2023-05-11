import { NavLink, Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light header-bg py-3">
        <div className="container">
          <a href="/">
            <img
              src="../images/logomain.jpg"
              style={{ width: "203px", height: "48px" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item pe-3">
                <NavLink to="/" className=" nav-text ">
                  Home
                </NavLink>
              </li>
              <hr
                className="d-block d-md-none mt-1 mb-3"
                style={{
                  opacity: 1,
                  width: "100%",
                  borderTop: "1px solid rgba(188, 188, 188, 0.5)",
                }}
              />
              <li className="nav-item dropdown pe-3">
                <a
                  className="nav-text dropdown-toggle "
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                  id="dropdown-2"
                >
                  <li>
                    <Link className="dropdown-item" to="/services">
                      Our Services
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/speciality">
                      Speciality
                    </Link>
                  </li>
                </ul>
              </li>
              <hr
                className="d-block d-md-none mt-1 mb-3"
                style={{
                  opacity: 1,
                  width: "100%",
                  borderTop: "1px solid rgba(188, 188, 188, 0.5)",
                }}
              />
              <li className="nav-item pe-3">
                <NavLink to="/about" className="nav-text" aria-current="page">
                  About Us
                </NavLink>
              </li>
              <hr
                className="d-block d-md-none mt-1 mb-3"
                style={{
                  opacity: 1,
                  width: "100%",
                  borderTop: "1px solid rgba(188, 188, 188, 0.5)",
                }}
              />
              <hr
                className="d-block d-md-none mt-1 mb-3"
                style={{
                  opacity: 1,
                  width: "100%",
                  borderTop: "1px solid rgba(188, 188, 188, 0.5)",
                }}
              />
              <li className="nav-item pe-3">
                <Link className="nav-text " to="/">
                  Our Center
                </Link>
              </li>{" "}
              <hr
                className="d-block d-md-none mt-1 mb-3"
                style={{
                  opacity: 1,
                  width: "100%",
                  borderTop: "1px solid rgba(188, 188, 188, 0.5)",
                }}
              />
              <li className="d-lg-block d-none">
                <button
                  type="button"
                  className="btn bg-tertiary-color button-h rounded-pill btn-small"
                  style={{ fontWeight: 600 }}
                >
                  <a href="tel: +91-6265613xxx" className="anc" target="_blank">
                    Contact Us
                  </a>
                </button>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
