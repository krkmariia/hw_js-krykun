const friends = ["bohdan", "mark", "artem", "vova", "ivan"];
// friends[3] = "sasha";
for (const friend of friends) {
    if (friend === "vova") {
        console.log("Найкращого друга знайдено!");
        break;
    } else {
        console.log("Найкращого друга не знайдено!");
    }
}