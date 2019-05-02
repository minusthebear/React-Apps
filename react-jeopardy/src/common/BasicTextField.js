import React from 'react';
import {withFormsy} from 'formsy-react';

const BasicTextField = ({ value, idx, field, onKeyDown, onChange, multiFields }) => {


    const showMessage = (field) => {
        switch (field) {
            case 'categories':
                return 'How many categories? (No more than six)';
            case 'numPlayers':
                return 'How many categories? (No more than six)';
        }
    };

    const change = (e, idx) => {
        onChange(e, idx);
    };

    console.log(value);

    const className = '';
    console.log(idx);

    return (
        <div key={field} className={className}>
            { multiFields ? null : <label htmlFor={field} >{showMessage(field)}</label>}
            { idx && idx >= 0
                ? (
                    <input name={field} type="text" value={ value } onChange={(e) => onChange(e, idx)} />
                ) : (
                    <input name={field} type="text" value={ value } onKeyDown={onKeyDown} onChange={onChange} />
                )
            }

        </div>
    );

    //(e) => onChange(idx, e)
    //onChange
};

export default withFormsy(BasicTextField);


// How many categories? (No more than six)