const {matrix, unroll} = require("./unroll");
const result = unroll(matrix);

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it("returns an array", function () {
    const result = unroll([[1, 2, 3, 4]]); 
    expect(Array.isArray(result)).toBe(true);
  });
  
});
