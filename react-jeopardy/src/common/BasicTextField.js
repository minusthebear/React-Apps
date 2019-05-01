import React from 'react';
import {Mixin} from 'formsy-react';



export const BasicTextField = React.createClass({
    mixins: [Mixin]
});





{ ({val, idx, valueChange, multiFields, message}) => {
    return (<div key={val} className="">
        { multiFields ? null : <label htmlFor={field} >{message}</label>}

        <input name={field} type="text" value={ val } onChange={(e) => valueChange(idx, e)} />
    </div>);
};

// How many categories? (No more than six)