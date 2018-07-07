import React,{Component} from 'react';
import {Field,reduxForm} from 'redux-form';
const _App = (props:any) => {   
        return (
            <div>
                Redux Form
                <form>
                <Field name="firstName" component="input" />
                </form>
            </div>
        )
}
const App = reduxForm({
    form:'mda'
})(_App);

export {
    App
}