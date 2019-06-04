var sqlMap = {
    user: {
        add: 'insert into user (username, account, password, repeatPass, email, phone, address, data, sex) values (?,?,?,?,?,?,?,?,?)',
        select_name: 'select * from user', 
        update_user: 'update user set'
    },
    shoplist: {
        add: 'insert into shoplist(shopname,shopaddress,shopnote,shopassess,shopsale,shopclass)  values (?,?,?,?,?,?,?,?,?)',
        select_name: 'select * from shoplist', 
        update_user: 'update shoplist set'
    }
}

module.exports = sqlMap;