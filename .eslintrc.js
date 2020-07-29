module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true,
    jasmine: true,
    jquery: true,
    es6: true,
  },
  globals: {
    fabric: true,
    tui: true,
    loadFixtures: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    indent: 2,
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: { array: true, object: true },
        AssignmentExpression: { array: false, object: false },
      },
    ],
  },
};
