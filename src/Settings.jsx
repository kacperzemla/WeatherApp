import { useState } from "react";

export default function Settings() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://127.0.0.1:8000/api/mailsAdd", {
        method: "POST",
        body: JSON.stringify({
          mail: email
        }),
        headers: {
          'Content-Type': 'application/json'
        },
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setEmail("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      style={{ color: "white" }}
      className="emailForm"
     onSubmit={handleSubmit}
    >
      <p>Enter your email to get notifications</p>
      <input
        placeholder="email"
        className="emailForm-input"
        type="email"
        onChange={handleEmailChange}
        value={email}
      ></input>
      <button className="emailForm-button" type="submit">
        Send
      </button>
    </form>
  );
}
