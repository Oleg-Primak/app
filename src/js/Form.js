class Form {

    clear() {
        this.node[0].value = '';
        this.node[1].value = '';   
        this.node[2].value = '';
        this.node[3].value = '';
        this.node[4].value = '';
        this.node[5].value = '';
    }
    getData() { 
        console.log(this.node)
        const title = this.node[0].value;
        const date = this.node[1].value;
        const day = this.node[2].value;
        const weight = this.node[3].value;
        const repeat = this.node[2].value;
        const attempt = this.node[3].value;
        
 
        if (!title || !date || !day || !weight || !repeat || !attempt) {
            throw new Error("Вам необходимо заполнить все поля");
        }

        return {
            title: this.node[0].value,
            date: this.node[1].value,
            day: this.node[2].value,
            weight: this.node[3].value,
            repeat: this.node[4].value,
            attempt: this.node[5].value,
        };
    }

    constructor() {
        this.node = document.getElementById('form');
    }
}

export default Form;