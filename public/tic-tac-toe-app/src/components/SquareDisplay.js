import SquareRow from "./SquareRow";
import React from "react";

const SquareDisplay = (props) => {
    return (
        <>
            <div className="tic-tac-toe-container">
                <SquareRow {...props} level={'A'} />
                <SquareRow {...props} level={'B'} />
                <SquareRow {...props} level={'C'} />
                <SquareRow {...props} level={'D'} />
            </div>
        </>
    );
};

export default SquareDisplay;