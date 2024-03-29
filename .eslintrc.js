module.exports = {
   env: {
      browser: true,
      es2021: true,
      node: true,
   },
   plugins: ["@typescript-eslint", "simple-import-sort"],
   extends: [
      "eslint:recommended",
      "next",
      "next/core-web-vitals",
      "plugin:@typescript-eslint/recommended",
   ],
   rules: {
      "no-unused-vars": "off",
      "no-console": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "off",

      // Sort
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
      "simple-import-sort/exports": "warn",
      "simple-import-sort/imports": [
         "warn",
         {
            groups: [
               // ext library & side effect imports
               ["^react", "next", "^\\u0000"],
               // {s}css files
               ["^.+\\.s?css$"],
               // Lib and hooks
               ["^@hooks"],
               // static data
               ["^@constants"],
               // components
               [
                  "^@components/atoms",
                  "^@components/molecules",
                  "^@components/organisms",
                  "^@components/pages",
                  "^@components/layout",
               ],
               // Other imports
               ["^@services"],
               //
               ["^@"],
               // relative paths up until 3 level
               [
                  "^\\./?$",
                  "^\\.(?!/?$)",
                  "^\\.\\./?$",
                  "^\\.\\.(?!/?$)",
                  "^\\.\\./\\.\\./?$",
                  "^\\.\\./\\.\\.(?!/?$)",
                  "^\\.\\./\\.\\./\\.\\./?$",
                  "^\\.\\./\\.\\./\\.\\.(?!/?$)",
               ],
               ["^@types"],
               // other that didnt fit in
               ["^"],
            ],
         },
      ],
   },
   globals: {
      React: true,
      JSX: true,
   },
};
