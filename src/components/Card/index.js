import React from 'react';
import {Link} from "react-router-dom";
import './index.css';

const Card =(props)=>
{
    const {avatar, genre, name, _id} = props.data;
    return(
        <div className="card">
            <Link to={`/artist/${_id}`} className="ciclable">
                <img src="img/hover.gif" alt="hover brillo" class="animHover"/>
                <img src={avatar} alt={name} className="imgArtist" />
                <h2>
                    {name}
                </h2>
            </Link>
            <div className="text-box">
                <p>
                    {genre}
                </p>
            </div>
        </div>
    )
}

export default Card;