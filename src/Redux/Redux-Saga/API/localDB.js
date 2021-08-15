
let SQLite = require('expo-sqlite');
let db = SQLite.openDatabase('./dbmyhou.db');

async function getUserInDbExec() {
    return await new Promise((resolve, reject) => {
        console.log('db')
        db.transaction(async (tx) => {
            // await new Promise((resolve, reject) => {
            console.log('vao db')
            await tx.executeSql('SELECT * FROM user LIMIT 1 OFFSET 0', [], (tx, results) => {
                 console.log("Query completed");
                // Get rows with Web SQL Database spec compliance.
                let res = {
                    len: 0,
                    username: '',
                    access_token: '',
                    access_token_stringee: '',
                    type_account:0,
                    access_token_mbaas:'',
                    unit:''
                };

                let len = results.rows.length;
                if (len === 0) {
                    res.len = 0;
                } else {
                    res.len = len;
                    for (let i = 0; i < len; i++) {
                        let row = results.rows.item(i);
                        res.username = row.username;
                        res.access_token = row.access_token;
                        res.access_token_stringee = row.access_token_stringee;
                        res.type_account = row.type_account;
                        res.access_token_mbaas = row.access_token_mbaas;
                        res.unit = row.unit;

                        console.log(`username: ${row.username} access_token: ${row.access_token} access_token_stringee: ${row.access_token_stringee} type: ${row.type_account} access_token_mbaas: ${row.access_token_mbaas}`);
                    }
                }
                resolve(res);
            });
        });
    });
}

function* getUserInDB() {

    var res = {
        len: 0,
        username: '',
        access_token: '',
        access_token_stringee: '',
        access_token_mbaas:'',
        type_account:0,
        unit:''
    };
    console.log("Start get current user in db");
    yield getUserInDbExec().then((resolve) => {
        res = resolve;
        // console.log("function then: " + resolve.len);
    });
    console.log("Start get current user in db: " + res.len);
    return res;
}

function* deleteUserInDB() {
    db.transaction(async (tx) => {
        let sql = 'delete from  user where id = 1';
        tx.executeSql(sql, [], (tx, results) => {
            console.log("delete current user to db success");
        });
        // })
    });
}

function* saveUserToDB(user) {
    db.transaction(async (tx) => {
        // await new Promise((resolve, reject) => {
        let sql = 'insert or replace into  user(id, username, access_token, access_token_stringee, type_account, access_token_mbaas, unit) values(1,\'' + user.username + '\',\'' + user.access_token + '\',\'' + user.access_token_stringee + '\','+user.type_account+',\''+user.access_token_mbaas+'\',\'' + user.unit + '\')';
        tx.executeSql(sql, [], (tx, results) => {
            console.log("insert current user to db success");
            console.log("insertId: " + results.insertId);
            console.log("rowsAffected: " + results.rowsAffected);
            console.log("rowsAffected: " + results.user);
        });
        // })
    });
}

function* updateTokenStringEE(access_token_stringee) {
    db.transaction(async (tx) => {
        // await new Promise((resolve, reject) => {
        let sql = 'update user set access_token_stringee = \'' + access_token_stringee + '\' where id = 1';
        tx.executeSql(sql, [], (tx, results) => {
            console.log("updated token stringee");
        });
        // })
    });
}

export const localDB = {
    getUserInDB,
    saveUserToDB,
    deleteUserInDB,
    updateTokenStringEE
}
