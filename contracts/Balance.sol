pragma solidity >=0.4.21 <0.6.0;


contract Balance{
    address owner;


    constructor() public{
        owner = msg.sender;
    }


    modifier onlyOwner(){
        // only owner modifiew
        require(msg.sender == owner);
        _;
    }

    function getBalanceOfContract() public view returns(uint){
        return address(this).balance;
    }

    function  getBalanceOfOwner() public view returns(uint){
        return owner.balance;        
    }

    function getBalanceOfSender() public view returns(uint){
        return msg.sender.balance;
    }
    
}