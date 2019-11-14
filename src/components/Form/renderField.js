import React from 'react'; 
import "./Form.css";

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="form-group col-md-6">
    <div>
      <input {...input} type={type} 
             className={`form-control 
                        ${touched && error && "is-invalid"}
                        ${touched && !error && "is-valid"}
                        ${input.name === "userId" && "field-userId"}`
                        }
      />
      {touched && error && <span className="invalid-message">{error}</span>}
      <label>{label}</label>
    </div>
  </div>
)

export default renderField;