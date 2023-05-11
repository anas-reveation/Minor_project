import React from "react";
import { db } from "../firebaseConfig";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";

export default function Conatct() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  console.log(name);

  const userCollectionRef = collection(db, "contactdata");

  const handleSubmit = () => {
    addDoc(userCollectionRef, {
      name: name,
      email: email,
      message: message,
    });
  };

  return (
    <div>
      <form className="contactform">
        <label>Full name</label>
        <input
          type="text"
          placeholder="Enter yput name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>email</label>
        <input
          type="email"
          placeholder="Enter yput email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <label>Message</label>
        <textarea
          type="text"
          placeholder="Enter yput messag"
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        ></textarea>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
