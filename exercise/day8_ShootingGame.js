class ShootingGame {
    constructor(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
    }

    getRandomItem() {
        const item = Math.floor(Math.random() * 2);
        if (item < 1) {
            return {hp: 10, power: 0,};
        } else {
            return {hp: 0, power: 10,};
        }
    }

    start() {
        let turn = 1;

        while (this.p1.hp > 0 && this.p2.hp > 0) {
            console.log();
            console.log(`Turn ${turn}`);
            this.p1.showStatus();
            this.p2.showStatus();
            this.p1.useItem(this.getRandomItem());
            this.p2.useItem(this.getRandomItem());
            console.log("Shooting round!");
            this.p1.hit(this.p2.power);
            this.p2.hit(this.p1.power);
            this.p1.showStatus();
            this.p2.showStatus();
            turn ++;
        }

        if (this.p1.hp <= 0 && this.p2.hp <= 0) {
            console.log("Game ended in a draw!");
        } else if (this.p1.hp > 0) {
            console.log(this.p1.nama + " Wins!");
        } else {
            console.log(this.p2.nama + " Wins!");
        }
    }
}

class Player {
    constructor(nama, hp = 100, power = 10) {
        this.nama = nama;
        this.hp = hp;
        this.power = power;
    }

    hit(hitPower) {
        this.hp -= hitPower;
    }

    useItem(item) {
        this.hp += item.hp;
        this.power += item.power;
    }

    showStatus() {
        console.log(this.nama + " HP: " + this.hp);
        console.log(this.nama + " Power: " + this.power);
    }
}

const player1 = new Player("James");
const player2 = new Player("Jessie");

const game = new ShootingGame(player1, player2);

console.log(player1);
console.log(player2);

game.start();