'use strict';

const colors = require('ansi-colors');

colors.alias('primary', colors.yellow);
colors.alias('secondary', colors.bold);
/*
 * USAGE:
 * console.log(colors.primary.secondary('Foo'));
*/


colors.theme({
	danger: colors.bold.redBright,
	dark: colors.dim.gray,
	disabled: colors.gray,
	em: colors.italic,
	heading: colors.bold.underline,
	info: colors.cyanBright,
	muted: colors.dim,
	primary: colors.blue,
	strong: colors.bold,
	success: colors.bold.greenBright,
	underline: colors.underline,
	warning: colors.bold.yellowBright
});
/*
 * USAGE:
 * console.log(colors.danger.strong.em('Error!'));
 * console.log(colors.warning('Heads up!'));
 * console.log(colors.info('Did you know...'));
 * console.log(colors.success.bold('It worked!'));
 */




module.exports = {

	colorize: (textString, styleTheme) => {
		colors.theme({
			mainTitle: colors.bold.bgBlackBright.whiteBright.italic,
			danger: colors.bold.redBright,
			dark: colors.dim.gray,
			disabled: colors.gray,
			em: colors.italic,
			heading: colors.bold.underline,
			info: colors.cyanBright,
			muted: colors.dim,
			primary: colors.bold.bgBlack.blueBright,
			dimPrimary: colors.dim.blue,
			strong: colors.bold,
			success: colors.bgBlack.bold.greenBright,
			underline: colors.underline,
			warning: colors.bold.yellowBright,
			label: colors.bold.yellowBright,
			dimLabel: colors.bold.dim.yellow
		});
		switch (styleTheme) {
			case "mainTitle":
				return colors.mainTitle(textString);
				break;
			case "info":
				return colors.info(textString);
				break;
			case "dimLabel":
				return colors.dimLabel(textString);
				break;
			case "label":
				return colors.warning(textString);
				break;
			case "dimPrimary":
				return colors.dimPrimary(textString);
				break;
			case "primary":
				return colors.primary(textString);
				break;
			case "strong":
				return colors.strong(textString);
				break;
			case "success":
				return colors.success(textString);
			default:
				break;
		}
	}
};
