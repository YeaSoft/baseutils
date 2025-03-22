// Type definitions for @yeasoft/baseutils
// Project: All my projects
// Definitions by: Leo Moll

/**
 * Tests if the parameter is a formal valid unsigned integer number.
 *
 * This function tests if the supplied value is a string containing a formal valid number.
 *
 * @param value - The value to test
 */
export function testNumber( value: any ): boolean;

/**
 * Tests if the parameter is a formal valid SHA2 value.
 *
 * This function tests if the supplied value is a string containing a formal valid SHA2 value.
 * It performs only a formal check.
 *
 * @param value - The value to test
 */
export function testSHA2( value: any ): boolean;

/**
 * Tests if the parameter is a formal valid UUID value.
 *
 * This function tests if the supplied value is a string containing a formal valid UUID value.
 * It performs only a formal check.
 *
 * @param value - The value to test
 */
export function testUUID( value: any ): boolean;

/**
 * Tests if the parameter is a formal valid email address.
 *
 * This function tests if the supplied value is a string containing a formal valid email
 * address value. It performs only a formal check according to https://www.w3.org/TR/html5/forms.html#valid-e-mail-address
 *
 * @param value - The value to test
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
 * @param value - The input value to convert
 * @param default_value - The default value to return if the conversion fails or the result is an empty string (default: <empty string>)
 */
export function convertUtf8ToAscii( value: string, default_value?: string ): string;

/**
 * Decodes both true Base64 and Base64url
 *
 * This function decodes both true Base64 and Base64url content according to
 * https://tools.ietf.org/html/rfc4648#section-5
 * If the conversaion fails, the function returns the supplied  `default_value`.
 *
 * @param encoded - The input value to decode
 * @param default_value - The default value to return if the conversion fails
 */
export function base64DecodeLazy<T>( encoded: string, default_value?: T ): string | T;

/**
 * Decodes a JSON encoded javascript object
 *
 * This function decodes and returns a javascript object encoded as JSON. Basically the
 * functionality is similar to the standard function `JSON.parse` with the difference that
 * the function does not throw any exception on errors but instead returns the supplied
 * `default_value`.
 *
 * @param value - The input value to decode
 * @param default_value - The default value to return if decoding fails. (default: undefined)
 */
export function getJsonValue( value: string, default_value?: any ): any;

/**
 * Returns a valid string continaing something
 *
 * This function checks if the passed value is of type string and is not empty.  If yes, value is
 * returned, otherwise `default_value`.
 *
 * @param value - The input value to check and return
 * @param default_value - The default value to return if the test fails. (default: undefined)
 */
export function getSpecifiedStr<T>( value: any, default_value?: T ): string | T;

/**
* Returns a valid array
*
* This function checks if the passed value is an instance of Array. If yes, value is returned,
* otherwise `default_value`.
*
* @param value - The input value to check and return
* @param default_value - The default value to return if the test fails. (default: undefined)
*/
export function getValidArr<T>( value: any, default_value?: T ): any[] | T;

/**
 * Returns a valid boolean
 *
 * This function checks if the passed value can be parsed as a boolean vallue. If yes, the
 * parsed result is returned, otherwise `default_value`.
 * If the supplied value is a string, "on", "yes" or "true" are interpreted as `true` and
 * "off", "no" or "false" are interpreted as `false` regardless of the case.
 * If the value cannot be decoded, `default_value` is returned.
 *
 * @param value - The input value to check and return
 * @param default_value - The default value to return if the test fails. (default: undefined)
 */
export function getValidBool<T>( value: any, default_value?: T ): boolean | T;

/**
 * Returns a valid integer
 *
 * This function checks if the passed value can be parsed as an integer number. If yes,
 * `parseInt( value )` is returned, otherwise `default_value`.
 * If the value cannot be decoded, `default_value` is returned.
 *
 * @param value - The input value to check and return
 * @param default_value - The default value to return if the test fails. (default: undefined)
 */
export function getValidInt<T>( value: any, default_value?: T ): number | T;

/**
 * Returns a valid integer in a defined range
 *
 * This function checks if the passed value can be parsed as an integer number and has a value
 * between the specified boundaries `min` and `max`. If yes, `parseInt( value )` is returned,
 * otherwise `default_value`.
 * If the value cannot be decoded, `default_value` is returned.
 *
 * @param value - The input value to check and return
 * @param min - Minimum value allowed (default: no lower boundary)
 * @param max - Maximum value allowed (default: no upper boundary)
 * @param default_value - The default value to return if the test fails. (default: undefined)
 */
export function getValidIntRange<T>( value: any, min?: number | undefined, max?: number | undefined, default_value?: T ): number | T;

