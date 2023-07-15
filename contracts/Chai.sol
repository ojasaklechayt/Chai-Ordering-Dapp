// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract chai{
    struct Memo{
        string name;
        string message;
        uint timestamp;
        address from;
        uint256 amount;
    }

    Memo[] memos;

    address payable owner;
    constructor(){
        owner = payable(msg.sender);
    }

    function buyChai(string calldata name,string calldata message) external payable{
        require(msg.value>0,"Please pay more than 0");
        owner.transfer(msg.value);   
        memos.push(Memo(name,message,block.timestamp,msg.sender,msg.value));  
    }

    function getMemos() public view returns(Memo[] memory){
        return memos;
    }
}