pragma solidity >=0.4.21 <0.6.0;


contract Random{
    uint public randNonce = 0;


    function getRandomNumber()public  returns(uint){
        uint rand = uint(keccak256(abi.encodePacked(now, msg.sender, randNonce)));
         randNonce++;        
        return rand;
    }
}