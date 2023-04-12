module.exports = class Machine {
    constructor() {

    }
    totalDeposit = 0;

    seeSelections = () => [{'crisps': 'Rs 100'}, {'chocolate': 'Rs 350'}, {'mints': 'Rs 70'}];

    deposit = (note) => {
        if(note === 10 || note === 20 || note === 50 || note === 100 || note === 500){
            this.totalDeposit += note
            return `You have deposited Rs ${this.totalDeposit}`
        }
            return `Bill not acceptable!`
    };


}