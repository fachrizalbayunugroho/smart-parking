import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { database } from './firebase';
import { ref, get, onValue } from "firebase/database";

function Main() {
  const [testData, setTestData] = useState(null);
  const [availableCount, setAvailableCount] = useState(0);
  const [data, setData] = useState({});

  useEffect(() => {
    // Read operation
    const readTestData = async () => {
      try {
        const snapshot = await get(ref(database, 'parking'));
        if (snapshot.exists()) {
          setTestData(snapshot.val());
          console.log("Read successful", snapshot.val());
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error reading from database", error);
      }
    };

  readTestData();
  }, []);


  useEffect(() => {
    const dbRef = ref(database, "/parking"); 

    const unsubscribe = onValue(dbRef, (snapshot) => {
      const fetchedData = snapshot.val();
      setData(fetchedData);

      // Calculate available slots
      const availableSlots = fetchedData.freeSlots;
      setAvailableCount(availableSlots);
    });

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
