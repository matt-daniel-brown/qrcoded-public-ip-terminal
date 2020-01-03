'use strict';

const publicAddress = require('./lib/public-address');
const coloration = require('./lib/utils/coloration');





module.exports = (input, {postfix = 9000} = {}) => {
	if (typeof input !== 'number') {
		throw new TypeError(`Expected a string, got ${typeof input}`);
	}



	// const addressAndPort = getPublicAddressAndPort(input);
	const addressAndPort = publicAddress(input);
	const localHostAddress = `http://localhost:${input}`;

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
          ${coloration.colorize('LOCAL ADDRESS:', "dimLabel")}  \t ${coloration.colorize(localHostAddress, "dimPrimary")}
          ${coloration.colorize('PUBLIC ADDRESS:', "label")} \t ${coloration.colorize(addressAndPort, "primary")}`;
	return {
		themedText: themedText,
		qrcodeImageData: addressAndPort
	};
};
