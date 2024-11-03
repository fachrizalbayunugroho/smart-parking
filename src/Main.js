import React, { useState, useEffect } from "react";
import Navbar from './Navbar';
import { database } from "./firebase"; 

function Main() {
  const [availableCount, setAvailableCount] = useState(0);
  const [data, setData] = useState({});

  useEffect(() => {
    const dbRef = database.ref("/parking"); 

    dbRef.on("value", (snapshot) => {
      const fetchedData = snapshot.val();
      setData(fetchedData);

      const availableSlots = Object.values(fetchedData).filter(slot => !slot.occupied).length;
      setAvailableCount(availableSlots);
    });

    // Cleanup listener on component unmount
    return () => dbRef.off();
  }, []);

  const slots = Object.entries(data).filter(([key]) => key.startsWith('slot'));

  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="parking-lot">
          <h1>PARKING LOT</h1>
          <div className="slots">
            {slots.map(([slot, details]) => (
              <div key={slot} id={slot} className={`slot ${details.occupied ? 'occupied' : 'available'}`}>
                {slot}<br />
                {details.occupied ? "Occupied" : "Available"}
              </div>
            ))}
          </div>
          <div className="available-slots">
            Slot tersedia: <span id="available-count">{availableCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
