import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: [ "**/*.js" ], languageOptions: { sourceType: "commonjs", globals: globals.node } },
  pluginJs.configs.recommended,
];