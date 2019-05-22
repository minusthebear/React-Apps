import React from 'react';
import List from './List';
import Form from './Form';

const App = () => {

    const submitForm = (val) => {
        console.log(val);
    };

    return (
        <div className="row mt-5">
            <div className="col-md-4 offset-md-1">
                <h2>Articles</h2>
                <List/>
            </div>
            <div className="col-md-4 offset-md-1">
                <h2>Add a new article</h2>
                <Form submitForm={submitForm}
                />
                <p/>
                <p/>
                <Form submitForm={submitForm}
                />
            </div>
        </div>
    );
};
export default App;
