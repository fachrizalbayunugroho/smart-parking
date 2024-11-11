import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { database } from './firebase';
import { ref, onValue } from "firebase/database";

function Dashboard() {
  const [number, setNumber] = useState(0);
  const [data, setData] = useState({});

  useEffect(() => {
    const dbRef = ref(database, "/parking"); 

    const variable = onValue(dbRef, (snapshot) => {
      const fetchedData = snapshot.val();
      setData(fetchedData);

      const vehicles = fetchedData.vehiclesEntered;
      setNumber(vehicles);
    });

  }, []);

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
    </div>
    </div>
  );
}

export default Dashboard;
