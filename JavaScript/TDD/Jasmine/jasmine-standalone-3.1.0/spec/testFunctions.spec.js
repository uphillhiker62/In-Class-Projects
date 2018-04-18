
describe('appendWorld function', function() {
    it('should return the string hello world when the hello is the parameter', function() {
        var result = appendWorld('Hello');
        expect(result).toBe('Hello world');
    });
});


describe('evens', function() {
    it('should return an empty array if the parameter is an empty array', function() {
        let result = evens([]);
        expect(result).toEqual([]);
    });
    it('should return an empty array if there are no evens in my array', function() {
        let result = evens([1,3,5]);
        expect(result).toEqual([]);
    });
    it('should return an array of even numbers', function() {
        let result = evens[(1,2,3,4,5)];
        expect(result).toEqual([2,4]);
    });
});