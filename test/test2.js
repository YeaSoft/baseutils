const test = require( 'node:test' );
const assert = require( 'node:assert' );

const { convertUtf8ToAscii } = require( '../dist/index.js' );

test( "Testing value transformation functions", async ( t ) => {
	await t.test( "Testing function convertUtf8ToAscii", () => {
		const src = 'Ein schöner String mit jede Menge Zeugs: äöüÄÖÜ$€€😎';
		const dst = 'Ein schoener String mit jede Menge Zeugs: aeoeueAEOEUE$____';

		assert.strictEqual( convertUtf8ToAscii( src ), dst );
		assert.strictEqual( convertUtf8ToAscii( dst ), dst );
		assert.notEqual( convertUtf8ToAscii( src ), src );
	} );
} );