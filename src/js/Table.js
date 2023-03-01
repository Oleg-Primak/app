class Table {
    #exersice = [];
    getA() {
        console.log(this.node1[0].value)
     }
    addMovie(exersice) {
        this.#exersice.unshift(exersice);
        if(this.node1[0].value === this.node1[2].value) {
        this.node.querySelector('tbody').prepend(exersice.node);
    }
}

    constructor() {
        this.node = document.getElementById('table');
        this.node1 = document.getElementById('form');
    }
}

export default Table;