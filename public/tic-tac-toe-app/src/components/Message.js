import React from "react";

const Message = (props) => {
    return (
        <div className="tic-tac-toe-message">
            {props.gameOver.isGameOver ? (
                <>
                    <div className="game-over-message">
                        <p>Game Over!</p>
                        {props.gameOver.winner ? (<p>{props.gameOver.winner} wins!</p>) : (<></>)}
                    </div>
                    <button onClick={props.startNewGame} className="game-over-button">Play Again?</button>
                </>
            ) : (<></>)}
        </div>
    );
};

export default Message;