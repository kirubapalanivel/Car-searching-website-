import React, { useState } from "react";
import { carsData } from "./CarsData"; // Import car data
import CarItem from "./CarItem"; // Import CarItem component

const CarList = () => {
  const [search, setSearch] = useState("");

  // Filter cars based on search input
  const filteredCars = carsData.filter(car =>
    car.make.toLowerCase().includes(search.toLowerCase()) ||
    car.model.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center py-8"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514048140268-d7a1c1a1d5b5?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }} // Add your background image URL here
    >
      <h1 className="text-4xl font-bold mb-6 text-white">Search Your Cars</h1>

      <div className="w-full max-w-lg">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a car..."
          className="input input-bordered w-full mb-4"
        />
      </div>

      <div className="flex flex-wrap justify-center">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <CarItem key={car.id} car={car} />
          ))
        ) : (
          <p className="text-gray-600">No cars found.</p>
        )}
      </div>
    </div>
  );
};

export default CarList;
