import React from 'react';
import './App.css';
import './bootstrap.min.css';

const MainGrid = (props) => {
    const cats = props.categories;

    return (
        <div>
            <table class="tg">
                <tr>
                    {
                        cats.map((cat) => <th className="tg-0lax">{cat.categoryName}</th> )
                    }
                </tr>
                <tr>
                    {
                        cats.map((cat) => <td className="tg-0lax" onClick={() =>
                            props.selectQuestionAnswer(cat.categoryName, cat.questions[0], props.baseValue )
                        }>{props.baseValue}</td> )
                    }
                </tr>
                <tr>
                    {
                        cats.map((cat) => <td className="tg-0lax" onClick={() =>
                            props.selectQuestionAnswer(cat.categoryName, cat.questions[1], props.baseValue * 2)
                        }>{props.baseValue * 2}</td> )
                    }
                </tr>
                <tr>
                    {
                        cats.map((cat) => <td className="tg-0lax" onClick={() =>
                            props.selectQuestionAnswer(cat.categoryName, cat.questions[2], props.baseValue * 3)
                        }>{props.baseValue * 3}</td> )
                    }
                </tr>
                <tr>
                    {
                        cats.map((cat) => <td className="tg-0lax" onClick={() =>
                            props.selectQuestionAnswer(cat.categoryName, cat.questions[3], props.baseValue * 4)
                        }>{props.baseValue * 4}</td> )
                    }
                </tr>
                <tr>
                    {
                        cats.map((cat) => <td className="tg-0lax" onClick={() =>
                            props.selectQuestionAnswer(cat.categoryName, cat.questions[4], props.baseValue * 5)
                        }>{props.baseValue * 5}</td> )
                    }
                </tr>
            </table>
        </div>
    );
};

export default MainGrid;