const Machine = require('../src/Machine');

test('AC1',()=>{
    //Arrange
    const assert = [{'crisps': 100}, {'chocolate': 350}, {'mints': 70}]
    const machine = new Machine();
    //Act
    let result = machine.seeSelections();
    //Assert
    expect(result).toEqual(assert);
})

test('AC2',()=>{
    //Arrange
    const assert = 'You have deposited Rs 500'
    const machine = new Machine();
    //Act
    let result = machine.deposit(500);
    //Assert
    expect(result).toEqual(assert);
})

test('AC3',()=>{
    //Arrange
    const assert = 'You have deposited Rs 600'
    const machine = new Machine();
    machine.deposit(500)
    //Act
    let result = machine.deposit(100);
    //Assert
    expect(result).toEqual(assert);
})

test('AC4',()=>{
    //Arrange
    const assert = 'The item you selected is unavailable'
    const machine = new Machine();
    //Act
    let result = machine.selectItem('chips');
    //Assert
    expect(result).toEqual(assert);
})

test('AC5',()=>{
    //Arrange
    const assert = 'Your deposit is insufficient.  Please add Rs 300 for this item'
    const machine = new Machine();
    machine.deposit(50)
    //Act
    let result = machine.selectItem('chocolate');
    //Assert
    expect(result).toEqual(assert);
})

test('AC6',()=>{
    //Arrange
    const assert = {item: 'mints', change: [20, 10]}
    const machine = new Machine();
    machine.deposit(100)
    //Act
    let result = machine.selectItem('mints');
    //Assert
    expect(result).toEqual(assert);
})

test('AC7',()=>{
    //Arrange
    const assert = {change: 100}
    const machine = new Machine();
    machine.deposit(100)
    //Act
    let result = machine.cancel();
    //Assert
    expect(result).toEqual(assert);
})