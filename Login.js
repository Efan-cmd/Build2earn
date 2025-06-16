import React from "react";

function Login() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Login</h1>
      <form>
        <input type="email" placeholder="Email" /><br/><br/>
        <input type="password" placeholder="Password" /><br/><br/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;