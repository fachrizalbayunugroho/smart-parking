import React, { useState } from 'react';
import Navbar from './Navbar';

function Dashboard() {
  const [number, setNumber] = useState(0);

  const handleClick = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  return (
  	<div>
  	<Navbar />
  	<h1 className="main my-5">Tabel Jumlah Kendaraan Parkir</h1>
<table className="table table-bordered table-striped text-center" style={{ width: "523px", margin: "auto" }}>
  <thead>
    <tr>
      <th scope="col">Tanggal</th>
      <th scope="col">Jumlah Parkir</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>01-01-2024</td>
      <td>60</td>
    </tr>
    <tr>
      <td>02-01-2024</td>
      <td>70</td>
    </tr>
    <tr>
      <td>03-01-2024</td>
      <td>50</td>
    </tr>
    <tr>
      <td>04-01-2024</td>
      <td>40</td>
    </tr>
    <tr>
      <td>05-01-2024</td>
      <td>20</td>
    </tr>
  </tbody>
</table>
    <div className="text-center mt-5">
      Jumlah Parkir (bertambah setiap kendaraan masuk) : <span>{number}</span>
      <button
        onClick={handleClick}
        style={{ display: 'none' }}
      >
        Increment
      </button>
    </div>
    </div>
  );
}

export default Dashboard;
