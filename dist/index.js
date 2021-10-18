// (c) 2017-2021 YeaSoft Intl - Leo Moll
//
// General utility functions

// activate strict mode
'use strict';

// load system modules
const fs = require( 'fs' );
const path = require( 'path' );
const { StringDecoder } = require( 'string_decoder' );

// exported entities
module.exports.testNumber = function( value ) {
	var re = /^[0-9]+$/;
	return typeof value === 'string' && re.test( value );
};

module.exports.testSHA2 = function( value ) {
	var re = /^[0-9a-f]{64}$/;
	return typeof value === 'string' && re.test( value.toLowerCase() );
};

module.exports.testUUID = function( value ) {
	var re = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
	return typeof value === 'string' && re.test( value.toLowerCase() );
};

module.exports.testEmail = function( value ) {
	// see: https://www.w3.org/TR/html5/forms.html#valid-e-mail-address
	var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
	return typeof value === 'string' && re.test( value );
};

module.exports.convertUtf8ToAscii = function( value, default_value ) {
	var retval = '';
	var maptable = {
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
	value.split( '' ).forEach( c => {
		var m, v = c.charCodeAt( 0 );
		if ( v < 128 ) {
			retval += c;
		}
		else if ( undefined != ( m = maptable[ v ] ) ) {
			retval += m;
		}
		else {
			retval += '_';
		}
	} );
	return retval || default_value || '';
};

module.exports.base64DecodeLazy = function( encoded, default_value ) {
	// decodes both true Base64 and Base64url - see https://tools.ietf.org/html/rfc4648#section-5
	try {
		var decoder = new StringDecoder( 'utf8' );
		encoded += '==='.slice( 0, [ 0, 3, 2, 1 ][ encoded.length % 4 ] );
		return decoder.write( Buffer.from( encoded.replace( /-/g, '+' ).replace( /_/g, '/' ), 'base64' ) );
	}
	catch ( error ) { /* TUNIX */ }
	return default_value;
};

module.exports.getJsonValue = function( value, default_value ) {
	try {
		return JSON.parse( value );
	}
	catch ( error ) {
		return default_value;
	}
};

module.exports.getSpecifiedStr = function( value, default_value ) {
	return typeof value === 'string' && value.length > 0 ? value : default_value;
};

module.exports.getValidArr = function( value, default_value ) {
	return value instanceof Array ? value : default_value;
};

module.exports.getValidBool = function( value, default_value ) {
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

module.exports.getValidInt = function( value, default_value ) {
	let retval = parseInt( value );
	return isNaN( retval ) ? default_value : retval;
};

module.exports.getValidIntRange = function( value, min, max, default_value ) {
	let minval = parseInt( min );
	let maxval = parseInt( max );
	let retval = parseInt( value );
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

module.exports.getValidNum = function( value, default_value ) {
	let retval = parseFloat( value );
	return isNaN( retval ) ? default_value : retval;
};

module.exports.getValidNumRange = function( value, min, max, default_value ) {
	let minval = parseFloat( min );
	let maxval = parseFloat( max );
	let retval = parseFloat( value );
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

module.exports.getValidObj = function( value, default_value ) {
	return value instanceof Object ? value : default_value;
};

module.exports.getValidStr = function( value, default_value ) {
	return typeof value === 'string' ? value : default_value;
};

module.exports.getValidStrRange = function( value, min, max, default_value ) {
	let minval = parseInt( min );
	let maxval = parseInt( max );
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

module.exports.getValidStrExpr = function( value, expr, default_value ) {
	return typeof value === 'string' && expr instanceof RegExp && expr.test( value ) ? value : default_value;
};

module.exports.getModuleRootPath = function( modulename, default_value ) {
	try {
		let found = module.parent.parent.paths.find(
			name => fs.existsSync( path.join( name, modulename ) )
		);
		if ( found ) return path.join( found, modulename );
	}
	catch ( error ) { /* TUNIX */ }

	let found = require.resolve.paths( modulename ).find(
		name => fs.existsSync( path.join( name, modulename ) )
	);
	return found ? path.join( found, modulename ) : ( default_value || path.join( 'node_modules', modulename ) );
};

module.exports.makeModuleRootPath = function( modulename, ...args ) {
	args.splice( 0, 0, module.exports.getModuleRootPath( modulename ) );
	return path.join.apply( path, args );
};

module.exports.mkdirSyncRecursively = function( dirname, mode ) {
	fs.mkdirSync( dirname, { recursive: true, mode: typeof mode === 'number' ? mode : 0o755 } );
};

module.exports.createDirectoryIfNotExists = function( dirname, mode ) {
	try {
		fs.mkdirSync( dirname, { recursive: true, mode: typeof mode === 'number' ? mode : 0o755 } );
		return true;
	}
	catch ( error ) {
		return false;
	}
};

module.exports.isDir = function( ...paths ) {
	try {
		return fs.statSync( path.join.apply( path, paths ) ).isDirectory();
	}
	catch ( error ) { /* TUNIX */ }
	return false;
};

module.exports.isFile = function( ...paths ) {
	try {
		return fs.statSync( path.join.apply( path, paths ) ).isFile();
	}
	catch ( error ) { /* TUNIX */ }
	return false;
};
