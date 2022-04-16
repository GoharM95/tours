import React, { useState } from "react";
import "./Tour.css";

const Tour = ({ tour, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  const { id, name, price, info, image } = tour;
  return (
    <div>
      <img src={image} alt={name} />;<h3>{name}</h3>
      <p>${price}</p>
      <p>
        {readMore ? info : info.substring(0, 200)}
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? "show less" : "read more"}
        </button>
      </p>
      <button onClick={() => removeTour(id)}>not interested</button>
    </div>
  );
};

// class Tour extends React.Component {
//   state = { readMore: false };

//   render() {
//     const { tour, removeTour } = this.props;
//     const { id, name, price, info, image } = tour;
//     const { readMore } = this.state;
//     return (
//       <div>
//         <img src={image} alt={name} />;<h3>{name}</h3>
//         <p>${price}</p>
//         <p>
//           {readMore ? info : info.substring(0, 200)}
//           <button onClick={() => this.setState({ readMore: !readMore })}>
//             {readMore ? "show less" : "read more"}
//           </button>
//         </p>
//         <button onClick={() => removeTour(id)}>not interested</button>
//       </div>
//     );
//   }
// }

export default Tour;
