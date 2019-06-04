import React from 'react';

export const BasicButton = ({isDisabled, onClick}) => {
    return <button disabled={isDisabled} onClick={onClick} >ADD</button>
}