class President{
    constructor(name, country) {
        this.name = name;
        this.country = country;
    }
    displayPresident() {
        console.log(`President: ${this.name}`);
        console.log(`Country: ${this.country}`);
    }
}
const president1 = new President("Uhuru", "Kenya");

president1.displayPresident();