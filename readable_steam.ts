import * as fs from 'fs';

const file_stream = fs.createReadStream('./etc/small.txt');

file_stream.on('data', (data) => {
    console.log('data', data)
})

setTimeout(() => {
    file_stream.resume();
}, 2000);
////////////

import { Readable } from 'stream';

const pure_stream = new Readable({
    read(size) {
        console.log('size', size)
    }
}); 

pure_stream.on('readable', () => {
    console.log('readable')
    pure_stream.push('Hello');
    pure_stream.push('World!');
    pure_stream.push(null);
    pure_stream.on('data', (chunk) => {
        console.log('chunk', chunk.toString());
    });
}) 