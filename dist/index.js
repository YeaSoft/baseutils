// (c) 2017-2025 YeaSoft Intl - Leo Moll
//
// General utility functions

// activate strict mode
'use strict';

// load system modules
const fs = require( 'fs' );
const path = require( 'path' );
const { StringDecoder } = require( 'string_decoder' );

// internal constants
const reNUM = /^[0-9]+$/;
const reSHA2 = /^[0-9a-fA-F]{64}$/;
const reUUID = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
// see: https://www.w3.org/TR/html5/forms.html#valid-e-mail-address
const reEMAIL = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const utf8ToAsciiMapTable = {
	192: 'A', 193: 'A', 194: 'A', 195: 'A',
	196: 'AE', 197: 'AE', 198: 'AE',
	199: 'C',
	200: 'E', 201: 'E', 202: 'E', 203: 'E',
	204: 'I', 205: 'I', 206: 'I', 207: 'I',
	208: 'D', 209: 'N',
	210: 'O', 211: 'O', 212: 'O', 213: 'O',
	214: 'OE', 216: 'OE',
	217: 'U', 218: 'U', 219: 'U',
	220: 'UE',
	221: 'Y',
	223: 'ss',
	224: 'a', 225: 'a', 226: 'a', 227: 'a',
	228: 'ae', 229: 'ae', 230: 'ae',
	231: 'c',
	232: 'e', 233: 'e', 234: 'e', 235: 'e',
	236: 'i', 237: 'i', 238: 'i', 239: 'i',
	240: 'd', 241: 'n',
	242: 'o', 243: 'o', 244: 'o', 245: 'o',
	246: 'oe', 248: 'oe',
	249: 'u', 250: 'u', 251: 'u',
	252: 'ue',
	253: 'y', 255: 'y'
};

// exported entities
module.exports.testNumber = value => {
	return typeof value === 'string' && reNUM.test( value );
};

module.exports.testSHA2 = value => {
	return typeof value === 'string' && reSHA2.test( value );
};

module.exports.testUUID = value => {
	return typeof value === 'string' && reUUID.test( value );
};

module.exports.testEmail = value => {
	return typeof value === 'string' && reEMAIL.test( value );
};

module.exports.convertUtf8ToAscii = ( value, default_value ) => {
	const retval = value.split( '' ).map( c => {
		const code = c.charCodeAt( 0 );
		if ( code < 128 ) return c;
		if ( code in utf8ToAsciiMapTable ) return utf8ToAsciiMapTable[ code ];
		return '_';
	} ).join( '' );
	return retval ? retval : typeof default_value === 'string' && default_value.length > 0 ? value : '';
};

module.exports.base64DecodeLazy = ( encoded, default_value ) => {
	// decodes both true Base64 and Base64url - see https://tools.ietf.org/html/rfc4648#section-5
	try {
		const decoder = new StringDecoder( 'utf8' );
		encoded += '==='.slice( 0, [ 0, 3, 2, 1 ][ encoded.length % 4 ] );
		return decoder.write( Buffer.from( encoded.replace( /-/g, '+' ).replace( /_/g, '/' ), 'base64' ) );
	}
	// eslint-disable-next-line no-unused-vars
	catch ( error ) { /* TUNIX */ }
	return default_value;
};

module.exports.getJsonValue = ( value, default_value ) => {
	try {
		return JSON.parse( value );
	}
	// eslint-disable-next-line no-unused-vars
	catch ( error ) {
		return default_value;
	}
};

module.exports.getSpecifiedStr = ( value, default_value ) => {
	return typeof value === 'string' && value.length > 0 ? value : default_value;
};

module.exports.getValidArr = ( value, default_value ) => {
	return value instanceof Array ? value : default_value;
};

module.exports.getValidBool = ( value, default_value ) => {
	switch ( typeof value ) {
		case 'string':
			switch ( value.toLowerCase() ) {
				case 'on':
				case 'yes':
				case 'true':
					return true;
				case 'no':
				case 'off':
				case 'false':
					return false;
			}
			break;
		case 'number':
			return value != 0;
		case 'boolean':
			return value;
	}
	return default_value;
};

