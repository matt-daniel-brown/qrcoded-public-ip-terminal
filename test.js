import test from 'ava';
import qrcodedPublicIpTerminal from '.';

test('title', t => {
	t.throws(() => {
		qrcodedPublicIpTerminal(123);
	}, {
		instanceOf: TypeError,
		message: 'Expected a string, got number'
	});

	t.is(qrcodedPublicIpTerminal('unicorns'), 'unicorns & rainbows');
});
