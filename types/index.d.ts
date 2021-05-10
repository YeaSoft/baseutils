// Type definitions for @yea/baseutils
// Project: All my projects
// Definitions by: Leo Moll

/**
 * Tests if the parameter is a formal valid unsigned integer number.
 *
 * This function tests if the supplied value is a string containing a formal valid number.
 *
 * @param {*} value - The value to test
 */
export function testNumber( value: any ): boolean;

/**
 * Tests if the parameter is a formal valid SHA2 value.
 *
 * This function tests if the supplied value is a string containing a formal valid SHA2 value.
 * It performs only a formal check.
 *
 * @param {*} value - The value to test
 */
export function testSHA2( value: any ): boolean;

/**
 * Tests if the parameter is a formal valid UUID value.
 *
 * This function tests if the supplied value is a string containing a formal valid UUID value.
 * It performs only a formal check.
 *
 * @param {*} value - The value to test
 */
export function testUUID( value: any ): boolean;

/**
 * Tests if the parameter is a formal valid email address.
 *
 * This function tests if the supplied value is a string containing a formal valid email
 * address value. It performs only a formal check according to https://www.w3.org/TR/html5/forms.html#valid-e-mail-address
 *
 * @param {*} value - The value to test
 */
export function testEmail( value: any ): boolean;

/**
 * Converts a UTF-8 encoded string to pure ASCII
 *
 * This function performs a lossy conversion from an UTF-8 encoded string to a pure ASCII
 * representation. For obvious reasons the result of this conversion is not perfect. Any
 * character that is not correctly mapped to a suitable representation will be replaced
 * by a _ (underscore) character. Currently the function maps as good as possible all
 * German umlauts and many characters with accents as used in French, Italian and some
 * other European languages. If needed, the function will be improved from version to
 * version.
 *
 * @param {string} value - The input value to convert
 * @param {string=} default_value - The default value to return if the conversion fails or the result is an empty string (default: <empty string>)
 */
export function convertUtf8ToAscii( value: string, default_value?: string | undefined ): string;

/**
 * Decodes both true Base64 and Base64url
 *
 * This function decodes both true Base64 and Base64url content according to
 * https://tools.ietf.org/html/rfc4648#section-5
 * If the conversaion fails, the function returns the supplied  `default_value`.
 *
 * @param {string} encoded - The input value to decode
 * @param {*=} default_value - The default value to return if the conversion fails
 */
export function base64DecodeLazy( encoded: string, default_value?: any | undefined ): any;

/**
 * Decodes a JSON encoded javascript object
 *
 * This function decodes and returns a javascript object encoded as JSON. Basically the
 * functionality is similar to the standard function `JSON.parse` with the difference that
 * the function does not throw any exception on errors but instead returns the supplied
 * `default_value`.
 *
 * @param {string} value - The input value to decode
 * @param {*=} default_value - The default value to return if decoding fails. (default: undefined)
 */
export function getJsonValue( value: string, default_value?: any | undefined ): any;

/**
 * Returns a valid string continaing something
 *
 * This function checks if the passed value is of type string and is not empty.  If yes, value is
 * returned, otherwise `default_value`.
 *
 * @param {*} value - The input value to check and return
 * @param {string=} default_value - The default value to return if the test fails. (default: undefined)
 */
export function getSpecifiedStr( value: any, default_value?: string | undefined ): string;

/**
* Returns a valid array
*
* This function checks if the passed value is an instance of Array. If yes, value is returned,
* otherwise `default_value`.
*
* @param {*} value - The input value to check and return
* @param {*[]=} default_value - The default value to return if the test fails. (default: undefined)
*/
export function getValidArray( value: any, default_value?: any[] | undefined ): any[];

/**
 * Returns a valid integer
 *
 * This function checks if the passed value can be parsed as an integer number. If yes,
 * `parseInt( value )` is returned, otherwise `default_value`.
 * If the value cannot be decoded, `default_value` is returned.
 *
 * @param {*} value - The input value to check and return
 * @param {number=} default_value - The default value to return if the test fails. (default: undefined)
 */
export function getValidInt( value: any, default_value?: number | undefined ): number;

/**
 * Returns a valid integer in a defined range
 *
 * This function checks if the passed value can be parsed as an integer number and has a value
 * between the specified boundaries `min` and `max`. If yes, `parseInt( value )` is returned,
 * otherwise `default_value`.
 * If the value cannot be decoded, `default_value` is returned.
 *
 * @param {*} value - The input value to check and return
 * @param {number=} min - Minimum value allowed (default: no lower boundary)
 * @param {number=} max - Maximum value allowed (default: no upper boundary)
 * @param {number=} default_value - The default value to return if the test fails. (default: undefined)
 */
export function getValidIntRange( value: any, min?: number | undefined, max?: number | undefined, default_value?: number | undefined ): number;

/**
 * Returns a valid number
 *
 * This function checks if the passed value can be parsed as an number. If yes,
 * `parseFloat( value )` is returned, otherwise `default_value`.
 * If the value cannot be decoded, `default_value` is returned.
 *
 * @param {*} value - The input value to check and return
 * @param {number=} default_value - The default value to return if the test fails. (default: undefined)
 */
