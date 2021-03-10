import React from 'react'

function Book(props) {
    return (
        <div className="col-4">
            <h5>{props.title}</h5>
            <p>{props.author}</p>
            <p>{props.pages}</p>
            <img alt={props.title} src={props.image} />
        </div>
    )
}

export default Book
