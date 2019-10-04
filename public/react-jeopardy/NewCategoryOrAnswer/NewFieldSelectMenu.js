import React from 'react';
import Select from "react-select";
import Formsy from "formsy-react";

const NewFieldSelectMenu = ({testId, options, onChange}) => {
    return (
        <div data-testid={testId} style={{width: '200px', textAlign:'center', margin: '0 auto'}}>
            <Select options={options} onChange={onChange}/>
        </div>
    );
};

export default NewFieldSelectMenu;