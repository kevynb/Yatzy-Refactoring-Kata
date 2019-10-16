export default class Yatzy {
    private readonly dice: ReadonlyArray<number>;

    constructor(d1: number, d2: number, d3: number, d4: number, d5: number) {
        this.dice = [d1, d2, d3, d4, d5];
    }

    chance(): number {
        return this.dice.reduce((sum, face) => {
            return sum + face;
        }, 0);
    }

    yatzy(): number {
        if (isIdentical(this.dice)) {
            return 50
        }
        return 0;
    }

    ones(): number {
        return this.sumOf(1);
    }

    twos(): number {
        return this.sumOf(2);
    }

    threes(): number {
        return this.sumOf(3);
    }

    fours(): number {
        return this.sumOf(4);
    }

    fives(): number {
        return this.sumOf(5);
    }

    sixes(): number {
        return this.sumOf(6);
    }

    scorePair(): number {
        return this.scoreOfAKind(2);
    }

    fourOfAKind(): number {
        return this.scoreOfAKind(4);
    }

    threeOfAKind(): number {
        return this.scoreOfAKind(3);
    }

    two_pair(): number {
        const occurrences = this.countDieOccurrences();

        let pairsFound = 0;
        let score = 0;
        for (let die = 6; die > 0; die -= 1) {
            if (occurrences[die] >= 2) {
                pairsFound++;
                score += die + 1;
            }
        }
        if (pairsFound == 2) {
            return score * 2;
        }
        return 0;
    }

    smallStraight(): number {
        const occurrences = this.countDieOccurrences();
        if (isIdentical(occurrences.slice(0, 5))) {
            return 15
        }
        return 0;
    }

    largeStraight(): number {
        const occurrences = this.countDieOccurrences();
        if (isIdentical(occurrences.slice(1))) {
            return 20
        }
        return 0;
    }

    fullHouse(): number {
        let hasPair = false;
        let pairValue = 0;
        let has3OfAKind = false;
        let thriceValue = 0;

        const occurrences = this.countDieOccurrences();

        for (let die = 0; die != 6; die += 1) {
            if (occurrences[die] == 2) {
                hasPair = true;
                pairValue = die + 1;
            }
            if (occurrences[die] == 3) {
                has3OfAKind = true;
                thriceValue = die + 1;
            }
        }
        if (hasPair && has3OfAKind) {
            return pairValue * 2 + thriceValue * 3;
        }
        return 0;
    }

    private scoreOfAKind(minimumQuantity: number): number {
        const occurrences = this.countDieOccurrences();

        for (let dieIndex = 6; dieIndex > 0; dieIndex -= 1) {
            if (occurrences[dieIndex] >= minimumQuantity) {
                const dieValue = dieIndex + 1;
                return dieValue * minimumQuantity
            }
        }
        return 0;
    }

    private countDieOccurrences(): ReadonlyArray<number> {
      return this.dice.reduce((counts, die) => {
          counts[die - 1]++;
          return counts;
        }, Array(6).fill(0));
    }

    private sumOf(expectedValue: number): number {
        return this.dice.filter(die => die === expectedValue).length * expectedValue;
    }
}

function isIdentical(array: ReadonlyArray<number>) {
    return array.every(x => x === array[0]);
}
