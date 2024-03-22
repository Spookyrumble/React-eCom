import { useState } from "react";
import * as S from "./index.styles";
import DialogSuccess from "../dialogs/Success";

const Form = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function onFormSubmit(event) {
    event.preventDefault();

    const body = {
      fullName,
      email,
      subject,
      message,
    };
    console.log(body);
  }

  function onInputChange(event) {
    const value = event.target.value;

    if (event.target.name === "name") {
      setFullName(value);
    } else if (event.target.name === "email") {
      setEmail(value);
    } else if (event.target.name === "subject") {
      setSubject(value);
    } else if (event.target.name === "message") {
      setMessage(value);
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
        />
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
        <button type="submit" onClick={handleSubmit} disabled={fullName === ""}>
          {fullName === "" ? "Please fill out form" : "Submit"}
        </button>
      </S.FormContainer>
    </>
  );
};

export default Form;
