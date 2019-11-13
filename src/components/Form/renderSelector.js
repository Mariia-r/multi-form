import React from "react";
import "./Form.css";

const renderSelector = ({ input, label, addClassName, options, meta: { touched, error } }) => (
    <div className={`form-group ${addClassName}`}>
      <select {...input} className={`form-control 
                                    ${touched && error && "is-invalid"}
                                    ${touched && !error && "is-valid"}`
                                   }>
        <option value="" disabled selected></option>
        {options.map(val => (
          <option value={val} key={val}>
            {val}
          </option>
        ))}
      </select>
      {touched && error && <span className="invalid-message">{error}</span>}
      <label>{label}</label>
    </div>
  )

  export default renderSelector;