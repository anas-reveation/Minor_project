export default function HomeBanner() {
  return (
    <div className="bg-banner">
      <div className="container psm-4">
        <div className="row">
          <div
            className="col-md-11 col-lg-9 col-xl-6"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="text-white pt-5 mt-3 pb-5 home-sm">
              <h1 className="py-3 fw-bold" style={{ fontSize: "58px" }}>
                Advancing Global
                <span className="fw-bold primary"> Health Care</span>
              </h1>
              <p className="text-white text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <div className="mt-5 pt-3 text-center">
                <a
                  href="tel: +91-9898025261"
                  rel="noopener"
                  className="bg-primary-color d-flex w-38 align-items-center text-decoration-none light-anc hover-speciality"
                  style={{
                    borderRadius: "34px",
                    padding: "",
                  }}
                >
                  <span className="ps-4 fw-semibold py-3">
                    {" "}
                    Connect With Us Today
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
