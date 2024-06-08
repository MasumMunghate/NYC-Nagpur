import React, { useState } from "react";

const ServiceComponent = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const toggleExpand = (index) => {
    setExpandedCard((prevIndex) => (prevIndex === index ? null : index));
  };

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  const services = [
    {
      title: "Dent & Paint",
      icon: "fa-phone-alt",
      description:
        "Our technicians at AutoMechanica take immense pride in the quality of our work and in caring for your vehicle. All products and services used at our service center are of the highest quality to ensure the proper paint texture, gloss, and finish is rendered to your car.",
    },
    {
      title: "Bumper Repair",
      icon: "fa-money-bill-alt",
      description:
        "Plastic bumpers don’t always need replacement when damage happens. Instead, they can be saved and even retrieved with innovative auto reconditioning techniques. Our expert technicians can repair scuffed, scratched, dented, detached, and torn bumpers for much less than the cost of replacement. We offer same-day service, and we guarantee your satisfaction!",
    },
    {
      title: "Accidental Repair",
      icon: "fa-road",
      description:
        "AutoMechanica is an expert in car body repair and collision repair for all types of cars. Our body shop guarantees the best professional services in town. We have established a reputation, and many insurers respect us.",
    },
    {
      title: "Scratch Removal",
      icon: "fa-umbrella",
      description:
        "Our technicians at AutoMechanica take immense pride in the quality of our work and in caring for your vehicle. All products and services used at our service center are of the highest quality to ensure the proper paint texture, gloss, and finish is rendered to your car.",
    },
    {
      title: "Engine Repairs",
      icon: "fa-building",
      description:
        "Your engine light is an indication that something on your car needs attention. Your car may have some issues, and it’s time to take it to a service center.",
    },
    {
      title: "Suspension Repairs",
      icon: "fa-car-alt",
      description:
        "The suspension system of your vehicle protects you from bouncing up and down due to the bad road conditions and bumps in the road. More importantly, it affects your steering ability, and that can mean the difference between life and death.",
    },
  ];

  return (
    <div className="container-fluid service py-5">
      <div className="container py-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "800px" }}
        >
          <h1 className="display-5 text-capitalize mb-3">
            NYC <span className="text-primary">Services</span>
          </h1>
          <p className="mb-0 tw-font-bold">
            Wear and tear in your vehicle is unavoidable, and it would usually
            have a finite life span before eventually being retired from
            operations. The good news is, your vehicle doesn’t just go
            end-of-life overnight.
          </p>
        </div>
        <div className="row g-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay={`${0.1 * (index % 3)}s`}
            >
              <div className="service-item p-4">
                <div className="service-icon mb-4">
                  <i className={`fa ${service.icon} fa-2x tw-text-white`}></i>
                </div>
                <h5 className="mb-3 tw-font-bold">{service.title}</h5>
                <p className="mb-0 tw-text-gray-700">
                  {expandedCard === index
                    ? service.description
                    : truncateText(service.description, 16)}
                </p>
                <button
                  className="tw-text-red-600"
                  onClick={() => toggleExpand(index)}
                >
                  {expandedCard === index ? "Read less" : "Read more"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;
