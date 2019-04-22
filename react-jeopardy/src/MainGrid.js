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
                        props.categories.map((cat) => <th className="tg-0lax">{cat.categoryName}</th> )
                    }
                </tr>
                <tr>
                    {
                        props.categories.map((cat) => <td className="tg-0lax" onClick={() =>
                            props.selectQuestionAnswer(cat.question[0])
                        }>100</td> )
                    }
                </tr>
                <tr>
                    {
                        props.categories.map((cat) => <td className="tg-0lax" onClick={() =>
                            props.selectQuestionAnswer(cat.question[1])
                        }>200</td> )
                    }
                </tr>
                <tr>
                    {
                        props.categories.map((cat) => <td className="tg-0lax" onClick={() =>
                            props.selectQuestionAnswer(cat.question[2])
                        }>300</td> )
                    }
                </tr>
                <tr>
                    {
                        props.categories.map((cat) => <td className="tg-0lax" onClick={() =>
                            props.selectQuestionAnswer(cat.question[3])
                        }>400</td> )
                    }
                </tr>
                <tr>
                    {
                        props.categories.map((cat) => <td className="tg-0lax" onClick={() =>
                            props.selectQuestionAnswer(cat.question[4])
                        }>500</td> )
                    }
                </tr>
            </table>
            First row is a table header
        </div>
    );
};

export default MainGrid;