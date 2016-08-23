describe("calcPow", function() {
	
	it("Возводит число 2  в 3 степень", function() {
	assert.equal(calcPow(2, 3), 8) 
	});
	
	it("Возводит число 3  в 4 степень", function() {
		assert.equal(calcPow(3, 4), 81);
	});
});