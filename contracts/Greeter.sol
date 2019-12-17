pragma solidity >=0.4.21 <0.6.0;


contract Greeter{
    string public greeting;
    address public owner;

    modifier onlyOwner{
        /// checks if its the owner performing the fuction
        require(isOwner(), "Only Owner Can Perform This Function");
        _;
    }


    constructor (string memory _greeting) public {
        greeting = _greeting;
        owner = msg.sender; // sets the deployer of the contract address to the property
    }

    function isOwner()view private returns(bool){
        // checks if the address calling the function is the person performing the function
        return msg.sender == owner;
    }

    function setGreeting(string memory _newGreeting) public onlyOwner{
        greeting = _newGreeting;
    }

    function sayHello() public view returns(string memory){
        if(isOwner()){
            // says only to the deployer address
            return  "Hello World";
        }else{
            return greeting;
        }
    }

}