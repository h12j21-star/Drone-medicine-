import {Account}  from './Account.js';
let accounts =[]
function addAccount(id,pw){
    let _account = new Account(id,pw);
    accounts.push(_account);
}
function findAccount(id,pw){
    let result = accounts.find(account => account.id === id);
    if (result == null){
        return 0;
    } else if (result.pw !== pw){
        return -1;
    }else{
        return 1;
    }
}
export {addAccount, findAccount};