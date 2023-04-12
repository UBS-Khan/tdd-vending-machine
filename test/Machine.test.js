const Machine = require('../src/Machine');

test('AC1',()=>{
    //Arrange
    const assert = [{'crisps': 'Rs 100'}, {'chocolate': 'Rs 350'}, {'mints': 'Rs 70'}]
    const machine = new Machine();
    //Act
    let result = machine.seeSelections();
    //Assert
    expect(result).toEqual(assert);
})

test('AC2',()=>{
    //Arrange
    const assert = "You have deposited Rs 500"
    const machine = new Machine();
    //Act
    let result = machine.deposit(500);
    //Assert
    expect(result).toEqual(assert);
})