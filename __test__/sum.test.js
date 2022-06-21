const sum = require('../sum');

//SUM
test('Sum should return 2',  function(){
    expect(sum(1,1)).toBe(2);

});

test('Sum should return 3',  function(){
    expect(sum(1,2)).toBe(3);

});
