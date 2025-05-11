import React, { useEffect, useState } from "react";
import Form from "./Form";
import Preview from "./Preview";
import "./CSS/Home.css";
import { setItem, getItem } from "../utils/LocalStorage";

function Home() {
  const [previewCard, setPreviewCard] = useState({});
  const [formData, setFormData] = useState(()=>{
    const item = getItem("Card Infos")
    return (item) || {}
   
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };


// Save data to localStorage
useEffect(() => {
  setItem("Card Infos", formData);
}, [formData]);


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
