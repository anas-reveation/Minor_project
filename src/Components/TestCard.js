import Button from "./Button";

export default function TestCard(props) {
  const { image, title, description } = props;
  return (
    <div className="col-md-6 col-lg-4">
      <div className="shadow px-5 py-4 h-100 rounded">
        <div className="">
          <div className="text-center">
            <img
              src={image}
              alt="Teeth Whitening"
              style={{ width: "88px", height: "88px" }}
            />
            <h4 className="py-4 tertiary fw-semibold">{title}</h4>
          </div>
          <p className="font-p" style={{ textAlign: "justify" }}>
            {description}
          </p>
          <Button btnText="Read More" color="black-text" text="Read More" />
        </div>
      </div>
    </div>
  );
}
