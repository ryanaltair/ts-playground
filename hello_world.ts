function testA() {
  const buffers = [
    Buffer.from("Hello "),
    Buffer.from([0b11110000, 0b10011111]),
    Buffer.from([0b10001100, 0b10001110]),
    Buffer.from(" world!")
  ];
  let result = "";
  buffers.forEach(buffer => {
    result += buffer.toString();
  });
  console.log(result); // Hello ��� world!
}


import { StringDecoder } from 'string_decoder';

function testB() {
  const decoder = new StringDecoder('utf8');

  const buffers = [
    Buffer.from('Hello '),
    Buffer.from([0b11110000, 0b10011111]),
    Buffer.from([0b10001100, 0b10001110]),
    Buffer.from(' world!'),
  ];

  const result = buffers.reduce((result, buffer) => (
    `${result}${decoder.write(buffer)}`
  ), '');

  console.log(result); // Hello 🌎 world!
}
console.log("testA")
testA()

console.log("testB")
testB()