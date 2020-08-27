import React, {useState, useEffect} from 'react';
import Card from '../Card';
import axios from 'axios';

const MainCategory = (props)=>
{
    const {catId} = props;
    console.log(`Estoy en una category, ${catId}`)
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
                const dataFiltered = data.filter(artist => artist.genre === catId);
                setArtists(dataFiltered);
            }
            catch(error)
            {
                console.error(error);
            }
        }
       fetchData();
    }, [catId]);
    //donde los corchetes es donde iria como actualizarusuarios pero casi no se hace nunca


    return(
        <div className="main">
        <h1>Artistas de {catId}</h1>
            {artists.map(artist => <Card key={artist._id} data={artist}/>)}
        </div>
    )
}

export default MainCategory;

//contador = 5 ESTA MAL
//setContador(5) is fine uwu