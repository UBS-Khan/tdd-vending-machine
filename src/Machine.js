module.exports = class Machine {

    items = [{'crisps': 100}, {'chocolate': 350}, {'mints': 70}];
    validBills = [500, 100, 50, 20, 10]
    availableBills = [20]
    totalDeposit = 0;

    seeSelections = () => this.items;  //This method simply shows the selection of the user

    deposit = (note) => {  //This method is taking money from the user
        if(this.validBills.includes(note)){ 
            this.totalDeposit += note //Valid bills will be added into the totalDeposit
            return `You have deposited Rs ${this.totalDeposit}`
        }
            return `Bill not acceptable!` //Invalid bills will throw the error!
    };

    selectItem = (code) => { 
        let item = this.items.map(item => Object.keys(item)[0]); //This method is converting items into the objects

        if(item.includes(code)){
            let selectedItems = this.items.find(item => item.hasOwnProperty(code)); 
            let cost = selectedItems[code];
            if(cost>this.totalDeposit){
                let diff = cost-this.totalDeposit
                return `Your deposit is insufficient.  Please add Rs ${diff} for this item`
            } else{
                let change = this.totalDeposit - cost;
                if(this.availableBills<change){
                    return 'Cannot return proper change.  Please choose another item or cancel the transaction'
                }
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

    cancel = () => {
        return {change: [this.totalDeposit]}
    }
}