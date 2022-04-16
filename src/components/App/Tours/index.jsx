import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <div>
      <h2>our tours</h2>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} tour={tour} removeTour={removeTour} />;
        })}
      </div>
    </div>
  );
};

// class Tours extends React.Component {
//   render() {
//     const { tours, removeTour } = this.props;
//     return (
//       <div>
//         <h2>our tours</h2>
//         <div>
//           {tours.map((tour) => {
//             return <Tour key={tour.id} tour={tour} removeTour={removeTour} />;
//           })}
//         </div>
//       </div>
//     );
//   }
// }

export default Tours;
