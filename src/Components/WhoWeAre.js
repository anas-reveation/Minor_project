export default function WhoWeAre() {
  return (
    <div>
      <div className="container my-4">
        <div className="row align-items-center">
          <div
            className="col-12 col-md-6"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h2 className="fw-semibold">Who We Are </h2>
            <h5 className="fw-normal py-2">
              Let Us Take Care Of You For A Healthy Long Life{" "}
            </h5>
            <p className="f-14">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
          </div>
          <div
            className="col-12 col-md-6"
            data-aos="zoom-in-up"
            data-aos-duration="400"
          >
            <img src="../images/whowe.webp" />
          </div>
        </div>
      </div>
    </div>
  );
}
