import React, {useEffect, useState} from "react";

const Square = (props) => {

    let [height, setHeight] = useState(null);

    useEffect(() => {
        return setUpEventListener();
    });

    const setElmHeight = () => {

        let elm = document.getElementById(props.number);

        if (elm && elm.clientHeight) {
            setHeight(elm.clientHeight);
        }
    };

    const setUpEventListener = () => {
        const handleResize = () => setElmHeight();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    };


    const getInfo = () => {
        if (height) {
            return (height * .7) + 'px';
        }

        let elm  = document.getElementById(props.number);

        if (elm && elm.clientHeight) {
            setHeight(elm.clientHeight);
            return (elm.clientHeight * .7) + 'px';
        }
        return '1rem';
    };

    const elementContainer = () => {
        if (props.bgColor === '#FF0000') {
            return (
                <div className="xoBox redBox">
                    <span className="xMarks">X</span>
                </div>
            );
        } else if (props.bgColor === '#00FF00') {
            return (
                <div className="xoBox greenBox">
                    <span className="oMarks">O</span>
                </div>
            );
        }
        return null;
    };

    const clickedSquare = () => {
        props.onClick(props.number, props.turn);
    };

    return (
        <div id={props.number} onClick={clickedSquare} className="tic-tac-toe-square" style={{fontSize: getInfo()}}>
            { elementContainer() }
        </div>
    );
};

export default Square;