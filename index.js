// Определние роли (1 задание, switch)

const role = "superadmin";

let level;

switch (role) {
    case 'user':
    case 'client':
        level = 1;
        break;
    case 'admin':
    case 'manager':
        level = 2;
        break;
    case 'superadmin':
        level = 3;
        break;
        default:
            level = 0;
}

console.log(` Уровень вашей роли : ${level} (${role})`);