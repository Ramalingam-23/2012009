import React from "react";

function TrainTable({ trains }) {
  const now = new Date(); // Current time

  // Filter out trains departing in the next 30 minutes
  const filteredTrains = trains.filter((train) => {
    const departureTime = new Date(now);
    departureTime.setHours(train.departureTime.hours, train.departureTime.minutes, train.departureTime.seconds);

    const timeDifference = departureTime - now;
    const minutesUntilDeparture = Math.floor(timeDifference / (1000 * 60));

    return minutesUntilDeparture > 30;
  });

  // Sort trains by price in ascending order
  const sortedTrains = filteredTrains.slice().sort((a, b) => a.price.sleeper - b.price.sleeper);
  console.log(filteredTrains)
  return (
    <table className="table" >
      <thead>
        <tr >
          <th style={{backgroundColor:"black", color:"aqua"}}>Train Name</th>
          <th style={{backgroundColor:"black", color:"aqua"}}>Train Number</th>
          <th style={{backgroundColor:"black", color:"aqua"}}>Departure Time</th>
          <th style={{backgroundColor:"black", color:"aqua"}}>Seats Available</th>
          <th style={{backgroundColor:"black", color:"aqua"}}>Price (Sleeper/AC)</th>
          <th style={{backgroundColor:"black", color:"aqua"}}>Delayed By (minutes)</th>
        </tr>
      </thead>
      <tbody>
      
        {trains.map((train) => (
          <tr key={train.trainNumber} >
            <td style={{backgroundColor:"black", color:"aqua"}}>{train.trainName}</td>
            <td style={{backgroundColor:"black", color:"aqua"}}>{train.trainNumber}</td>
            <td style={{backgroundColor:"black", color:"aqua"}}>
              {train.departureTime.Hours}:{train.departureTime.Minutes}
            </td>
            <td style={{backgroundColor:"black", color:"aqua"}}>Sleeper: {train.seatsAvailable.sleeper}, AC: {train.seatsAvailable.AC}</td>
            <td style={{backgroundColor:"black", color:"aqua"}}>Sleeper: {train.price.sleeper}, AC: {train.price.ac}</td>
            <td style={{backgroundColor:"black", color:"aqua"}}>{train.delayedBy}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TrainTable;
