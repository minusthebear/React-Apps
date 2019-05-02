import React from 'react';
import {withFormsy} from 'formsy-react';

const BasicTextField = ({ value, field, onKeyDown, onChange }) => {

    const showMessage = (field) => {
        switch (field) {
            case 'categories':
                return 'How many categories? (No more than six)';
            case 'numPlayers':
                return 'How many categories? (No more than six)';
        }
    };

    return (
        <div key={field}>
            <label htmlFor={field} >{showMessage(field)}</label>
            <input name={field} type="text" value={ value } onKeyDown={onKeyDown} onChange={onChange} />
        </div>
    );
};

export default withFormsy(BasicTextField);


// How many categories? (No more than six)