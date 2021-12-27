import {
  writable
} from 'svelte/store';

const messageStore = writable('');

// import {
// 	Employee
// } from "./esbundle.js";
//const Schema = windows.require("./employees_pb");
const socket = new WebSocket('ws://localhost:3000');
socket.binaryType = 'arraybuffer';

// Connection opened
socket.addEventListener('open', function (event) {
  console.log("It's open");
});

// function stringToUint(string) {
// 	var string = btoa(unescape(encodeURIComponent(string))),
// 		charList = string.split(''),
// 		uintArray = [];
// 	for (var i = 0; i < charList.length; i++) {
// 		uintArray.push(charList[i].charCodeAt(0));
// 	}
// 	return new Uint8Array(uintArray);
// }

// Listen for messages
socket.addEventListener('message', function (event) {
  //var tom = stringToUint(event.data)
  // const bufferRes = event.data.arrayBuffer();
  // const pbf = new Pbf(new Uint8Array(bufferRes));
  const arr = [10, 17, 8, 149, 1, 18, 7, 72, 117, 115, 115,
    101, 105, 110, 29, 0, 64, 122, 68, 10, 15, 8, 234, 7, 18, 5, 65, 104, 109, 101, 100, 29, 0,
    160, 12, 70, 10, 14, 8, 235, 7, 18, 4, 82, 105, 99, 107, 29, 0, 64, 156, 69
  ];
  //const bufferRes =  response.arrayBuffer();
  const pbf = new Pbf(new Uint8Array(arr));
  const obj = Employees.read(pbf);
  //  const pbf = new Uint8Array(arr);
  //  const obj = Employees.read(pbf);
  console.log(obj);
  // I transform such string to the typed array needed
  //buffer = Uint8Array.from(atob(msg), c => c.charCodeAt(0))

  // Initiate the Protobuf library by opening the .proto file
  //protobuf.load(path.join(__dirname,"/employees.proto", function(err, root) {

  //   // Retrieve the type of message I want to decode from the .proto file
  //   var MyMessage = root.lookupType("MyMessage");

  //   // Finally I can decode my message
  //   var message = MyMessage.decode(buffer);

  // message now contains an object with the properties specified in the .proto file
  //console.log(buffer)
  //});
  //console.log(tom);
  //	const employees2 = Employees.deserializeBinary(Array.from(tom))
  //const emp2 = Employee.decode(msg);
  //console.log(employees2.toString())
  //messageStore.set(employees2.toString());
});

const sendMessage = (message) => {
  if (socket.readyState <= 1) {
    socket.send(message);
  }
};

export default {
  subscribe: messageStore.subscribe,
  sendMessage,
};