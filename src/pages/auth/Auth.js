import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";

const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="nice" />
        <div className="webname">
          <h1>VKC Media</h1>
          <h6>Explore The Idea throughout the world</h6>
        </div>
      </div>
      <SignUp />
    </div>
  );
};

function SignUp() {
  return (
    <div className="a-right">
      <form className="infoform">
        <h2>sign up</h2>
        <div>
          <input
            type="text"
            placeholder="first name"
            className="infoinput"
            name="firstname"
          />
          &nbsp; &nbsp; &nbsp;
          <input
            style={{ margin: 4 }}
            type="text"
            placeholder="last name"
            className="infoinput"
            name="firstname"
          />
          <input
            type="text"
            placeholder="username"
            className="infoinput"
            name="username"
          />
          <br />
        
          <input
            type="password"
            style={{ margin: 4 }}
            placeholder="enter your password"
            className="infoinput"
            name="password"
          />
          &nbsp; &nbsp; &nbsp;
          <input
            type="password"
            placeholder="enter your confirm password"
            className="infoinput"
            name="cpassword"
          />
        </div>
        <div>
          <br />
          <br />
          <br /><br />
          <br />
          <br />
          <span>Already have an account. Logic!</span>
        </div>

        <button className="button infoButton " type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Auth;
