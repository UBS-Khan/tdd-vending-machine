module.exports = class Machine {

    items = [{'crisps': 100}, {'chocolate': 350}, {'mints': 70}];
    validBills = [10, 20, 50, 100, 500]
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
        let item = this.items.map(item => Object.keys(item)[0]);

        if(item.includes(code)){
            let selectedItems = this.items.find(item => item.hasOwnProperty(code));
            let cost = selectedItems[code];
            if(cost>this.totalDeposit){
                let diff = cost-this.totalDeposit
                return `Your deposit is insufficient.  Please add Rs ${diff} for this item`
            } else{
                return 'abc'
            }
        }
        return 'The item you selected is unavailable'
        }
    }