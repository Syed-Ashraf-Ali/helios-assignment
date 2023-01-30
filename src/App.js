import React from "react";
import { useState } from "react";
import Avatar from "react-avatar-edit";
import Header from "./components/header";
import RegistrationForm from "./components/registrationForm";
 

export default function App() {
  const [preview, setPreview] = useState(null);
  const [src, setSrc] = useState("https://i.imgur.com/5fh5cPN.jpg");
  const [original, setOriginal] = useState(null);

  const onClose = () => {
    setPreview(null);
  };

  const onCrop = (preview) => {
    setPreview(preview);
  };

  const onBeforeFileLoad = (elem) => {
    if (elem.target.files[0].size > 71680) {
      alert("File is too big!");
      elem.target.value = "";
    } else {
      console.log(elem.target.files[0]);
      // get the normale photo
    }
  };
  return (
    <div>
      <Avatar
        width={390}
        height={295}
        onCrop={onCrop}
        onClose={onClose}
        onBeforeFileLoad={onBeforeFileLoad}
        src={src}
      />
      <img src={preview} alt="Preview" />
      <img src={original} alt="Preview" />
      <Header/>
      <RegistrationForm/>
    </div>
  );
}
