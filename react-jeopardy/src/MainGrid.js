import React from 'react';
import './MainGrid.scss';
import './bootstrap.min.css';
import utils from './utils';
import {CategorySquare} from "./common/CategorySquare";

const MainGrid = ({categories, baseValue, quizGrid, selectQuestionAnswer}) => {
    const cats = categories;

    const categoryClickFunc = (cat, value, question) => {
        selectQuestionAnswer(cat, question, value);
    };

    const checkIfInQuizGrid = (cat, value) => {
        if (quizGrid && quizGrid[cat] && quizGrid[cat][value]) {
            return true;
        }
        return false;
    };

    return (
        <div className="row">
            <div className="category-grid-container">
                <div className=" category-grid col-10 offset-1">
                    <table className="table">
                        <thead>
                            <tr>
                                {
                                    cats.map((cat) => <th key={cat.categoryName}scope="col">{cat.categoryName}</th> )
                                }
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="category-break-row">
                            </tr>
                                {

                                    utils.range(0,4).map((val, idx) =>
                                        <tr key={'row' + idx}>
                                            {
                                                cats.map((cat) =>
                                                    <CategorySquare key={cat.categoryName + baseValue * (idx + 1)}
                                                                    category={cat.categoryName}
                                                                    points={baseValue * (idx + 1)}
                                                                    question={cat.questions[idx]}
                                                                    disabledSquare={checkIfInQuizGrid(cat.categoryName, baseValue * (idx + 1))}
                                                                    categoryClickFunc={categoryClickFunc}
                                                    />
                                                )
                                            }
                                        </tr>
                                    )
                                }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MainGrid;