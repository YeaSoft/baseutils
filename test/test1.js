const test = require( 'node:test' );
const assert = require( 'node:assert' );

const { testNumber, testSHA2, testUUID, testEmail } = require( '../dist/index.js' );

test( "Testing value test functions", async ( t ) => {
	await t.test( "Testing function testNumber", () => {
		assert.strictEqual( testNumber( '123123123' ), true );
		assert.strictEqual( testNumber( '+123123123' ), false );
		assert.strictEqual( testNumber( 123 ), false );
		assert.strictEqual( testNumber( {} ), false );
		assert.strictEqual( testNumber( Date.now() ), false );
		assert.strictEqual( testNumber(), false );
	} );

	await t.test( "Testing function testSHA2", () => {
		assert.strictEqual( testSHA2( '03afde0ed4005bca0621c422a7980dd91f7176652b388141b3511fa1148d4cb4' ), true );
		assert.strictEqual( testSHA2( '+123123123' ), false );
		assert.strictEqual( testSHA2( 123 ), false );
		assert.strictEqual( testSHA2( {} ), false );
		assert.strictEqual( testSHA2( Date.now() ), false );
		assert.strictEqual( testSHA2(), false );
	} );

	await t.test( "Testing function testUUID", () => {
		assert.strictEqual( testUUID( '99DD9004-053C-4C1C-9D7E-AE60659DEB56' ), true );
		assert.strictEqual( testUUID( '+123123123' ), false );
		assert.strictEqual( testUUID( 123 ), false );
		assert.strictEqual( testUUID( {} ), false );
		assert.strictEqual( testUUID( Date.now() ), false );
		assert.strictEqual( testUUID(), false );
	} );

	await t.test( "Testing function testEmail", () => {
		assert.strictEqual( testEmail( 'NOBODY@no.net' ), true );
		assert.strictEqual( testEmail( '+123123123' ), false );
		assert.strictEqual( testEmail( 123 ), false );
		assert.strictEqual( testEmail( {} ), false );
		assert.strictEqual( testEmail( Date.now() ), false );
		assert.strictEqual( testEmail(), false );
	} );
} );