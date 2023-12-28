import React from "react";
import Styled from 'styled-components'

const Register = (props) => {
  let btnText, passBoxType;
  let btnClasses= ["btn","m-1"]

  const StyledButton= Styled.button`
    display:block;
    padding:10px 5px ;
    background-color:orange;
    border:none !important;
    color:white !important;
    width:100%;
    margin:5px
  `
  if (props.showpass === true) {
    btnText = "Hide Password";
    passBoxType = "text";
    btnClasses.push("btn-danger");
  } else {
    btnText = "Show Password";
    passBoxType = "password";
    btnClasses.push("btn-success");
  }
  return (
    <div className="container card p-3 mt-5 register-container">
      <h3 className="text-center">Registration Form</h3>
      <form onSubmit={props.submit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" required className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" required name="email" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type={passBoxType}
            required
            name="password"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary m-1">
          Submit
        </button>
        <button
          type="button"
          className={btnClasses.join(" ")}
          onClick={props.click}
        >
          {btnText}
        </button>
        <StyledButton>Sign-in </StyledButton>
      </form>
    </div>
  );
};

export default Register;
