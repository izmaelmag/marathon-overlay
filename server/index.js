const WS = require("ws");
const runners = require("./dataSample.json");

// Create new WebSocket server at http://localhost:8787
const server = new WS.Server({ port: 8787 });

// Timer state
let seconds = 0;

// Donations count
let donates = 0;

// Donation goal constant
const donationGoal = 30000

// Handle socket connection
server.on("connection", (socket) => {
  // Fake runners
  setInterval(() => {
    // Set up response
    const response = {
      seconds,
      donationGoal,
      donates: Math.round(donates),
      runners: runners.map((runner) => {
        const increment = Math.random()/50;

        return {
          ...runner,
          currentDistance: (runner.currentDistance += increment),
        };
      }),
    };

    // Serialise response to JSON string
    const DATA = JSON.stringify(response);

    // Send serialized data to the connected sockets
    socket.send(DATA);

    // Increment time
    seconds++
  }, 1000);

  setInterval(() => {
    donates += 500 + Math.random() * 500
  }, 3000 + Math.random() * 5000)
});
