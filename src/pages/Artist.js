import React from 'react';
import { useParams } from "react-router-dom";
import Layout from '../containers/Layout';
import MainArtist from '../components/MainArtist';

const Artist = () => 
{
    const { id} = useParams();

    //Hacer lo que se quiera con el id (useEffect y traer data) 
    return (
        <div className='App'>   
            <Layout>
                <MainArtist/>
            </Layout>
        </div>
    )
}

export default Artist;