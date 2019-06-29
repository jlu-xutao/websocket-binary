const WebSocket = require('ws');

const wss = new WebSocket.Server({
  port: 8080
});
const allUserObj = {};
wss.on('connection', function connection(ws) {
  // console.dir(ws);
  // var userID = parseInt(ws.upgradeReq.url.substr(1), 10);
  // console.log(userID);
  ws.on('message', (message) => {
    messageHandler(message, ws);
  });

  ws.send('hi, client');
});

wss.on('close', function (data) {
  console.log(data);
})

function messageHandler(data, ws) {
  console.log('received: ', data);
  try {
    data = JSON.parse(data);
    console.log('obj: ', obj);
  } catch (e) {

  } finally {
    if (data && data.nickname) {
      allUserObj[data.nickname] = {
        data,
        ws
      }
      console.log(allUserObj);
    } else {

    }
  }
  
}