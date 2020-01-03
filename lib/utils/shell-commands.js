'use strict';

module.exports = {
	clearConsole: () => {
		const { spawn } = require('child_process');
		const clearConsole = spawn('clear');

	}
};
