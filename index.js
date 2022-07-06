const prompt = require("prompt-sync")({ sigint: true});
class PacMan {
    constructor() {
        this.board = [
            ['x', 'x', 'x'],
            ['x', 'x', 'x'],
            ['x', 'x', 'x'],
        ]
        this.currentPosition = [0, 0];
    }

    mvRight() {
        if () {
            
        }
        this.currentPosition[0]++;
    }

    mvLeft() {
        this.currentPosition[0]--;
    }

    mvUp() {
        this.currentPosition[1]--;
    }

    mvDown() {
        this.currentPosition[1]++;
    }


    printBoard() {
        console.log(this.board.map(y => y.join('')).join('\n'))
    }
}

const pacman = new PacMan();

while (true) {
    const input = prompt('Which Way (l, r, u, d): ');
    switch (input) {
        case 'l':
            pacman.mvLeft();
            break;
        case 'r':
            pacman.mvRight();
            break;
        case 'u':
            pacman.mvUp();
            break;
        case 'd':
            pacman.mvDown();
            break;
    }
    console.log('currentPosition', pacman.currentPosition);

}
// pacman.printBoard();
// console.log('currentPosition before move', pacman.currentPosition);
// pacman.mvRight();
