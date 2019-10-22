describe('Coverage', () => {

  it('measures individual statements run by our unit tests', () => {
    throw new Error(`

        if (
          a    // Statement 1
          || b // Statement 2
        ) {
          c()  // Statement 3
        } else {
          d()  // Statement 4
        }
    `);
    // Make sense?
    // Because "b" is never covered if "a" is true.
  });

  it('shows where behaviors are missing from our test', () => {
    throw new Error(`

      Coverage is a great tool for showing where you didn't test.
    `);
  });

  it('is measured by NYC and Istanbul', () => {
    throw new Error(`

      NYC is a great CLI for configuring reporting coverage.

      Istanbul is a great tool for instrumenting code for coverage.

      See the configuration in \`package.json\` and \`.babelrc\`.
    `);
  });

  it('lives in the \`coverage\` directory', () => {
    throw new Error(`

      When in doubt:

          $ open coverage/lcov-report/index.html
    `);
    // This will break down coverage by directory, file, and statement.
  });

  it('does not show that we actually tested a behavior correctly', () => {
    throw new Error(`

      Just because we ran a line of code doesn't mean that we made the
      correct assertions about it.
    `);
    // Does this make sense to everyone?
    // The _assertion_ about the code captures the behavior, not the _coverage_.
  });
});
