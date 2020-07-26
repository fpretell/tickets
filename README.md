# Frontend React for Tickets

**Description:** Frontend React for Tickets

## Enviroment

    SO: Linux (Ubuntu) recommended
    NodeJs: v10.21.0
    Npm: 6.14.4

## Installation

Clone project 
```bash
git clone https://github.com/fpretell/tickets.git
```

Then, inside the project
```bash
npm install
```

Edit your url for backend socket in src/server.js (line: 20)
```bash
const socket = io('http://your-ip:3011')
```

To start frontend
```bash
npm start
```

To start backend (socket)
```bash
node server
```
