import React from 'react';
import Tour from './Tour';

const Tours = ({tours, removeTour}) => {
  return <section>
      <div className="tours-title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div className="tours-articles">
        {tours.map((tour) => {
          return <Tour key={tour.id}  {...tour} removeTour={removeTour} />
        })}
      </div>
  </section>;
};

export default Tours;
