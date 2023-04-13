module.exports = class Machine {

    items = [{'crisps': 100}, {'chocolate': 350}, {'mints': 70}];
    validBills = [500, 100, 50, 20, 10]
    totalDeposit = 0;

    seeSelections = () => this.items;

    deposit = (note) => {
        if(this.validBills.includes(note)){
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
                let change = this.totalDeposit - cost;
                return {item : code, change : this.changeReturn(change)}
            }
        }
        return 'The item you selected is unavailable'
        }

    changeReturn = (amount) => {
        let bills = []
        for(let bill of this.validBills){
            while(amount>=bill){
                amount -= bill
                bills.push(bill)
            }
        }
        return bills
    }
    }