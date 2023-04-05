export class Account {
    constructor(id, pw) {
        this.id = id;
        this.pw = pw;
    }

}


//https://ko.javascript.info/import-export
// 이거 리스트를 만들고, 로그인 할때마다 찾은 다음, id 가 없으면 id 없음 pw 틀리면 pw 틀림으로 값 변경 accounts.push(account);