import React, {useState} from 'react';
import './GutsyWager.scss';
import Formsy from "formsy-react";

const GutsyWager = (props) => {

    const { questionAnswer, maxAmount, selectQuestionAnswer, category } = props;

    // TODO: change later so category and questionAnswer are part of a data store and won't be passed down


    let [ formScreen, setFormScreen ] = useState(false);
    let [ wager, setWager ] = useState(0);
    let [ invalidAmount, setInvalidAmount ] = useState(false);

    const nextScreen = () => {
        setFormScreen(true);
    };

    const handleKeyPress = (e) => {
        if (e.keyCode !== 8
            && e.keyCode !== 9
            && e.keyCode !== 37
            && e.keyCode !== 39
            && !(e.keyCode >= 48 && e.keyCode <= 57)
        ) {
            e.preventDefault();
        }
    };

    const setMaxBettingAmount = () => {
        if (maxAmount < 500) {
            return 500;
        }
        return maxAmount;
    };

    const checkIfValidAmount = () => {
        if (wager > setMaxBettingAmount()) {
            setInvalidAmount(true);
        }
    };

    const wagerChange = e => {
        setWager(e.target.value);
    };

    const gutsyWagerHeading = () => {
        return (
            <div className="gutsy-wager-heading" onClick={nextScreen}>
                <div>
                    GUTSY WAGER
                </div>
            </div>
        );
    };

    const gutsyWagerForm = () => {
        return (
            <div className="gutsy-wager-form">
                <Formsy className="gutsy-wager-formsy-form" onSubmit={checkIfValidAmount}>
                    <div>
                        <div className="gutsy-wager-formsy-form-head">
                            Choose an amount between 0 and { setMaxBettingAmount }
                        </div>
                        <input name="wager" onKeyDown={handleKeyPress} onChange={wagerChange} value={wager} />
                        <button>OK</button>
                        {
                            invalidAmount
                                ? (
                                    <div className="gutsy-wager-formsy-form-warning">
                                        Choose an amount between 0 and
                                    </div>
                                ) : null
                        }
                    </div>
                </Formsy>
            </div>
        );
    };

    return (
        <div className="gutsy-wager-container">
            {
                formScreen
                    ? gutsyWagerForm()
                    : gutsyWagerHeading()
            }
        </div>
    );
};

export default GutsyWager;