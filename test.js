
//Dollar
test("One euro should be 1.2 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(4.2);
})
//Yen
test("1 dolar should be 106.58333333333334 yens", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')
    
    // use the function like its suppoed to be used
    const yens = fromDollarToYen(1)

    // 1 dollar to yen
    const expected = (1/1.2) * 127.9; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(106.58333333333334);
})
//British Pound
test("1000 yen should be 5.6000000000000005 british pound", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

     // use the function like its suppoed to be used
    const britishpound = fromYenToPound(1000)

    // 100 yen to british pound
    const expected = Math.floor((1000/127.9)) * 0.8; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(5.6000000000000005);
})