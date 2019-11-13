import React from "react";
import { Field, reduxForm } from 'redux-form';
import validate from '../validate.js';
import renderField from "../renderField";

const AdditionalDetails = (props) => {
    const { handleSubmit, pristine, submitting, reset } = props;
    return(
        <>
            <legend>Additional Details</legend>
            <hr/>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <Field 
                        name="education"
                        type="text"
                        component={renderField}
                        label="Education"
                    />
                    <Field
                        name="last job"
                        type="text"
                        component={renderField}
                        label="Last job"
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
  })(AdditionalDetails);