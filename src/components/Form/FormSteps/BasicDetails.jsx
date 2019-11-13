import React from "react";
import { Field, reduxForm } from 'redux-form';
import validate from '../validate.js';
import renderField from "../renderField";
import renderSelector from "../renderSelector";

const BasicDetails = (props) => {
    const { handleSubmit, pristine, submitting, reset } = props;

    const countries = ["India", "Ukraine", "Poland", "USA"];
    const statesCountry = ["Maharashta"];
    const cities = ["Pune", "Kyiv", "Warsaw", "LA"];

    const valueToUpperCase = (value) => value.toUpperCase();
    const maskForPhoneNumber = (value) => {
        const onlyNums = value.replace(/[^\d]/g, '');
        if (onlyNums.length <= 2) {
          return onlyNums;
        }
        if (onlyNums.length <= 5) {
          return `${onlyNums.slice(0, 2)}-${onlyNums.slice(2,5)}`;
        }
        return `${onlyNums.slice(0, 2)}-${onlyNums.slice(2,5)}-${onlyNums.slice(5,7)}-${onlyNums.slice(7,9)}`;
      }

    return(
        <>
            <legend>Basic Details</legend>
            <hr/>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <Field 
                    name="firstName"
                    type="text"
                    component={renderField}
                    label="First Name"
                    />
                    <Field
                        name="lastName"
                        type="text"
                        component={renderField}
                        label="Last Name"
                    />
                </div>

                <div className="form-row">
                    <Field 
                        name="email" 
                        type="email" 
                        component={renderField}
                        label="Email ID"
                    />
                    <Field 
                        name="userId" 
                        type="text"
                        component={renderField}
                        label="Your User ID"
                    />
                </div>

                <div className="form-row">
                    <Field
                        name="country"
                        addClassName = "col-md-6"
                        component={renderSelector}
                        options={countries}
                        label="Country"
                    />
                    <Field 
                        name="stateCountry"
                        addClassName = "col-md-3"
                        component={renderSelector}
                        options={statesCountry}
                        label="State"
                    />
                    <Field
                        name="city"
                        addClassName = "col-md-3"
                        component={renderSelector}
                        options={cities}
                        label="City"
                    />
                </div>

                <div className="form-row">
                    <Field 
                        name="phoneNumber" 
                        type="text" 
                        component={renderField}
                        label="Phone Number +380"
                        normalize={maskForPhoneNumber}
                    />
                    <Field 
                        name="referenceCode" 
                        type="text"
                        component={renderField}
                        label="Reference Code"
                        normalize={valueToUpperCase}
                    />
                </div>
                <hr/>
                <div className="wrapper-btns">
                    <button type="reset" 
                            className="btn-reset" 
                            disabled={pristine || submitting} 
                            onClick={(event) => {props.confirmReset(event, reset)}}>
                                Reset All
                    </button>
                    <button type="submit" className="btn-continue">Continue</button>
                </div>
            </form>
        </>
    );
}

export default reduxForm({
    form: 'registr', 
    destroyOnUnmount: false, 
    forceUnregisterOnUnmount: true, 
    validate
  })(BasicDetails);