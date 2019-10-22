describe('Behavior', () => {

  it('is what we talk about most when testing', () => {
    throw new Error(`

      Understanding behavior is the single most important testing tool.

      But what is a behavior?
    `);
    // Have the room provide some answers.
  });

  it('is anything the code does (or does not do)', () => {
    throw new Error(`

      Every line of code has behavior!

      * contracts produced (guarantees)
      * constracts consumed (assumptions)
      * transformations
      * error handling
      * side effects
    `);
    // Again, super important... every line of code does something.
    // If we can identify what that is, we can test it.
    // So again, understanding behavior is the best tool we have.
  });

  it('has some examples from Autopilot', () => {
    throw new Error(`

      The Code Under Test ("It")...

      * exports a function
      * has a certain class name
      * keeps the raw article body
      * is hidden by default
      * renders a Tag for each item
      * renders an error page on failure
      * polyfills \`fetch\` when required in a DOM
      * calls the user service with the expected payload
      * does not render a logo without syndication data
    `);
    // Read this on your own...
    // Any other good examples?
    // Note we don't say what the code "should" do, just what it does.
  });

  it('is everything we want to test', () => {
    throw new Error(`

      Our unit tests are a catalogue of all important behaviors...

      ...and we'd rather lose "src" code than "test".

      Goal: move fast and don't break things!
    `);
    // What are some of the implications of this?
    // For one, we prefer to test behaviors that users care about.
  });

  it('describes what a module does', () => {
    throw new Error(`

        What does this module do?

          export default { foo } from './foo';
      `);
      // Example: exports a function named "foo".
  });

  it('describes what a component does', () => {
    throw new Error(`

        What does this component do?

          <div className="foo">{props.children}</div>
      `);
      // Example: renders its children inside a `div`.
      // Example: has the className "foo".
  });

  it('describes whatever this function does', () => {
    throw new Error(`

        What does this function do?

          (arr, sep) => arr.slice(1).reduce(function (xs, x, index) {
            if (React.isValidElement(sep)) {
              const key = \`sep-\${index}\`
              const clonedSep = React.cloneElement(sep, { key })
              return xs.concat([clonedSep, x]);
            }
            return xs.concat([sep, x]);
          }, [arr[0]]);
      `);
      // Example: intersperses an array of elements with a separator.
      // Example: creates keyed copies of React component separators.
      // TODO: Return with a test in "helpers".
  });
});
