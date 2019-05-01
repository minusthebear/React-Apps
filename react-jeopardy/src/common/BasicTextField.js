import React from 'react';
import {Mixin} from 'formsy-react';



export const BasicTextField = React.createClass({
    mixins: [Mixin],
    
    render() {

        // Set a specific className based on the validation
        // state of this component. showRequired() is true
        // when the value is empty and the required prop is
        // passed to the input. showError() is true when the
        // value typed is invalid
        const className = 'form-group' + (this.props.className || ' ') +
            (this.showRequired() ? 'required' : this.showError() ? 'error' : '');

        // An error message is returned ONLY if the component is invalid
        // or the server has returned an error message
        const errorMessage = this.getErrorMessage();

        const { val, idx, field, valueChange, multiFields, message } = this.props;

        return (
            <div key={val} className={className}>
                { multiFields ? null : <label htmlFor={field} >{message}</label>}
                <input name={field} type="text" value={ val } onChange={(e) => valueChange(idx, e)} />
            </div>
        );
    }
});


// How many categories? (No more than six)