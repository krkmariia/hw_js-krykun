const ADMIN_PASSWORD = 'jqueryismyjam';
let message = prompt("ADMIN_PASSWORD");
if (message ===null){
message = `скасовано користувачем`;
}
else if (message ===`jqueryismyjam`){
message = `Ласкаво просимо!`;
}
else {
    message = `Доступ заборонений, невірний пароль!`;
}
alert(message);