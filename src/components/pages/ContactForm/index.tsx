import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import Button from "../../atoms/button";
import TextField from "../../atoms/textfield";
import Typography from "../../atoms/typograpy";
import { Contact_Data } from "../../../services";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const FormBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  height: "500px",
  width: "600px",
  marginLeft: "400px",
  justifyContent: "center",
  alignItems: "center",
});

const ElementWithMargin = styled(Grid)({
  marginBottom: "15px",
});

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (formData.name !== "" && formData.email !== "") {
      Contact_Data(formData)
        .then((response) => {
          toast.success(
            "Succefully Send Your Information !! Will contact with you in while"
          );
        })
        .catch((error) => {
          toast.warning("Something Went Wrong");
        });
      setFormData({ ...formData, name: "", email: "", message: "" });
    } else {
      toast.warning("Please Enter Data !!");
    }
  };
  const contactButtonColor =
    formData.name !== "" && formData.email !== "" ? "contaned" : "outlined";
  return (
    <FormBox>
      <Typography> 📞 Contact Me 📞</Typography>

      <ElementWithMargin>
        <Typography>👨‍🦱 Name:</Typography>
        <TextField
          type="text"
          id="name"
          name="name"
          placeholder="✍️ Write a name"
          value={formData.name}
          onChange={handleInputChange}
          style={{ width: "440px" }}
          size="small"
          required
        />
      </ElementWithMargin>

      <ElementWithMargin>
        <Typography variant="body2">Email:</Typography>
        <TextField
          type="email"
          id="email"
          name="email"
          placeholder="📧 Write a name"
          value={formData.email}
          onChange={handleInputChange}
          style={{ width: "440px" }}
          size="small"
          required
        />
      </ElementWithMargin>

      <ElementWithMargin>
        <Typography variant="body2">Message:</Typography>
        <TextField
          id="message"
          name="message"
          value={formData.message}
          placeholder="📃 write your info"
          onChange={handleInputChange}
          size="small"
          style={{ width: "440px" }}
          required
        />
      </ElementWithMargin>

      <Button
        variant={contactButtonColor ? "contained" : "outlined"}
        style={{ background: contactButtonColor ? "green" : "lightgrey" }}
        onClick={handleSubmit}
      >
        Submit
      </Button>
      <ToastContainer position="top-center" />
    </FormBox>
  );
};

export default ContactForm;
