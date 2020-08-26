import React from 'react';
import {Link} from "react-router-dom";

const Card =(props)=>
{
    const {avatar, genre, name, _id} = props.data;
    return(
        <div className="card">
            <Link to={`/artist/${_id}`}>
                <img src={avatar} alt={name} />
                <h2>
                    {name}
                </h2>
            </Link>
            <p>
                {genre}
            </p>
        </div>
    )
}

export default Card;