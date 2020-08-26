import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams, Link} from 'react-router-dom';
import './index.css';

const MainArtist = ()=>
{
    
    const { id } = useParams();
    //Para guardar toda la ifnormacion de la interfaz y hcaer funciones para setear la info
    const [artist, setArtist] = useState([])
    //Si esta vacio el array, el efecto se ejecutara cuando se levante el componente una sola vez
     useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://artists-api.vercel.app/artists');
                const data = response.data
                const artistFiltered = data.find(artist => artist._id === id)
                setArtist(artistFiltered)
            } catch (error) {
                console.error('este es mi error',error);
            }
        }
        fetchData()
    }, []);
    //donde los corchetes es donde iria como actualizarusuarios pero casi no se hace nunca


    return (
        <div className="main">
            <h1>Listado de artistas</h1>
            <h2>{artist.name}</h2>
            <img src={artist.avatar} alt={artist.name} />
            <p>{artist.genre}</p>
            <Link to="/">Volver</Link>
        </div>
    );
}

export default MainArtist;

//contador = 5 ESTA MAL
//setContador(5) is fine uwu