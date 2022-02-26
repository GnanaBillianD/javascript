class Rectangle {
    static logNbSides() {
        return 'I have 4 sides';
    }
}

class Square extends Rectangle {
    static logDescription() {
        return super.logNbSides() + ' which are all equal';
    }
}
console.log(Square.logDescription()); // 'I have 4 sides which are all equal'
