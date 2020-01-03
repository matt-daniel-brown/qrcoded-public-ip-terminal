'use strict';

const qrcode = require('qrcode-terminal');
// const encodedQr = (qrcodeData) => {
// 	qrcode.generate(qrcodeData, {small: true}, function (qrcode) { console.log(qrcode);})
// };
const createQR = (qrcodeData) => {
	return qrcode.generate(qrcodeData, {small: true});

};
module.exports = {
	// drawQRCode: encodedQr,
	createQr: createQR
};
