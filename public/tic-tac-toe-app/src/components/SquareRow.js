import Square from "./Square";
import React from "react";

const SquareRow = (props) => {

    const bgColor = (squareId) => {
        if (!props.clickedNumsArray.includes(squareId)) {
            return '#FFFFFF';
        }
        return props.xArray.includes(squareId) ? '#FF0000' : '#00FF00';
    };

    return (
        <div className="tic-tac-toe-table">
            <div className="tic-tac-toe-row tic-tac-toe-row-1">
                <Square  key={1 + props.level}
                         number={1 + props.level}
                         turn={props.turn}
                         onClick={props.onClick}
                         bgColor={bgColor(1 + props.level)}
                />
                <Square  key={2 + props.level}
                         number={2 + props.level}
                         turn={props.turn}
                         onClick={props.onClick}
                         bgColor={bgColor(2 + props.level)}
                />
                <Square  key={3 + props.level}
                         number={3 + props.level}
                         turn={props.turn}
                         onClick={props.onClick}
                         bgColor={bgColor(3 + props.level)}
                />
                <Square  key={4 + props.level}
                         number={4 + props.level}
                         turn={props.turn}
                         onClick={props.onClick}
                         bgColor={bgColor(4 + props.level)}
                />
            </div>
            <div className="tic-tac-toe-row tic-tac-toe-row-2">
                <Square  key={5 + props.level}
                         number={5 + props.level}
                         turn={props.turn}
                         onClick={props.onClick}
                         bgColor={bgColor(5 + props.level)}
                />
                <Square  key={6 + props.level}
                         number={6 + props.level}
                         turn={props.turn}
                         onClick={props.onClick}
                         bgColor={bgColor(6 + props.level)}
                />
                <Square  key={7 + props.level}
                         number={7 + props.level}
                         turn={props.turn}
                         onClick={props.onClick}
                         bgColor={bgColor(7 + props.level)}
                />
                <Square  key={8 + props.level}
                         number={8 + props.level}
                         turn={props.turn}
                         onClick={props.onClick}
                         bgColor={bgColor(8 + props.level)}
                />
            </div>
            <div className="tic-tac-toe-row tic-tac-toe-row-3">
                <Square  key={9 + props.level}
                         number={9 + props.level}
                         turn={props.turn}
                         onClick={props.onClick}
                         bgColor={bgColor(9 + props.level)}
                />
                <Square  key={10 + props.level}
                         number={10 + props.level}
                         turn={props.turn}
                         onClick={props.onClick}
                         bgColor={bgColor(10 + props.level)}
                /><Square  key={11 + props.level}
                           number={11 + props.level}
                           turn={props.turn}
                           onClick={props.onClick}
                           bgColor={bgColor(11 + props.level)}
            />
                <Square  key={12 + props.level}
                         number={12 + props.level}
                         turn={props.turn}
                         onClick={props.onClick}
                         bgColor={bgColor(12 + props.level)}
                />
            </div>
            <div className="tic-tac-toe-row tic-tac-toe-row-4">
                <Square  key={13 + props.level}
                         number={13 + props.level}
                         turn={props.turn}
                         onClick={props.onClick}
                         bgColor={bgColor(13 + props.level)}
                />
                <Square  key={14 + props.level}
                         number={14 + props.level}
                         turn={props.turn}
                         onClick={props.onClick}
                         bgColor={bgColor(14 + props.level)}
                />
                <Square  key={15 + props.level}
                         number={15 + props.level}
                         turn={props.turn}
                         onClick={props.onClick}
                         bgColor={bgColor(15 + props.level)}
                />
                <Square  key={16 + props.level}
                         number={16 + props.level}
                         turn={props.turn}
                         onClick={props.onClick}
                         bgColor={bgColor(16 + props.level)}
                />
            </div>
        </div>
    );
};

export default SquareRow;
