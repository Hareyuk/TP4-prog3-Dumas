const removeImg = (img)=>
{
    setTimeout(() => {
        ReactDOM.unmountComponentAtNode(img);
    }, 1000);
}