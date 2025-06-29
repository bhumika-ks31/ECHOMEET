let IS_PROD = true;

const server = IS_PROD
  ? "https://echomeet-server.onrender.com" // <-- Replace with your deployed backend URL
  : "http://localhost:8000";

export default server;
