import {Buffer} from 'node:buffer'

const header ={
    'typ':'JWT',
    'alg':'HS256'
}

console.log(Buffer.from(JSON.stringify(header)).toString('base64'))