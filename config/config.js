require('dotenv').config({path: __dirname +  '/../.env'});

console.log( __dirname +  '/../.env');
console.log(process.env.DB_HOST);

module.exports = {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "mail_port": process.env.EMAIL_PORT,
    "mail_host": process.env.EMAIL_HOST,
    "mail_security": process.env.EMAIL_SECURITY,
    "from": process.env.EMAIL_FROM,
    "host": process.env.DB_HOST,
    "dialect": "mysql",
    "mail":  process.env.EMAIL,
    "mailPassword": process.env.EMAIL_PASS,
    "service":  process.env.EMAIL_SERVICE,
    "secret": "natanatanata",
    "url": "kindness.testing.softjourn.if.ua"
};