#!/usr/bin/env node
'use strict';
const meow = require('meow');
const qrcodedPublicIpTerminal = require('.');
const drawQrcode = require('./lib/qrcode/draw-qrcode');

const cli = meow(`
	Usage
	  $ qrcoded-public-ip-terminal [PORT]

	Options
	  --port  Port [Default: 9000]

	Examples
	  $ qrcoded-public-ip-terminal
	  	# ...  PUBLIC ADDRESS: 	 192.168.86.28:9000
	  	# ...  { QR Code Encoded Public IP Address }

	  $ qrcoded-public-ip-terminal 3000
	  	# ...  PUBLIC ADDRESS: 	 192.168.86.28:3000
	  	# ...  { QR Code Encoded Public IP Address }
`);
const clearConsole = require('clear-any-console');
clearConsole();
let mainObjects = qrcodedPublicIpTerminal(cli.input[0] || '9000');
// console.log(qrcodedPublicIpTerminal(cli.input[0] || '9000'));
let argOne = cli.input[0];
let argTwo = cli.input[1];
console.log(mainObjects.themedText);
// console.log();
drawQrcode.createQr(mainObjects.qrcodeImageData);
