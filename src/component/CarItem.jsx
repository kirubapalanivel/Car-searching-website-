// CarItem.js
import React from "react";

const CarItem = ({ car }) => {
  return (
    <div className="card w-80 bg-base-100 shadow-xl m-4">
      <figure>
        <img src={car.imageUrl} alt={`${car.make} ${car.model}`} className="object-cover h-48 w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{`${car.make} ${car.model} (${car.year})`}</h2>
        <p className="text-lg font-bold">{car.price}</p>
        <p><strong>Mileage:</strong> {car.mileage}</p>
      </div>
    </div>
  );
};

export default CarItem;
