'use strict';

const getPublicAddressAndPort = require('./lib/ip/get-public-address-and-port');
const coloration = require('./lib/utils/coloration');
// const shellCommands = require('./lib/utils/shell-commands');



module.exports = (input, {postfix = 'rainbows'} = {}) => {
	if (typeof input !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof input}`);
	}



	const addressAndPort = getPublicAddressAndPort();

/*	const qrLogoContent = `
╔════╗       ╔════╗
║ ██ ║       ║ ██ ║
╚════╝       ╚════╝
 QR Encoded        
 Public IP Address 
╔════╗             
║ ██ ║             
╚════╝             `;*/
	const qrLogoContent = `
 ╔════╗   Terminal          
 ║ ██ ║   QR Encoded        
 ╚════╝   Public IP Address `;

	const mainTitle = `${coloration.colorize('  ⌘ Public IP Address and Port To QR Code   ', "mainTitle")}`;
	const themedText = `${coloration.colorize(qrLogoContent, "success")}
          ${coloration.colorize('LOCAL ADDRESS:', "dimLabel")}  \t ${coloration.colorize('http://localhost:9000', "dimPrimary")}
          ${coloration.colorize('PUBLIC ADDRESS:', "label")} \t ${coloration.colorize(addressAndPort, "primary")}`;
	return {
		themedText: themedText,
		qrcodeImageData: addressAndPort
	};
};
