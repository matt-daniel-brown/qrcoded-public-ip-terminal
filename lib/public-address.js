'use strict';

const address = require('address');

const publicAddress = address.ip();
const defaultPort 		= 9000;
const defaultPortOne 	= 9001;
const altPort 			= 3000;
const altPortOne 		= 3001;
const altPort2			= 8888;

const ports = {
	defaultPort		: defaultPort,
	defaultPortOne	: defaultPortOne,
	altPort			: altPort,
	altPortOne		: altPortOne,
	altPort2		: altPort2
};



module.exports = (input) => {
	const currentPort = input || ports.defaultPort;
	return `${publicAddress}:${currentPort}`;
};
