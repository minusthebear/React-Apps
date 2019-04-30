import React from 'react';
import './App.scss';
import './bootstrap.min.css';
import utils from './utils';

const MainGrid = (props) => {
    const cats = props.categories;

    const func = (event, cat, value, question) => {
        if (checkIfInQuizGrid(cat, value)) {
            event.preventDefault();
        } else {
            props.selectQuestionAnswer(cat, question, value)
        }
    };

    const checkIfInQuizGrid = (cat, value) => {
        if (props.quizGrid && props.quizGrid[cat] && props.quizGrid[cat][value]) {
            return true;
        }
        return false;
    };

    const disabledSquare = (cat, value) => {
        return checkIfInQuizGrid(cat, value) ? '#ff7733' : '';
    };

    return (
        <div className="row">
            <div className="category-grid-container">
                <div className=" category-grid col-10 offset-1">
                    <table className="table">
                        <tr>
                            {
                                cats.map((cat) => <th scope="col">{cat.categoryName}</th> )
                            }
                        </tr>
                        {

                            utils.range(0,4).map((val, idx) =>
                                <tr>
                                    {

                                        cats.map((cat) => <td scope="row"
                                                              style={{backgroundColor: disabledSquare(cat.categoryName, props.baseValue * (idx + 1))}}
                                                              category={cat.categoryName} points={props.baseValue * (idx + 1)}
                                                              onClick={(event) =>
                                            func(event, cat.categoryName, props.baseValue * (idx + 1), cat.questions[idx])
                                        }>${props.baseValue * (idx + 1)}</td>)
                                    }
                                </tr>
                            )
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MainGrid;