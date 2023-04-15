test("array", () => {
    const colors = ["Red", "Yellow", "Blue", "Test"];

    expect(colors).toHaveLength(4);
    expect(colors).toContain("Test");
});