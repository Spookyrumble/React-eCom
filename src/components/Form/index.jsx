import { useState } from "react";
import * as S from "./index.styles";
import DialogSuccess from "../dialogs/Success";

const Form = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!fullName.trim())
      newErrors.fullName = "Name must be 3 characters or more";
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Valid email is required";
    if (!subject.trim())
      newErrors.subject = "Subject must be 3 characters or more";
    if (!message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  function onFormSubmit(event) {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }

    const body = {
      fullName,
      email,
      subject,
      message,
    };
    console.log(body);
  }

  function onInputChange(event) {
    const { name, value } = event.target;

    setErrors({ ...errors, [name]: "" });

    switch (name) {
      case "name":
        setFullName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "subject":
        setSubject(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }
  }

  const [isDialogHidden, setDialogHidden] = useState(true);
  const toggleDialog = (shouldShow) => {
    setDialogHidden(!shouldShow);
  };

  const clearForm = () => {
    setFullName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setErrors({});
  };

  const handleSubmit = () => {
    toggleDialog(true);
    clearForm();
  };

  return (
    <>
      <S.InfoContainer>
        <p>Please use this contact form if you have any enquiries.</p>
      </S.InfoContainer>
      <S.FormContainer onSubmit={onFormSubmit}>
        <S.Label htmlFor="name">Name</S.Label>
        <S.Input
          type="text"
          id="name"
          name="name"
          value={fullName}
          required
          minLength={3}
          onChange={onInputChange}
          className={errors.fullName ? "error" : ""}
        />
        {errors.fullName && (
          <S.ErrorMessage> {errors.fullName} </S.ErrorMessage>
        )}
        <S.Label htmlFor="email">Email</S.Label>
        <S.Input
          type="email"
          id="email"
          name="email"
          value={email}
          required
          onChange={onInputChange}
        />
        <S.Label htmlFor="subject">Subject</S.Label>
        <S.Input
          type="text"
          id="subject"
          name="subject"
          value={subject}
          required
          minLength={3}
          onChange={onInputChange}
        />
        <S.Label htmlFor="message">Message</S.Label>
        <S.TextArea
          id="message"
          name="message"
          value={message}
          required
          minLength={3}
          rows={5}
          onChange={onInputChange}
        />
        <DialogSuccess
          hidden={isDialogHidden}
          show={toggleDialog}
          message={"Thank you for contacting us. We will get back to you soon."}
        />
        <S.Button
          type="submit"
          // onClick={handleSubmit}
          disabled={fullName === ""}
        >
          {fullName === "" ? "Please fill out form" : "Submit"}
        </S.Button>
      </S.FormContainer>
    </>
  );
};

export default Form;
