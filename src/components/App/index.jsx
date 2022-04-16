import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import "./App.css";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const removeTour = (id) => {
    const filteredList = tours.filter((tour) => tour.id !== id);
    setTours(filteredList);
  };

  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  if (!tours.length) {
    return (
      <div>
        <div>
          <h2>no tours left</h2>
          <button onClick={fetchTours}>refresh</button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
};

// class App extends React.Component {
//   state = { tours: [], loading: true };

//   removeTour = (id) => {
//     const filteredList = this.state.tours.filter((tour) => tour.id !== id);
//     this.setState({ tours: filteredList });
//   };

//   fetchTours = async () => {
//     // this.setState({loading: true});

//     try {
//       const response = await fetch(url);
//       const tours = await response.json();
//       this.setState({ loading: false });
//       this.setState({ tours: tours });
//     } catch (error) {
//       this.setState({ loading: false });
//       console.log(error);
//     }
//   };

//   componentDidMount() {
//     this.fetchTours();
//   }

//   render() {
//     const { tours, loading } = this.state;
//     if (loading) {
//       return (
//         <div>
//           <Loading />
//         </div>
//       );
//     }
//     if (!tours.length) {
//       return (
//         <div>
//           <div>
//             <h2>no tours left</h2>
//             <button onClick={this.fetchTours}>
//               refresh
//             </button>
//           </div>
//         </div>
//       );
//     }

//     return (
//       <div>
//         <Tours tours={tours} removeTour={this.removeTour} />
//       </div>
//     );
//   }
// }

export default App;
