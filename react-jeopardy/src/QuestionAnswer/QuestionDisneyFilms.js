import React from 'react';
import './QuestionAnswer.scss';
import '../bootstrap.min.css';

const QuestionDisneyFilms = (props) => {

    const qstn = props.question;

    console.log(props);

    const getQuestion = (type) => {
        switch(type) {
            case 'characters':
                return (<div>
                    Which character can be seen in the film {qstn.disneyFilm}?
                </div>);
            case 'songs':
                return (<div>
                    Which song can be heard in the film {qstn.disneyFilm}?
                </div>);
            case 'disneyFilm':
                return (<div>
                    In which film can you see the character {props.extra.character}?
                </div>);
        }
    };

    return (
        <div className="question-div col-md-12">
            <div>
                { getQuestion(props.type) }
            </div>
        </div>
    );
}

export default QuestionDisneyFilms;