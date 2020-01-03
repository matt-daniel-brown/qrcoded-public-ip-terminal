'use strict';


const getPublicIp = require('./get-public-ip');
const getPublicPort = require('./get-public-port');



module.exports = (input) => {
	let currentPort = `'${input}'` || getPublicPort().defaultPort;
	const addr = getPublicIp();
	return `${addr}:${currentPort}`;
};
