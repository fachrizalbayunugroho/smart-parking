import React, { useState, useEffect } from "react";
import { get, ref, onValue } from "firebase/database";
import Navbar from "./Navbar";
import { database } from "./firebase";

function Main() {
  const [testData, setTestData] = useState(null);
  const [availableCount, setAvailableCount] = useState(0);
  const [closestSlot, setClosestSlot] = useState(null);
  const [data, setData] = useState({});

  useEffect(() => {
    const readTestData = async () => {
      try {
        const snapshot = await get(ref(database, "parking"));
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

      const availableSlots = fetchedData.freeSlots;
      setAvailableCount(availableSlots);
    });

    return () => unsubscribe();
  }, []);

const slots = Object.entries(data).filter(([key]) => key.startsWith("slot"));
    useEffect(() => {
    // Greedy Algorithm

    function findClosestAvailableSlot(slots) {
      for (let i = 0; i < slots.length; i++) {
        const [slot, details] = slots[i];
        if (!details.occupied) {
          return `Slot ${i + 1}`;
        }
      }
      return "No available slots";
    }

    const closest = findClosestAvailableSlot(slots);
    setClosestSlot(closest);
  }, [data]); 

  return (
    <div>
      <Navbar />
      <div className="main">
        <p className="pos"><b>You are here</b></p>
        <div className="parking-lot">
          <h1>PARKING LOT</h1>
          <div className="slots">
            {slots.map(([slot, details]) => (
              <div key={slot} id={slot} className={`slot ${details.occupied ? "occupied" : "available"}`}>
                {slot}<br />
                {details.occupied ? "Occupied" : "Available"}
              </div>
            ))}
          </div>
          <div className="available-slots">
            Slot tersedia: {availableCount} <br />
            Slot terdekat: {closestSlot}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;