import React from 'react'
import Dataimgs from '../Galleryimg.json';

let items=[];
for(let x=0;x < Dataimgs.length;x++){
    items.push(<img src={Dataimgs[x].image} alt="img" className='img-fluid h-50 img-thumbnail m-2 '/>)
}


function Homepage() {
  return (
        <>
        <div className='container'>
            <div className="card">
                <div className='card-header'>
                    <h3>Images</h3>
                </div>
                <div className="card-body">
                    {items}
                </div>

            </div>
        </div>
        </>
    )
}

export default Homepage