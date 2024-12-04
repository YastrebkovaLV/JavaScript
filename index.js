// Маппер (3 задание, switch)

let myStatus = "notaccepted";

switch (myStatus) {
    case "approved":
        myStatus = "approved";
        break;
    case "pending":
        myStatus = "pending";
        break;
    case "moderation":
        myStatus = "pending";
        break;
    case "waiting":
        myStatus = "pending";
        break;
    case "declined":
        myStatus = "declined";
        break;
    case "rejected":
        myStatus = "declined";
        break;
    case "notaccepted" :
        myStatus = "declined";
        break;
        default:
            myStatus = "pending";

}

console.log(`Внешний статус : ${myStatus}`);