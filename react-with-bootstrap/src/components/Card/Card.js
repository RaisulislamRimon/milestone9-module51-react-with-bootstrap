import React from 'react'

const Card = (props) => {
    const { id, title, text } = props.card;
    return (
        <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <p className="card-text"><small className="text-muted">Last updated {id} mins ago</small></p>
            </div>
        </div>
    )
}
export default Card;