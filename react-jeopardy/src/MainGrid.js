import React from 'react';
import './App.css';
import './bootstrap.min.css';

const MainGrid = (props) => {
    const cats = props.categories;
    // props
    console.log(props);
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
                            props.selectQuestionAnswer(cat.questions[0])
                        }>100</td> )
                    }
                </tr>
                <tr>
                    {
                        cats.map((cat) => <td className="tg-0lax" onClick={() =>
                            props.selectQuestionAnswer(cat.questions[1])
                        }>200</td> )
                    }
                </tr>
                <tr>
                    {
                        cats.map((cat) => <td className="tg-0lax" onClick={() =>
                            props.selectQuestionAnswer(cat.questions[2])
                        }>300</td> )
                    }
                </tr>
                <tr>
                    {
                        cats.map((cat) => <td className="tg-0lax" onClick={() =>
                            props.selectQuestionAnswer(cat.questions[3])
                        }>400</td> )
                    }
                </tr>
                <tr>
                    {
                        cats.map((cat) => <td className="tg-0lax" onClick={() =>
                            props.selectQuestionAnswer(cat.questions[4])
                        }>500</td> )
                    }
                </tr>
            </table>
            First row is a table header
        </div>
    );
};

export default MainGrid;