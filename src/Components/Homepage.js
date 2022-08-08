import React from "react";
import Dataimgs from "../Galleryimg.json";

let items = [];

// you can looping json file this way
for (let x = 0; x < Dataimgs.length; x++) {
    console.log(Dataimgs[x].image); // this will print all images data in json file [its optional]
    items.push(
        <img
            src={require("../imgs/businesscard/" + Dataimgs[x].image)} // for multiple images show this way
            key={Dataimgs[x].id}
            alt="img"
            className="img-fluid h-50 img-thumbnail m-2 "
        />
    );
    // items.push(<img src={require('../imgs/businesscard/img1.jpg')} alt="img" className='img-fluid h-50 img-thumbnail m-2 ' />)  // for only one image show this way
}

// OR you can looping json file this way
// for (let x in Dataimgs) {
//   console.log(Dataimgs[x].image); // this will print all images data in json file [its optional]
//   items.push(
//     <img
//       src={require("../imgs/businesscard/" + Dataimgs[x].image)} // for multiple images show this way
//       key={Dataimgs[x].id}
//       alt="img"
//       className="img-fluid h-50 img-thumbnail m-2 "
//     />
//   ); 

// //   items.push(
// //     <img
// //       src={require("../imgs/businesscard/img1.jpg")}  // for only one image show this way
// //       alt="img"
// //       className="img-fluid h-50 img-thumbnail m-2 "
// //     />
// //   );
// }

function Homepage() {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h3>Images</h3>
          </div>
          <div className="card-body">{items}</div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
