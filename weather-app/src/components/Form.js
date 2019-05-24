import React, { useState } from 'react';
import Formsy from 'formsy-react'
import { connect } from 'react-redux';
import uuidv1 from 'uuid';
import { addArticle } from '../actions';

function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
}

// change to function component later
function ConnectedForm (props) {
    const { submitForm } = props;

    let [ translation, setTranslation ] = useState('');

    function handleChange(e) {
        if (e.target && e.target.value) {
            setTranslation(e.target.value);
        }
    }

    function handleSubmit() {
        submitForm(translation);
        // event.preventDefault();
        // const { title } = this.state;
        // const id = uuidv1();
        // //this.props.addArticle({ title, id });
        // setTitle('');
    }

    return (
        <Formsy onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Translation</label>
                <input
                    type="textarea"
                    className="form-control"
                    value={translation}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="btn btn-success btn-lg">
                SAVE
            </button>
        </Formsy>
    );
}

const Form = connect(
    null,
    mapDispatchToProps
)(ConnectedForm);

export default Form;