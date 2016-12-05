import React from 'react';

export default (props) => {


  const errors = props.errors;

  const usernameError = !!errors.username ? "Username " + errors.username[0] : false;
  const emailError = !!errors.email ? "Email " + errors.email[0] : false;
  const fnameError = !!errors.f_name ? "First name " + errors.f_name[0] : false;
  const lnameError = !!errors.l_name ? "Last name " + errors.l_name[0] : false;
  const passwordError = !!errors.password ? "Password " + errors.password[0] : false;

  const usernameClass = usernameError ? "error" : "";
  const emailClass = emailError ? "error" : "";
  const fnameClass = fnameError ? "error" : "";
  const lnameClass = lnameError ? "error" : "";
  const passwordClass = passwordError ? "error" : "";

  return (
    <ul className="signup-errors">
      <li className={ usernameClass }>{ usernameError }</li>
      <li className={ emailClass }>{ emailError }</li>
      <li> </li>
      <li className={ fnameClass }>{ fnameError }</li>
      <li className={ lnameClass }>{ lnameError }</li>
      <li className={ passwordClass }>{ passwordError }</li>
    </ul>
  );

};
