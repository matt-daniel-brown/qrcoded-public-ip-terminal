'use strict';

const address = require('address');

const publicAddress = address.ip();

module.exports = () => {
	return publicAddress;
};
