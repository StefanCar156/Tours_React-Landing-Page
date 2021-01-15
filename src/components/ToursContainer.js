import React, { useState, useEffect } from 'react'
import Tours from './Tours'
import { BiLoaderCircle } from "react-icons/bi"
const url = 'https://course-api.com/react-tours-project'

function ToursContainer() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async () => {
    setLoading(true);

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
      <section className="tours-container">
          <BiLoaderCircle className="loading-circle" />
      </section>
    )
  }
  if (tours.length === 0) {
    return <section className="tours-container">
      <div className="title">
        <h2 className="no-tours">no tours left</h2>
        <button className="btn refresh-tours-btn" onClick={() => fetchTours()}>Refresh</button>
      </div>
    </section>
  }
  return <section className="tours-container">
    <Tours tours={tours} removeTour={removeTour} />
  </section>
}

export default ToursContainer
