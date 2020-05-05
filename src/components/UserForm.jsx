import React, { useState } from "react";

export const UserForm = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async () => {
    if (
      name === "" ||
      description === "" ||
      phone === "" ||
      !validatePhone(phone)
    ) {
      return alert("erro!");
    }
    await props.db.collection("users").add({ name, description, phone });
    window.location.replace("/");
  };

  return (
    <div>
      <p>Nome</p>
      <input onChange={(e) => setName(e.target.value)}></input>

      <p>Ocupação</p>
      <input onChange={(e) => setDescription(e.target.value)}></input>

      <p>Telefone</p>
      <input onChange={(e) => setPhone(e.target.value)}></input>
      <button onClick={handleSubmit}>Submeter</button>
    </div>
  );
};

function validatePhone(phone) {
  return !(!phone || phone.length < 13);
}
