import React, { useState } from "react";
import TickForm from "./TickForm";
import Preview from "./Preview";
import "./CSS/Home.css";

function Home() {
  const [previewCard, setPreviewCard] = useState(false);
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
    // setPreviewCard(true);
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
          <TickForm
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
