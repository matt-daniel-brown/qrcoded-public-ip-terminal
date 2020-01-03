'use strict';


const getPublicIp = require('./get-public-ip');
const getPublicPort = require('./get-public-port');

let currentPort = getPublicPort().defaultPort;
const addr = getPublicIp();
const addressAndPort = `${addr}:${currentPort}`;

module.exports = () => {
	return addressAndPort;
};
