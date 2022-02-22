module.exports = function constVarPlugin() {
  return {
    visitor: {
      VariableDeclaration(path) {
        console.log('VariableDeclaration kine', path.node.kind);

        if (path.node.kind === 'const') {
          path.node.kind = 'var';
        }
      },
    },
  };
};
