import React from 'react';
import './QuestionAnswer.scss';
import './bootstrap.min.css';

const QuestionMusic = (props) => {

    const qstn = props.question;

    const getQuestion = (type) => {
        switch(type) {
            case 'songs':
                return (<div>
                    Which song was done by {qstn.genre} artist {qstn.artist}?
                </div>);
            case 'albums':
                return (<div>
                    Which album was done by {qstn.genre} artist {qstn.artist}?
                </div>);
            case 'artist':
                return (<div>
                    Which {qstn.genre} artist is known for the song "{props.extra.song}"?
                </div>);
        }
    };

    return (
        <div className="question-div col-md-5 col-offset-1">

            <div>
                { getQuestion(props.type) }
            </div>
        </div>
    );
}

export default QuestionMusic;