import React, { useState } from "react";
import Form from "./Form";
import Preview from "./Preview";
import "./CSS/Home.css";

function Home() {
  const [previewCard, setPreviewCard] = useState({});
  const [formData, setFormData] = useState({
    photo: "",
    displayName: "",
    companyName: "",
    role: "",
    number: "",
    address: "",
    websiteURL: "",
    linkedlnURL: "",
    email: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setPreviewCard(formData);
    let clearForm = {
      photo: "",
      displayName: "",
      companyName: "",
      role: "",
      number: "",
      address: "",
      websiteURL: "",
      linkedlnURL: "",
      email: "",
    };
    setFormData(clearForm);
  };

  return (
    <div>
      <div className="home">
        <form onSubmit={handleFormSubmit}>
          <Form
            formData={formData}
            setFormData={setFormData}
            callBackProp={handleFormSubmit}
          />
        </form>

        <Preview
          formData={formData}
          setFormData={setFormData}
          setPreviewCard={setPreviewCard}
        />
      </div>
    </div>
  );
}
export default Home;
