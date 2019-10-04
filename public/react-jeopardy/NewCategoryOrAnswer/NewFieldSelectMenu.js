import React from 'react';
import Select from "react-select";

const NewFieldSelectMenu = ({testId, options, onChange}) => {
    return (
        <div data-testid={testId} className={ 'newFieldSelectMenu-' + testId } style={{width: '200px', textAlign:'center', margin: '0 auto'}}>
            <Select options={options} onChange={onChange}/>
        </div>
    );
};

export default NewFieldSelectMenu;