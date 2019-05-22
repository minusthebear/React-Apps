import React, { useState } from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid';
import { addArticle } from "../actions";

function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
}

// change to function component later
function ConnectedForm (props) {
    let [ title, setTitle ] = useState('');

    function handleChange(e) {
        if (e.target && e.target.value) {
            this.setState(e.target.value);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        const { title } = this.state;
        const id = uuidv1();
        this.props.addArticle({ title, id });
        setTitle('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="btn btn-success btn-lg">
                SAVE
            </button>
        </form>
    );
}

const Form = connect(
    null,
    mapDispatchToProps
)(ConnectedForm);

export default Form;