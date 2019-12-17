require('chai')
    .use(require('chai-as-promised'))
    .should()


const Balance = artifacts.require("./Balance.sol")

contract("Balance", ([deployer,user]) => {
    before(async() =>{
        this.balance = await Balance.deployed()
    })
    it("checcks if the contract deployed successfully", async() => {
        console.log("Balance Test Running Phase One")
        const address = this.balance.address
        assert.notEqual(address, 0x0)
        assert.notEqual(address, null)
        assert.notEqual(address, undefined)
        assert.notEqual(address,"")
        console.log("#####################")
    })

    it("checks if the getBalanceOfContract functionality works", async() => {
        console.log("Balance Test Running Phase Two")
        const getBalanceOfContract =await this.balance.getBalanceOfContract()
        const contract_address = await web3.eth.getBalance(this.balance.address)
        assert.equal(getBalanceOfContract.toNumber(), contract_address)
        // // assert.equal(web3.utils.toWei(getBalanceOfContract,'Ether'),deployer)
        // const deployer_acct_balance = await web3.eth.getBalance(deployer)
        // // assert.equal(getBalanceOfContract,deployer_acct_balance)
        // console.log(web3.utils.toWei(deployer_acct_balance,'Ether'))
        // // console.log(web3.utils.toWei(getBalanceOfContract.toNumber(),'Ether'))
        // console.log(getBalanceOfContract.toNumber())
        console.log("#####################")
    })
    it("checks if the getBalanceOfOwner funtionality works", async() =>{
        console.log("Balance Test Running Phase Three");
        var getBalanceOfOwner = await this.balance.getBalanceOfOwner()
        var deployer_balance = await web3.eth.getBalance(deployer)

        getBalanceOfOwner =getBalanceOfOwner /1000000000000000000 
        deployer_balance = deployer_balance /  1000000000000000000

        getBalanceOfOwner = Math.ceil(getBalanceOfOwner.toString())
        deployer_balance = Math.ceil(deployer_balance) 
        assert.equal(getBalanceOfOwner,deployer_balance)
        // // assert.equal(getBalanceOfOwner.toNumber(),deployer_balance)
        // assert.equal(web3.utils.toWei(Math.round(getBalanceOfOwner.toString(),'Ether')),Math.round(web3.utils.toWei(deployer_balance.toString(),"Ether")))
        console.log("#################################")
    })

    it("checks if the getBalanceOfSender functionality works",async() => {
        console.log("Balance Test Running Phase Four");
        var getBalanceOfSender = await this.balance.getBalanceOfSender({from:user})
        var user_balance = await web3.eth.getBalance(user)
        getBalanceOfSender =  getBalanceOfSender.toString() / 1000000000000000000
        user_balance = user_balance / 1000000000000000000

        getBalanceOfSender = Math.round(getBalanceOfSender)
        user_balance = Math.round(user_balance) 
        console.log("Balance of Sender", getBalanceOfSender)
        assert.equal(getBalanceOfSender,user_balance)
        console.log("#################################")
    })

    
});