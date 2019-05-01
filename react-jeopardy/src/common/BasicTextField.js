import React from 'react';
import {withFormsy} from 'formsy-react';

class BasicTextField extends React.Component {

    constructor(props) {
        super(props);
    }

    getInitialState() {

    }
    render() {

        const showMessage = (field) => {
            switch (field) {
                case 'categories':
                    return 'How many categories? (No more than six)';
                case 'numPlayers':
                    return 'How many categories? (No more than six)';
            }
        };

        const className = 'form-group' + (this.props.className || ' ') +
            (this.showRequired() ? 'required' : this.showError() ? 'error' : '');

        // An error message is returned ONLY if the component is invalid
        // or the server has returned an error message
        const errorMessage = this.getErrorMessage();

        const { val, idx, field, onKeyDown, valueChange, multiFields } = this.props;

        return (
            <div key={val} className={className}>
                { multiFields ? null : <label htmlFor={field} >{showMessage(field)}</label>}
                { idx && idx >= 0
                    ? (
                        <input name={field} type="text" value={ val } onChange={(e) => valueChange(idx, e)} />
                    ) : (
                        <input name={field} type="text" value={ val } onKeyDown={onKeyDown} onChange={valueChange} />
                    )
                }

            </div>
        );
    }
};

export default withFormsy(BasicTextField);


// How many categories? (No more than six)