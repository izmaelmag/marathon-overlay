const WS = require("ws");
const runners = require("./dataSample.json");

// Create new WebSocket server at http://localhost:8787
const server = new WS.Server({ port: 8787 });

// SOcket connection instances
const sockets = [];

// Handle socket connection
server.on("connection", (socket) => {
  sockets.push(socket);

  // When a socket client closes, or disconnects, remove it from the array.
  socket.on("close", function () {
    sockets = sockets.filter((s) => s !== socket);
  });

  // Fake runners
  setInterval(() => {
    // Randomly update runners data and serialize it into JSON string
    const DATA = JSON.stringify(
      runners.map((runner) => {
        const increment = Math.random();

        return {
          ...runner,
          currentDistance: (runner.currentDistance += increment),
        };
      })
    );

    // Send serialized data to the connected sockets
    sockets.map((socket) => socket.send(DATA));
  }, 1000);
});