export function getValidNum( value: any, default_value?: number | undefined ): number;

/**
 * Returns a valid number in a defined range
 *
 * This function checks if the passed value can be parsed as an number and has a value between
 * the specified boundaries min and max. If yes, `parseFloat( value )` is returned, otherwise
 * `default_value`.
 * If the value cannot be decoded or is outside the specified range, `default_value` is returned.
 *
 * @param {*} value - The input value to check and return
 * @param {number=} min - Minimum value allowed (default: no lower boundary)
 * @param {number=} max - Maximum value allowed (default: no upper boundary)
 * @param {number=} default_value - The default value to return if the test fails. (default: undefined)
 */
export function getValidNumRange( value: any, min?: number | undefined, max?: number | undefined, default_value?: number | undefined ): number;

/**
 * Returns a valid object
 *
 * This function checks if the passed object value is an instance of Object. If yes, value is returned,
 * otherwise `default_value`.
 *
 * @param {*} value - The input value to check and return
 * @param {*=} default_value - The default value to return if the test fails. (default: undefined)
 */
export function getValidObj( value: any, default_value?: any | undefined ): any;

/**
 * Returns a valid string
 *
 * This function checks if the passed value is of type string.  If yes, value is
 * returned, otherwise `default_value`.
 *
 * @param {*} value - The input value to check and return
 * @param {string=} default_value - The default value to return if the test fails. (default: undefined)
 */
export function getValidStr( value: any, default_value?: string | undefined ): string;

/**
 * Returns a valid string
 *
 * This function checks if the passed value is of type string and its length is between the
 * supplied boundaries.  If yes, `value` is returned, otherwise `default_value`.
 *
 * @param {*} value - The input value to check and return
 * @param {number=} min - Minimum string length allowed (default: no lower boundary)
 * @param {number=} max - Maximum string length allowed (default: no upper boundary)
 * @param {string=} default_value - The default value to return if the test fails. (default: undefined)
 */
export function getValidStrRange( value: any, min?: number | undefined, max?: number | undefined, default_value?: string | undefined ): string;

/**
 * Returns a valid string
 *
 * This function checks if the passed value is of type string and matches the supplied
 * regular expression. If yes, `value` is returned, otherwise `default_value`.
 *
 * @param {*} value - The input value to check and return
 * @param {RegExp} expr - The regular expression to test the value against
 * @param {string=} default_value - The default value to return if the test fails. (default: undefined)
 */
export function getValidStrExpr( value: any, expr: RegExp, default_value?: string | undefined ): string;

/**
 * Determine the physical root path of an installed module dependency
 *
 * This function allows to determine the physical root path of an installed module dependency.
 * It is mainly used to map files from dependent modules in static serving. A typical scenario
 * would be to install a javascript library as a dependency of the main application (or a plugin).
 * When the javascript library has to be included in the web client, the library files must be
 * served by the internal http server of imcs. In order to to so, it is needed to know in which
 * patch the installed dependency resides.
 *
 * @param {string} modulename - The name of the module
 * @param {string=} default_value - The default value to return if the path cannot be determined (default: node_modules/<modulename>)
 */
export function getModuleRootPath( modulename: string, default_value?: string | undefined ): any;

/**
 * Construct a path based upon the physical root path of an installed module dependency
 *
 * This function allows to construct a path based upon the physical root path of an installed
 * module dependency. It is mainly used to map files from dependent modules in static serving.
 * A typical scenario would be to install a javascript library as a dependency of the main
 * application (or a plugin). When the javascript library has to be included in the web client,
 * the library files must be served by the internal http server of imcs. In order to to so, it is
 * needed to know in which patch the installed dependency resides.
 *
 * @param {string} modulename - The name of the module
 * @param {...*} args - Path components
 */
export function makeModuleRootPath( modulename: string, ...args: any[] ): any;

/**
 * Creates a directory recursively
 *
 * If any error occurs, this method throws an exception.
 *
 * @param {string} dirname - The directory tree to create
 * @param {number=} mode - The unix mode bits (default: 0o755)
 */
export function mkdirSyncRecursively( dirname: string, mode?: number | undefined ): void;

/**
 * Fire-and-Forget method to insure that a directory tree exists
 * @param {string} dirname - The directory tree to create
 * @param {number=} mode - The unix mode bits (default: 0o755)
 */
export function createDirectoryIfNotExists( dirname: string, mode?: number | undefined ): boolean;

/**
 * Checks if the supplied pathname is an existing directory
 *
 * @param {...string} paths - A sequence of path segments
 * @returns {boolean} - `true` if the specified directory exists
 */
export function isDir( ...paths: string[] ): boolean;

/**
 * Checks if the supplied pathname is an existing file
 *
 * @param {...string} paths - A sequence of path segments
 * @returns {boolean} - `true` if the specified file exists
 */
export function isFile( ...paths: string[] ): boolean;