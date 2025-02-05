import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div class="footer-bg pt-5">
      <div class="border-bottom">
        <div class="container">
          <div class="row ul-l mb-5 gy-5">
            <div class="col-md-12 col-xl-4">
              <div class="row">
                <div class="col-xl-9 col-md-6 col-12">
                  <div class="logo-sm">
                    <a href="/">
                      <img
                        src="../assets/img/logo white.svg"
                        style={{ width: "178px", height: "48px" }}
                        alt="Footer Logo"
                      />
                    </a>

                    <ul style={{ listStyleType: "disc", paddingLeft: "1rem" }}>
                      <li class="text-white">
                        <a
                          href="https://goo.gl/maps/pwDu5MYkjQFPMGvM8"
                          target="_blank"
                          rel="noopener"
                          class="anc"
                        >
                          <h6
                            class="text-white pt-3"
                            style={{ lineHeight: " 25px" }}
                          >
                            house and building number, street, lane, area -code,
                            state, India
                          </h6>
                        </a>
                      </li>
                      <li class="text-white">
                        <a
                          href="https://goo.gl/maps/htnZF6kthWtWq35S9"
                          target="_blank"
                          rel="noopener"
                          class="anc"
                        >
                          <h6
                            class="text-white pt-3"
                            style={{ lineHeight: " 25px" }}
                          >
                            house and building number, street, lane, area -code,
                            state, India
                          </h6>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-xl-12 col-md-6 col-12 text-white mt-5 add-f">
                  <div>
                    <img
                      src="../assets/img/Phone.svg"
                      style={{ width: "18px", height: "18px" }}
                      alt="Phone"
                    />
                    <span>
                      <a href="tel: +91-9898xxxxx" class="text-white">
                        (+91-989xxxxx)
                      </a>
                    </span>
                  </div>
                  <div class="pt-2">
                    <img
                      src="../assets/img/Phone.svg"
                      style={{ width: "18px", height: "18px" }}
                      alt="Phone"
                    />
                    <span>
                      <a href="tel: +91-99799xxxx" class="text-white">
                        (+91-997xxxxxxxx)
                      </a>
                    </span>
                  </div>
                  <div class="pt-2">
                    <img
                      src="../assets/img/Email.svg"
                      style={{ width: "18px", height: "18px" }}
                      alt="Email"
                    />
                    <span>
                      <a
                        href="mailto:drketulpatel05051976@gmail.com"
                        class="text-white"
                      >
                        xxxxxxxxxxxx@gmail.com
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12 col-xl-8">
              <div class="row gy-3 footer-h5">
                <div class="col-xl-3 col-md-6 col-12 d-flex justify-content-xl-center">
                  <div class="text-white logo-sm">
                    <h5 class="text-white mb-3">About Us</h5>

                    <ul>
                      <li class="pb-1">
                        <Link to="/#home-section">Aboutus 1 </Link>
                      </li>
                      <li class="pb-1">
                        <Link to="/dentists">About us 2</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-xl-4 col-md-6 col-12 d-flex justify-content-xl-center">
                  <div class="text-white logo-sm">
                    <h5 class="text-white mb-3">Services</h5>
                    <ul class="row"></ul>
                  </div>
                </div>
                <div class="col-xl-2 col-md-6 col-6 d-flex justify-content-xl-center">
                  <div class="text-white">
                    <h5 class="text-white mb-3">Doctors</h5>
                    <ul>
                      <li class="pb-1">
                        <Link to="/dentists">Dr. Ketul Patel</Link>
                      </li>
                      <li class="pb-1">
                        <Link to="/dentists">Dr. Ravi Patel</Link>
                      </li>
                      <li class="pb-1">
                        <Link to="/dentists">Dr. Urvashi Patel</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-xl-3 col-md-6 col-6 psm-0 d-flex justify-content-xl-center">
                  <div class="text-white">
                    <h5 class="text-white mb-3">Service Hours</h5>
                    <p class="mb-2" style={{ fontSize: "14px" }}>
                      Monday to Saturday
                    </p>
                    <ul
                      class="office-hr mb-2"
                      style={{ listStyleType: "disc", paddingLeft: "18px" }}
                    >
                      <li class="pb-1" style={{ color: "var(--footer-text)" }}>
                        9.00 am to 1.00 pm
                      </li>
                      <li class="pb-1" style={{ color: "var(--footer-text)" }}>
                        4.00 pm to 7.30 pm
                      </li>
                    </ul>
                    <p class="mb-1" style={{ fontSize: "14px" }}>
                      Sunday Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-md-none d-block">
            <div class="row justify-content-center align-items-center pb-4 mb-2">
              <div class="col-2">
                <a
                  href="https://www.instagram.com/vardan_dental_clinic/"
                  target="_blank"
                  rel="noopener"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#fff"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </a>
              </div>
              <div class="col-2">
                <a
                  href="https://www.facebook.com/vardandentalclinicandimplantcenter"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    src="../assets/img/facebook1.svg"
                    alt="facebook"
                    style={{ height: "44px", width: "38.5px" }}
                  />
                </a>
              </div>
              <div class="col-2">
                <a
                  href="https://twitter.com/VardanDental"
                  target="_blank"
                  rel="noopener"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="#fff"
                  >
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container footer-text"></div>
      <div class="d-flex justify-content-center align-items-baseline pb-3 footer-text">
        <h5 class="text-center pe-2 footer-tx-bt" style={{ fontSize: "14px" }}>
          Design With
        </h5>
        <span class="pb-2 footer-tx-bt">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="#ff0000"
            style={{ width: "15px" }}
          >
            <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
          </svg>
          At
          <a
            class="text-decoration-underline ps-1"
            href="https://www.reveation.io/"
            target="_blank"
          >
            Labs
          </a>
        </span>
      </div>
    </div>
  );
}
