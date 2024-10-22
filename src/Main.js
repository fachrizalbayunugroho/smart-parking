import React, { useState, useEffect } from "react";
import Navbar from './Navbar';

function Main() {
  const [availableCount, setAvailableCount] = useState(0);

  useEffect(() => {
    const slots = document.querySelectorAll('.slot');
    const availableSlots = Array.from(slots).filter(slot => slot.classList.contains('available'));
    setAvailableCount(availableSlots.length);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="parking-lot">
          <h1>PARKING LOT</h1>
          <div className="slots">
            <div className="slot occupied">Slot 1</div>
            <div className="slot occupied">Slot 2</div>
            <div className="slot available">Slot 3</div>
            <div className="slot available">Slot 4</div>
            <div className="slot occupied">Slot 5</div>
            <div className="slot occupied">Slot 6</div>
            <div className="slot available">Slot 7</div>
            <div className="slot available">Slot 8</div>
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