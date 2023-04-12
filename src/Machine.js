module.exports = class Machine {
    constructor() {

    }

    items = [{'crisps': 'Rs 100'}, {'chocolate': 'Rs 350'}, {'mints': 'Rs 70'}];
    totalDeposit = 0;

    seeSelections = () => this.items;

    deposit = (note) => {
        if(note === 10 || note === 20 || note === 50 || note === 100 || note === 500){
            this.totalDeposit += note
            return `You have deposited Rs ${this.totalDeposit}`
        }
            return `Bill not acceptable!`
    };

    selectItem = (code) => {
        for(let item of this.items){
            const key = Object.keys(item)[0];
            const value = Object.values(item)[0];

            if(key===code){
                if(value>this.totalDeposit){
                    return `Your deposit is insufficient.  Please add Rs ${value - this.totalDeposit} for this item`
                }
            }
            return  'The item you selected is unavailable'
        }
    }
}