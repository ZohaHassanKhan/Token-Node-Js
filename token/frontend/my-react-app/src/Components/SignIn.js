import React from "react";

function SignIn() {
  return (
    <div className="body">
      <form action="/SignIn" method="POST" id="SignIn">
        <div>
          <h1>Sign In</h1>
          <label for="uname">User Name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label for="pass">Password</label>
          <input type="password" id="pass" />
        </div>
        <div className="btn">
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
}
export default SignIn;