module.exports.getValidInt = ( value, default_value ) => {
	const retval = parseInt( value );
	return isNaN( retval ) ? default_value : retval;
};

module.exports.getValidIntRange = ( value, min, max, default_value ) => {
	const minval = parseInt( min );
	const maxval = parseInt( max );
	const retval = parseInt( value );
	if ( isNaN( retval ) ) {
		return default_value;
	}
	else if ( !isNaN( minval ) && retval < minval ) {
		return default_value;
	}
	else if ( !isNaN( maxval ) && retval > maxval ) {
		return default_value;
	}
	return retval;
};

module.exports.getValidNum = ( value, default_value ) => {
	const retval = parseFloat( value );
	return isNaN( retval ) ? default_value : retval;
};

module.exports.getValidNumRange = ( value, min, max, default_value ) => {
	const minval = parseFloat( min );
	const maxval = parseFloat( max );
	const retval = parseFloat( value );
	if ( isNaN( retval ) ) {
		return default_value;
	}
	else if ( !isNaN( minval ) && retval < minval ) {
		return default_value;
	}
	else if ( !isNaN( maxval ) && retval > maxval ) {
		return default_value;
	}
	return retval;
};

module.exports.getValidObj = ( value, default_value ) => {
	return value instanceof Object ? value : default_value;
};

module.exports.getValidStr = ( value, default_value ) => {
	return typeof value === 'string' ? value : default_value;
};

module.exports.getValidStrRange = ( value, min, max, default_value ) => {
	const minval = parseInt( min );
	const maxval = parseInt( max );
	if ( typeof value != 'string' ) {
		return default_value;
	}
	else if ( !isNaN( minval ) && value.length < minval ) {
		return default_value;
	}
	else if ( !isNaN( maxval ) && value.length > maxval ) {
		return default_value;
	}
	return value;
};

module.exports.getValidStrExpr = ( value, expr, default_value ) => {
	return typeof value === 'string' && expr instanceof RegExp && expr.test( value ) ? value : default_value;
};

module.exports.getValidTokens = ( value, default_value ) => {
	if ( typeof value === "string" && value.length > 0 ) {
		return value.split( "," ).map( token => token.trim() ).filter( token => token.length > 0 );
	} else if ( value instanceof Array ) {
		return value.map( token => token.trim() ).filter( token => token.length > 0 );
	}
	return typeof default_value === "undefined" ? [] : default_value;
};

module.exports.getModuleRootPath = ( modulename, default_value ) => {
	try {
		const found = module.parent.parent.paths.find(
			name => fs.existsSync( path.join( name, modulename ) )
		);
		if ( found ) return path.join( found, modulename );
	}
	// eslint-disable-next-line no-unused-vars
	catch ( error ) { /* TUNIX */ }

	const found = require.resolve.paths( modulename ).find(
		name => fs.existsSync( path.join( name, modulename ) )
	);
	return found ? path.join( found, modulename ) : ( default_value || path.join( 'node_modules', modulename ) );
};

module.exports.makeModuleRootPath = ( modulename, ...args ) => {
	args.splice( 0, 0, module.exports.getModuleRootPath( modulename ) );
	return path.join.apply( path, args );
};

module.exports.mkdirSyncRecursively = ( dirname, mode ) => {
	fs.mkdirSync( dirname, { recursive: true, mode: typeof mode === 'number' ? mode : 0o755 } );
};

module.exports.createDirectoryIfNotExists = ( dirname, mode ) => {
	try {
		fs.mkdirSync( dirname, { recursive: true, mode: typeof mode === 'number' ? mode : 0o755 } );
		return true;
	}
	// eslint-disable-next-line no-unused-vars
	catch ( error ) {
		return false;
	}
};

module.exports.isDir = ( ...paths ) => {
	try {
		return fs.statSync( path.join.apply( path, paths ) ).isDirectory();
	}
	// eslint-disable-next-line no-unused-vars
	catch ( error ) { /* TUNIX */ }
	return false;
};

module.exports.isFile = ( ...paths ) => {
	try {
		return fs.statSync( path.join.apply( path, paths ) ).isFile();
	}
	// eslint-disable-next-line no-unused-vars
	catch ( error ) { /* TUNIX */ }
	return false;
};
