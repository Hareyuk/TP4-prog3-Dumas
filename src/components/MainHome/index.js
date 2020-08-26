import React, {useState, useEffect} from 'react';
import Card from '../Card';
import axios from 'axios';

const MainHome = ()=>
{
    //Para guardar toda la ifnormacion de la interfaz y hcaer funciones para setear la info
    const [artists, setArtists] = useState([]);
    //Si esta vacio el array, el efecto se ejecutara cuando se levante el componente una sola vez
    useEffect(() => {
        const fetchData = async ()=>
        {
            console.log('se ejecuto el efecto una vez');
            try
            {
                const response = await axios.get('https://artists-api.vercel.app/artists');
                console.log(response.data);
                const data = response.data;
                setArtists(data);
            }
            catch(error)
            {
                console.error(error);
            }
        }

       fetchData();
    }, []);
    //donde los corchetes es donde iria como actualizarusuarios pero casi no se hace nunca


    return(
        <div className="main">
        <h1>Lista de artistas</h1>
            {artists.map(artist => <Card key={artist._id} data={artist}/>)}
        </div>
    )
}

export default MainHome;

//contador = 5 ESTA MAL
//setContador(5) is fine uwu