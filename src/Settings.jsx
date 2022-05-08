export default function Settings() {
  return (
    <form style={{color: "white"}} className="emailForm">
      <p>Enter your email to get notifications</p>
      <input type="text" placeholder="email" className="emailForm-input"></input>
      <button className="emailForm-button">Send</button>
    </form>
  );
}
