// Sponge Bob (2 задание, switch)

const bob = "patrick";

switch(bob.toLowerCase()) {
    case "spongebob":
        console.log("| ( · ) ( · ) | ");
        break;
    case "patrick":
        console.log("/ ( · ) ( · ) \\ ");
        break;
    case "squidward" :
        console.log("( ( · ) ( · ) )");
        break;
    case "plankton" :
        console.log("| ( · ) |");
        break;
    case "mr.crabs":
        console.log("| · | | · |");
        break;
        default:
            console.log(" Персонажа нет ");
}