// const App = {
//     data: "Singleton data"
// }
// console.log(App.data)
// App.data = "Changed";
// console.log(App.data)

const Game = {
    score: 0,
    level: 1,

    addScore(points){
        this.score += points;
        console.log(`Score: ${this.score}`)
    },

    nextLevel(){
        this.level++;
        console.log(`Level: ${this.level}`);
    }
}

Game.addScore(10);
Game.addScore(5);
Game.nextLevel();

const fakeGame = Game;
fakeGame.addScore(20);

console.log(Game.score);
