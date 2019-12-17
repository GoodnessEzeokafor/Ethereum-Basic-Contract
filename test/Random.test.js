const Random = artifacts.require("./Random.sol")


contract("Random", ([deployer, user]) => {
    console.log("Hello World!!!");

    before(async()=> {
        this.random = await Random.deployed()
    })

    // checks
    it("checks if the contract deployed successfully", async() =>{
        console.log("Running Test Phase 1");

        const address = this.random.address
        assert.notEqual(address,0x0)
        assert.notEqual(address,'')
        assert.notEqual(address,null)
        assert.notEqual(address,undefined)      
        console.log("########################")
    })
    it("checks if the getRandomNumber deployed successfully", async()=> {
        const randomNumber = await this.random.getRandomNumber()
        assert.notEqual(randomNumber.tx, "")
        assert.notEqual(randomNumber.tx, null)
        assert.notEqual(randomNumber.tx, 0x0)
    })
    
})