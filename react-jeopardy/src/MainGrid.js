import React from 'react';
import './App.css';
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
        <div>
            <table className="tg">
                <tr>
                    {
                        cats.map((cat) => <th className="tg-0lax">{cat.categoryName}</th> )
                    }
                </tr>
                {

                    utils.range(0,4).map((val, idx) =>
                        <tr>
                            {

                                cats.map((cat) => <td className="tg-0lax"
                                                      style={{backgroundColor: disabledSquare(cat.categoryName, props.baseValue * (idx + 1))}}
                                                      category={cat.categoryName} points={props.baseValue * (idx + 1)}
                                                      onClick={(event) =>
                                    func(event, cat.categoryName, props.baseValue * (idx + 1), cat.questions[idx])
                                }>{props.baseValue * (idx + 1)}</td>)
                            }
                        </tr>
                    )
                }
            </table>
        </div>
    );
};

export default MainGrid;