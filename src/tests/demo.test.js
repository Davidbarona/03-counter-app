describe("test in the demo.test.js file", () => {
  test("Must be equal the strings", () => {
    // 1. Started
    const message = "hello world";
    // 2. Stimulus
    const message2 = `hello world`;
    // 3. Observe the behaivor

    expect(message).toBe(message2);
  });
});
