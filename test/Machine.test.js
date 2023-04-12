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

test('AC3',()=>{
    //Arrange
    const assert = "You have deposited Rs 600"
    const machine = new Machine();
    machine.deposit(500)
    //Act
    let result = machine.deposit(100);
    //Assert
    expect(result).toEqual(assert);
})

test('AC4',()=>{
    //Arrange
    const assert = "The item you selected is unavailable"
    const machine = new Machine();
    //Act
    let result = machine.selectItem('chips');
    //Assert
    expect(result).toEqual(assert);
})