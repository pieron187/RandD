describe("Hello world", function() {
  it("says Hello world!", function() {
    expect(helloWorld()).toEqual("Hello world!");
  });
  
  it("contains world", function() {
    expect(helloWorld()).toContain("world!");
  });
});

describe("Hello world2", function() {
  it("says Hello world!", function() {
    expect(helloWorld()).toEqual("Hello world!");
  });
  
  it("contains world", function() {
    expect(helloWorld()).toContain("world!");
  });
});