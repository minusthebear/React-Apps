import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import '../../home-page/Main.scss';

const NewCategoryOrAnswer = (props) => {

    const takeMeToSetting = (val) => {
        switch (val) {
            case 'category':
                break;
            case 'answer':
                break;
            case 'field':
                break;
        }

    };

    return (
        <>
            <div className="container-fluid main-page-container">
                <div className="row main-page-row">
                    <div className="col-md-4">
                        <div className="main-page-option-container" onClick={takeMeToSetting('category')}>
                            <div>Create a New Category</div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="main-page-option-container" onClick={takeMeToSetting('answer')}>
                            <div>Add a New Answer</div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="main-page-option-container" onClick={takeMeToSetting('field')}>
                            <div>Add to an Existing Answer</div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};

const mapStateToProps = state => state;

export default connect(mapStateToProps, null)(NewCategoryOrAnswer);