/**
 * Returns a valid number
 *
 * This function checks if the passed value can be parsed as an number. If yes,
 * `parseFloat( value )` is returned, otherwise `default_value`.
 * If the value cannot be decoded, `default_value` is returned.
 *
 * @param value - The input value to check and return
 * @param default_value - The default value to return if the test fails. (default: undefined)
 */
export function getValidNum<T>( value: any, default_value?: T ): number | T;

/**
 * Returns a valid number in a defined range
 *
 * This function checks if the passed value can be parsed as an number and has a value between
 * the specified boundaries min and max. If yes, `parseFloat( value )` is returned, otherwise
 * `default_value`.
 * If the value cannot be decoded or is outside the specified range, `default_value` is returned.
 *
 * @param value - The input value to check and return
 * @param min - Minimum value allowed (default: no lower boundary)
 * @param max - Maximum value allowed (default: no upper boundary)
 * @param default_value - The default value to return if the test fails. (default: undefined)
 */
export function getValidNumRange<T>( value: any, min?: number | undefined, max?: number | undefined, default_value?: T ): number | T;

/**
 * Returns a valid object
 *
 * This function checks if the passed object value is an instance of Object. If yes, value is returned,
 * otherwise `default_value`.
 *
 * @param value - The input value to check and return
 * @param default_value - The default value to return if the test fails. (default: undefined)
 */
export function getValidObj<T>( value: any, default_value?: T ): Object | T;

/**
 * Returns a valid string
 *
 * This function checks if the passed value is of type string.  If yes, value is
 * returned, otherwise `default_value`.
 *
 * @param value - The input value to check and return
 * @param default_value - The default value to return if the test fails. (default: undefined)
 */
export function getValidStr<T>( value: any, default_value?: T ): string | T;

/**
 * Returns a valid string
 *
 * This function checks if the passed value is of type string and its length is between the
 * supplied boundaries.  If yes, `value` is returned, otherwise `default_value`.
 *
 * @param value - The input value to check and return
 * @param min - Minimum string length allowed (default: no lower boundary)
 * @param max - Maximum string length allowed (default: no upper boundary)
 * @param default_value - The default value to return if the test fails. (default: undefined)
 */
export function getValidStrRange<T>( value: any, min?: number | undefined, max?: number | undefined, default_value?: T ): string | T;

/**
 * Returns a valid string
 *
 * This function checks if the passed value is of type string and matches the supplied
 * regular expression. If yes, `value` is returned, otherwise `default_value`.
 *
 * @param value - The input value to check and return
 * @param expr - The regular expression to test the value against
 * @param default_value - The default value to return if the test fails. (default: undefined)
 */
export function getValidStrExpr<T>( value: any, expr: RegExp, default_value?: T ): string | T;

/**
 * Returns an array of tokens
 *
 * This function checks if the passed value is of type string or Array and returns
 * an array of tokens. If the passwed value is a string, it is split in tokens using
 * comma as separator. All tokens will be trimmed. Empty tokens will be removed from the
 * result.
 *
 * @param value - The tokens to split (either as array or comma separated list)
 * @param default_value - The default value to return on failure. (default: empty array)
 * @returns  Array containing the decoded tokens
 */
export function getValidTokens( value: string | string[] ): string[];
export function getValidTokens<T>( value: string | string[], default_value: T ): string[] | T;

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
 * @param modulename - The name of the module
 * @param default_value - The default value to return if the path cannot be determined (default: node_modules/<modulename>)
 */
export function getModuleRootPath( modulename: string ): string;
export function getModuleRootPath<T>( modulename: string, default_value: T ): string | T;

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
 * @param modulename - The name of the module
 * @param args - Path components
 */
export function makeModuleRootPath( modulename: string, ...args: string[] ): string;

/**
 * Creates a directory recursively
 *
 * If any error occurs, this method throws an exception.
 *
 * @param dirname - The directory tree to create
 * @param mode - The unix mode bits (default: 0o755)
 * @throws Error
 */
export function mkdirSyncRecursively( dirname: string, mode?: number ): void;

/**
 * Fire-and-Forget method to insure that a directory tree exists
 *
 * @param dirname - The directory tree to create
 * @param mode - The unix mode bits (default: 0o755)
 */
export function createDirectoryIfNotExists( dirname: string, mode?: number | undefined ): boolean;

/**
 * Checks if the supplied pathname is an existing directory
 *
 * @param paths - A sequence of path segments
 * @returns `true` if the specified directory exists
 */
export function isDir( ...paths: string[] ): boolean;

/**
 * Checks if the supplied pathname is an existing file
 *
 * @param paths - A sequence of path segments
 * @returns `true` if the specified file exists
 */
export function isFile( ...paths: string[] ): boolean;