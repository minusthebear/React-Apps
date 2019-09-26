import React, {useState, useEffect} from 'react';
import '../../home-page/Main.scss';
import NewField from "./NewField";

const NewCategoryOrAnswer = ({allQuestionData}) => {

    // allQuestionData needs to be fixed
    useEffect(() => {
        if (allQuestionData) {
            Object.entries(allQuestionData, (k, v) => {
                console.log('key:', k);
                console.log('value:', v);
            })
        }
    });

    let [ field, setField ] = useState('');
    let [ subPage, setSubPage ] = useState(false);


    const takeMeToSetting = (val) => {
        setField(val);
        setSubPage(true)
    };

    const dummyFunc = () => {


        switch (field) {
            case 'category':
                break;
            case 'answer':
                break;
            case 'field':
                return <NewField allQuestionData={''}/>
        }

    };

    const mainPage = () => {
        return (
            <div className="container-fluid main-page-container">
                <div className="row main-page-row">
                    <div className="col-md-4">
                        <div className="main-page-option-container" onClick={() => takeMeToSetting('category')}>
                            <div>Create a New Category</div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="main-page-option-container" onClick={() => takeMeToSetting('answer')}>
                            <div>Add a New Answer</div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="main-page-option-container" onClick={() => takeMeToSetting('field')}>
                            <div>Add to an Existing Answer</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            { subPage ? dummyFunc() : mainPage() }
        </>

    );
};

export default NewCategoryOrAnswer;