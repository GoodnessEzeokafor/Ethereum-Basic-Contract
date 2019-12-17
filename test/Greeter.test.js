require('chai')
    .use(require('chai-as-promised'))
    .should()

const Greeter = artifacts.require("./Greeter.sol")
contract("Greeter", ([deployer, user]) => {
    console.log("Hello World!!!");

    before(async()=> {
        this.contract = await Greeter.deployed()

    })

    // checks
    it("checks if the contract deployed successfully", async() =>{
        console.log("Running Test Phase 1");

        const address = this.contract.address
        assert.notEqual(address,0x0)
        assert.notEqual(address,'')
        assert.notEqual(address,null)
        assert.notEqual(address,undefined)      
        console.log("########################")
    })
   it("checks if the greeting property was set",async() => {
        console.log("Running Test Phase Three")
        const initial_greeting = await this.contract.greeting()
        assert.equal(initial_greeting,"WHATS UP")
        console.log("########################") 
    })
    it("checks if the owner property was set", async() => {
        console.log("Running Test Phase Four")
        const deployer_address = await this.contract.owner()
        assert.equal(deployer_address, deployer)
        console.log("########################")
    })

    it("checks if the setGreeting functionality works, msg.sender must be equals to the deployer", async() => {
        console.log("Running Test Phase Four")
        // const newGreeting = 
        await this.contract.setGreeting("New Greeting",{'from':user}).should.be.rejected
        console.log("########################")
    })

    it("checks if the setGreeting functionality works, msg.sender must be equals to the deployer", async() => {
        console.log("Running Test Phase Four")
        // const newGreeting = 
        const newGreeting =  await this.contract.setGreeting("New Greeting",{'from':deployer})
        const greeting = await this.contract.greeting()
        const owner = await this.contract.owner()
        assert.equal(greeting, "New Greeting")
        assert.equal(owner, deployer)
        console.log("########################")
    })

    it("checks if the sayHhello  functionality works for the deployer", async() => {
        console.log("Running Test Phase Five")
        const sayHello = await this.contract.sayHello({'from':deployer})
        assert.equal(sayHello, "Hello World")  
        console.log("########################")
    })

    it("checks if the sayHello  functionality works for the other user", async() => {
        console.log("Running Test Phase Five")
        const sayHello = await this.contract.sayHello({'from':user})
        assert.equal(sayHello, "New Greeting")  
        console.log("########################")
    })

    
    
})