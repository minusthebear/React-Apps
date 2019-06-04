import React from 'react';

export const CategorySquare = ({ category, points, question, disabledSquare, categoryClickFunc}) => {

    const onClick = (e) => {
        disabledSquare ? e.preventDefault() : categoryClickFunc(category, points, question);
    };

    return (
        <td scope="row"
            category={category}
            points={points}
            onClick={onClick}> {
            disabledSquare
                ? (<></>)
                : (<>${points}</>)
        }</td>
    )
};