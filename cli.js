#!/usr/bin/env node
'use strict';
const meow = require('meow');
const qrcodedPublicIpTerminal = require('.');
// const drawQrcode = require('lib/qrcode/draw-qrcode.js');
const drawQrcode = require('./lib/qrcode-creator');

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
let argOne = cli.input[0];
let argTwo = cli.input[1];
let argOneAsNumber = Number(argOne);
let mainObjects = qrcodedPublicIpTerminal(argOneAsNumber || 9000);
// console.log(qrcodedPublicIpTerminal(cli.input[0] || '9000'));
console.log(mainObjects.themedText);
// console.log();
console.log("\n");
drawQrcode.createQr(mainObjects.qrcodeImageData);
console.log("\n");
