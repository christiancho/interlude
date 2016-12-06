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

      <li className={ usernameClass }>
        <span className="error-message">{ usernameError }</span>
      </li>

      <li className={ emailClass }>
        <span className="error-message">{ emailError }</span>
      </li>

      <li> </li>

      <li className={ fnameClass }>
        <span className="error-message">{ fnameError }</span>
      </li>

      <li className={ lnameClass }>
        <span className="error-message">{ lnameError }</span>
      </li>

      <li className={ passwordClass }>
        <span className="error-message">{ passwordError }</span>
        </li>
    </ul>
  );

};
