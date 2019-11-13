import React from "react";
import { Field, reduxForm } from 'redux-form';
import validate from '../validate.js';
import renderField from "../renderField";

const Motto = (props) => {
    const { handleSubmit, pristine, submitting, reset } = props;
    return(
        <>
            <legend>Motto</legend>
            <hr/>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <Field 
                    name="motto"
                    type="text"
                    component={renderField}
                    label="Your motto"
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
  })(Motto);