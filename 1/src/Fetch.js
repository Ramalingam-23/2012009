import React, { useEffect, useState } from "react";

function Fetch() {
  const [records, setRecords] = useState([]);
  
  useEffect(() => {
    fetch("http://20.244.56.144/numbers/primes", {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTE3MzEyOTAsImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiZGMzNzEyOGItZTA1NS00MmYyLTk0ZmUtYjg4ZDM0OTJhN2I5Iiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjIwMTIwMDkifQ.N_samtourTfkQ8T8QQQk3V-I-elRgGif2gNHM9YYhr4",
      },
    })
      .then((response) => response.json())
      .then((data) => setRecords(data))
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <div>
      <ul>
        {records.map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </ul>
    </div>
  );
}

export default Fetch;
