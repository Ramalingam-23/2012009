const mockTrains = [
  {
    trainName: "Aizawl Exp",
    trainNumber: "2342",
    departureTime: {
      Hours: 8,
      Minutes: 30,
      Seconds: 0
    },
    seatsAvailable: {
      sleeper: 18,
      ac: 7
    },
    price: {
      sleeper: 2692,
      ac: 3323
    },
    delayedBy: 2
  },
  {
    trainName: "Mysore Exp",
    trainNumber: "2347",
    departureTime: {
      Hours: 13,
      Minutes: 32,
      Seconds: 0
    },
    seatsAvailable: {
      sleeper: 2,
      ac: 2
    },
    price: {
      sleeper: 2360,
      ac: 2493
    },
    delayedBy: 8
  },
  {
    trainName: "Patna Exp",
    trainNumber: "2340",
    departureTime: {
      Hours: 6,
      Minutes: 10,
      Seconds: 0
    },
    seatsAvailable: {
      sleeper: 10,
      ac: 1
    },
    price: {
      sleeper: 1792,
      ac: 2273
    },
    delayedBy: 0
  },
  {
    trainName: "Gandhinagar Exp",
    trainNumber: "2341",
    departureTime: {
      Hours: 7,
      Minutes: 15,
      Seconds: 0
    },
    seatsAvailable: {
      sleeper: 15,
      ac: 5
    },
    price: {
      sleeper: 7,
      ac: 15
    },
    delayedBy: 1
  },
  {
    trainName: "Delhi Exp",
    trainNumber: "2343",
    departureTime: {
      Hours: 9,
      Minutes: 45,
      Seconds: 0
    },
    seatsAvailable: {
      sleeper: 32,
      ac: 1
    },
    price: {
      sleeper: 1,
      ac: 3
    },
    delayedBy: 3
  },
  {
    trainName: "Panjim Exp",
    trainNumber: "2349",
    departureTime: {
      Hours: 13,
      Minutes: 32,
      Seconds: 0
    },
    seatsAvailable: {
      sleeper: 2,
      ac: 1
    },
    price: {
      sleeper: 1,
      ac: 2
    },
    delayedBy: 9
  },
  {
    trainName: "Kolkata Exp",
    trainNumber: "2345",
    departureTime: {
      Hours: 20,
      Minutes: 15,
      Seconds: 0
    },
    seatsAvailable: {
      sleeper: 16,
      ac: 70
    },
    price: {
      sleeper: 2150,
      ac: 2250
    },
    delayedBy: 14
  },
  {
    trainName: "Pune Exp",
    trainNumber: "2342",
    departureTime: {
      Hours: 23,
      Minutes: 0,
      Seconds: 0
    },
    seatsAvailable: {
      sleeper: 6,
      ac: 7
    },
    price: {
      sleeper: 14,
      ac: 9
    },
    delayedBy: 17
  },
  {
    trainName: "Hyderabad Exp",
    trainNumber: "2341",
    departureTime: {
      Hours: 23,
      Minutes: 55,
      Seconds: 0
    },
    seatsAvailable: {
      sleeper: 6,
      ac: 7
    },
    price: {
      sleeper: 554,
      ac: 1854
    },
    delayedBy: 5
  },
  {
    trainName: "Sikkim Exp",
    trainNumber: "2345",
    departureTime: {
      Hours: 11,
      Minutes: 23,
      Seconds: 0
    },
    seatsAvailable: {
      sleeper: 4,
      ac: 4
    },
    price: {
      sleeper: 6,
      ac: 2
    },
    delayedBy: 5
  },
  {
    trainName: "Bokaro Exp",
    trainNumber: "2347",
    departureTime: {
      Hours: 13,
      Minutes: 32,
      Seconds: 0
    },
    seatsAvailable: {
      sleeper: 55,
      ac: 0
    },
    price: {
      sleeper: 13,
      ac: 8
    },
    delayedBy: 7
  },
  {
    trainName: "Amritsar Exp",
    trainNumber: "2346",
    departureTime: {
      Hours: 19,
      Minutes: 0,
      Seconds: 0
    },
    seatsAvailable: {
      sleeper: 15,
      ac: 10
    },
    price: {
      sleeper: 15,
      ac: 5
    },
    delayedBy: 13
  },
  {
    trainName: "Mumbai Exp",
    trainNumber: "2343",
    departureTime: {
      Hours: 22,
      Minutes: 37,
      Seconds: 0
    },
    seatsAvailable: {
      sleeper: 8,
      ac: 15
    },
    price: {
      sleeper: 2220,
      ac: 2320
    },
    delayedBy: 16
  },
  {
    trainName: "Jodhpur Exp",
    trainNumber: "2344",
    departureTime: {
      Hours: 11,
      Minutes: 0,
      Seconds: 0
    },
    seatsAvailable: {
      sleeper: 33,
      ac: 13
    },
    price: {
      sleeper: 2273,
      ac: 2384
    },
    delayedBy: 4
  },
  {
    trainName: "Cuttack Exp",
    trainNumber: "2346",
    departureTime: {
      Hours: 12,
      Minutes: 3,
      Seconds: 0
    },
    seatsAvailable: {
      sleeper: 10,
      ac: 1
    },
    price: {
      sleeper: 1752,
      ac: 2223
    },
    delayedBy: 6
  },
  {
    trainName: "Srinagar Exp",
    trainNumber: "2349",
    departureTime: {
      Hours: 14,
      Minutes: 55,
      Seconds: 0
    },
    seatsAvailable: {
      sleeper: 1,
      ac: 0
    },
    price: {
      sleeper: 2647,
      ac: 2734
    },
    delayedBy: 10
  },
  {
    trainName: "Cochin Exp",
    trainNumber: "2348",
    departureTime: {
      Hours: 15,
      Minutes: 55,
      Seconds: 0
    },
    seatsAvailable: {
      sleeper: 1,
      ac: 0
    },
    price: {
      sleeper: 2,
      ac: 4
    },
    delayedBy: 11
  },
  {
    trainName: "Lucknow Exp",
    trainNumber: "2347",
    departureTime: {
      Hours: 17,
      Minutes: 33,
      Seconds: 0
    },
    seatsAvailable: {
      sleeper: 5,
      ac: 1
    },
    price: {
      sleeper: 1502,
      ac: 1933
    },
    delayedBy: 12
  },
  {
    trainName: "Chennai Exp",
    trainNumber: "2344",
    departureTime: {
      Hours: 21,
      Minutes: 35,
      Seconds: 0
    },
    seatsAvailable: {
      sleeper: 3,
      ac: 1
    },
    price: {
      sleeper: 2,
      ac: 5
    },
    delayedBy: 15,
  },
];

export default mockTrains;