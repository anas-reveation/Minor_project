export default function Testimonial() {
  return (
    <div
      style={{
        backgroundImage: "url(../images/testback.jpg)",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="container ">
        <h2 className="py-3 text-center">Coustomer Testimonials</h2>

        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators ">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <div className="row align-items-center black-text text-center justify-content-center py-3">
                <div className="col-2">
                  <img
                    src="../images/test1.jpg"
                    className="w-100"
                    style={{ borderRadius: "50%" }}
                  />
                </div>
                <h3 className="fw-semibold py-3">John Dee</h3>
                <h5 className="mb-0">Blood Test</h5>
                <p className="f-14 mb-0 py-3 col-10">
                  {" "}
                  formal written description or statement about the abilities,
                  character and qualities of a person, often given by a previous
                  employer; a formal written statement about the quality of a
                  product, service, etc.
                </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <div className="row align-items-center black-text text-center justify-content-center py-3">
                <div className="col-2">
                  <img
                    src="../images/test1.jpg"
                    className="w-100"
                    style={{ borderRadius: "50%" }}
                  />
                </div>
                <h3 className="fw-semibold py-3">John Dee</h3>
                <h5 className="mb-0">Blood Test</h5>
                <p className="f-14 mb-0 py-3 col-10">
                  {" "}
                  formal written description or statement about the abilities,
                  character and qualities of a person, often given by a previous
                  employer; a formal written statement about the quality of a
                  product, service, etc.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row align-items-center black-text text-center justify-content-center py-3">
                <div className="col-2">
                  <img
                    src="../images/test1.jpg"
                    className="w-100"
                    style={{ borderRadius: "50%" }}
                  />
                </div>
                <h3 className="fw-semibold py-3">John Dee</h3>
                <h5 className="mb-0">Blood Test</h5>
                <p className="f-14 mb-0 py-3 col-10">
                  {" "}
                  formal written description or statement about the abilities,
                  character and qualities of a person, often given by a previous
                  employer; a formal written statement about the quality of a
                  product, service, etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
