import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const GifHover =(div)=>
{
    
    const removeImg = (img)=>
    {
        setTimeout(() => {
            ReactDOM.unmountComponentAtNode(img);
        }, 1000);
    }
    return(
        <img src="img/hover.gif" alt="hover" className="hover" onLoad={()=>removeImg(this)}/>
    )
}

export default GifHover;