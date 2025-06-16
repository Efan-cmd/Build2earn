import React from "react";

function Register() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Register</h1>
      <form>
        <input type="email" placeholder="Email" /><br/><br/>
        <input type="password" placeholder="Password" /><br/><br/>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;