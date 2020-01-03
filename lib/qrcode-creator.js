'use strict';

const qrcode = require('qrcode-terminal');
const createQR = (qrcodeData) => {
	return qrcode.generate(qrcodeData, {small: true});
};
module.exports = {
	createQr: createQR
};
