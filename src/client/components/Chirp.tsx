import React from 'react';
import { Link } from 'react-router-dom';

const Chirp = (props: IChirpProps) => {
    return (
        <div className="card m-3 d-flex justify-content-between align-items-center flex-row">
            <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">@{props.chirps.name}</h6>
                <p className="card-text">{props.chirps.content}</p>
                <p className="card-text">{props.chirps._created}</p>
            </div>
            <div>
                <Link to={`/admin/${props.chirps.id}`}>
                    <button className="btn btn-sm btn-primary">Admin Options</button>
                </Link>
            </div>
        </div>
    )
}

interface IChirpProps {
    chirps: {
        id: string
        name:string,
        content: string,
        _created: string
    }
}

export default Chirp