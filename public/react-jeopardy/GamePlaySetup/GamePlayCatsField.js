import React from 'react';
import {withFormsy} from 'formsy-react';
import BasicTextField from "../common/BasicTextField";

const GamePlayCatsField = (props) => {

    const showMessage = (field) => {
        switch (field) {
            case 'categories':
                return 'How many categories? (No more than six)';
            case 'numPlayers':
                return 'How many players? (No more than four)';
        }
    };

    return (
        <div className="form-group" key={props.field}>
            <label htmlFor={props.field} >{showMessage(props.field)}</label>
            <BasicTextField {...props} />
        </div>
    );
};

export default withFormsy(GamePlayCatsField);


// How many categories? (No more than six)