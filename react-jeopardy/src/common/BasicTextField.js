import React from 'react';

export const BasicTextField = ({val, idx, valueChange}) => {
    return <input type="text" value={ val } onChange={(e) => valueChange(idx, e)} />
};