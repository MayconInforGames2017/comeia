const express = require('express');

const server = express();

server.listen(3333, () => {
    console.log("Server online na porta 3333!");
});