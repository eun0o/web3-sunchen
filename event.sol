pragma solidity ^0.5.0;

contract Event {
    
    event EventCall(address who);
    
    function call() public {
        emit EventCall(msg.sender);
    }
}
