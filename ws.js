const { WebSocketServer } = require("ws");
const WebSocket = require("ws");
const PORT = process.env.PORT || 8080;
// Create WS Server
const wss = new WebSocketServer({ port: PORT });

// Handle connection event
wss.on('connection', function connection(ws) {
  // Handle message event
  ws.on('message', function message(data, isBinary) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });
});