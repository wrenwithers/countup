describe('countMultiples',function(){
  it("counts up to a specified number", function() {
    expect(countMultiples("7")).to.equal("1,2,3,4,5,6,7");
  })
 it("counts up to a specified number and utilizes a specified multiplier", function() {
   expect(countMultiples("10,2")).to.equal("2,4,6,8,10");
 })

});
