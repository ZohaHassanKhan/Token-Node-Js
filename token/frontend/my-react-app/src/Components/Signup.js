import React from "react";

function Signup() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Show a jQuery alert
    console.log("Form Submitted Sucessfully!");

    // You can also submit the form to the server here if needed
  };
  return (
    <div className="body">
      <form action="/Signup" method="POST" id="Signup">
        <div>
          <h1>Sign Up</h1>
          <label htmlFor="name">User Name</label>
          <input
            type="text"
            id="name"
            // value={username}
            // onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            id="pass"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="btn">
          <button type="submit" onClick={handleSubmit}>
            submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
