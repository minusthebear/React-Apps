import React from 'react';
import {withFormsy} from 'formsy-react';
//
const BasicTextField = ({ value, field, onKeyDown, onChange, disabled }) => {


    return (
        <>
            <input disabled={disabled} name={field} type="text" value={ value } onKeyDown={onKeyDown} onChange={onChange} />
        </>
    );
};

export default withFormsy(BasicTextField);


// How many categories? (No more than six)