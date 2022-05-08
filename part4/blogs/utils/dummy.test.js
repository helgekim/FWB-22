const Function = require('./dummy.js').dummy;

test('dummy() returns 1', () => {

const blogs = [];
const dummy = Function(blogs);

expect(dummy).toBe(1);

})
