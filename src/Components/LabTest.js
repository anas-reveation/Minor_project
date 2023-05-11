import TestCard from "./TestCard";

export default function LabTest() {
  return (
    <div className="container py-5 our-doc2">
      <div className="text-center">
        <h2 className="fw-bold secondary">Our Lab Services</h2>
        <p>Placing you and your safety at the heart of everything we do.</p>
      </div>
      <div
        className="row mt-4 gy-5"
        data-aos="zoom-in-up"
        data-aos-duration="400"
      >
        <TestCard
          title="Blood Test"
          image="../images/serv-i3.svg"
          description="lLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        />
        <TestCard
          title="Blood Test"
          image="../images/serv-i3.svg"
          description="lLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        />
        <TestCard
          title="Blood Test"
          image="../images/serv-i3.svg"
          description="lLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        />
        <TestCard
          title="Blood Test"
          image="../images/serv-i3.svg"
          description="lLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        />
        <TestCard
          title="Blood Test"
          image="../images/serv-i3.svg"
          description="lLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        />
        <TestCard
          title="Blood Test"
          image="../images/serv-i3.svg"
          description="lLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        />
      </div>
      <div className="text-end pt-4">
        <nuxt-link to="/services" className="primary fw-semibold anchor">
          View More
        </nuxt-link>
      </div>
    </div>
  );
}
