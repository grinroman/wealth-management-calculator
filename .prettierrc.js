module.exports = {
  $schema: 'http://json.schemastore.org/prettierrc',
  tabWidth: 2,
  singleQuote: true,
  semi: true,
  trailingComma: 'es5',
  overrides: [
    {
      files: ['**/*.css',  '**/*.html'],
      options: {
        singleQuote: false,
      },
    },
  ],
  endOfLine: 'auto',
};
