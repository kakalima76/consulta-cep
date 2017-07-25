var cnn = function(){
        /*var username = process.env.USUARIO,
        password = process.env.SENHA,
        server = "ds060478.mongolab.com",
        port = "60478",
        database = "usuarios";*/
    
    var username = "",
        password = "",
        server = "localhost",
        port = "27017",
        database = "candidatos";
    
        return {
        "username": username,
        "password": password,
        "server": server,
        "port": port,
        "database": database
        }
}


var mongoose = new cnn();
module.exports = mongoose;