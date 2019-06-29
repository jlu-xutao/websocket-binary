const ws = new WebSocket('ws://127.0.0.1:8080');
ws.binaryType = 'arraybuffer';
// ws.on('open', function open() {
//   ws.send('something');
// });

// ws.on('message', function incoming(data) {
//   console.log(data);
// });

ws.onopen = function (evt) {
    // Web Socket 已连接上，使用 send() 方法发送数据
    console.log("onopen");
    // ws.send("hi, server");
}

ws.onmessage = function (evt) {
    var data = evt.data;
    // var uint8array = new Uint8Array(arraybuffer);
    console.log("onmessage...", data);
};

ws.onclose = function (evt) {
    // 关闭 websocket
    console.log("onclose...", evt);
};

ws.onerror = function (evt) {
    console.log("onerror...", evt);
}
/**
 * 按照特定的编码格式对字符进行编码，默认utf-8
 * @param {string} str 
 * @param {string} type 
 * @returns {ArrayBuffer} bytes
 */
function stringToBinaryByType(str) {
    var encoder = new TextEncoder();
    var bytes = encoder.encode(str);
    return bytes;
}
/**
 * 按照特定的编码格式对二进制进行解码，默认utf-8
 * @param {ArrayBuffer} bytes 
 * @param {string} type 
 * @returns {string} str 
 */
 function binaryToStringByType(bytes, type = 'utf-8'){
    var decoder = new TextDecoder(type);
    var str = decoder.decode(bytes);
    return str;
 }