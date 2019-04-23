import React from 'react';
import './App.css';
import './bootstrap.min.css';
import utils from './utils';

const MainGrid = (props) => {
    const cats = props.categories;

    console.log(props.quizGrid);

    const func = (event, cat, value, question) => {
        if (checkIfInQuizGrid(cat, value)) {
            event.preventDefault();
        } else {
            props.selectQuestionAnswer(cat.categoryName, question, value)
        }
    };

    const checkIfInQuizGrid = (cat, value) => {
        if (props.quizGrid && props.quizGrid[cat] && props.quizGrid[cat][value]) {
            return true;
        }
        return false;
    };

    const disabledSquare = (cat, value) => {
        console.log(checkIfInQuizGrid(cat, value));
        return checkIfInQuizGrid(cat, value) ? 'disabled-square' : '';
    };

    return (
        <div>
            <table class="tg">
                <tr>
                    {
                        cats.map((cat) => <th className="tg-0lax">{cat.categoryName}</th> )
                    }
                </tr>
                {

                    utils.range(0,4).map((val, idx) =>
                        <tr>
                            {

                                cats.map((cat) => <td className={disabledSquare(cat, props.baseValue * (idx + 1))} category={cat.categoryName} points={props.baseValue * (idx + 1)} className="tg-0lax" onClick={(event) =>
                                    func(event, cat, props.baseValue * (idx + 1), cat.questions[idx])
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