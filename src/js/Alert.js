class Alert {
    showAlert(text, isError) {
        const className = isError ? 'alert-danger' : 'alert -success' 

        this.node.classList.remove('hidden');
        this.node.classList.add(className)
        this.node.innerText = text;

        setTimeout(() => {
            this.node.classList.add('hidden');
            this.node.classList.remove(className);
        }, 3000);
    }   

    constructor() {
        this.node = document.getElementById('alert');
    }
}

export default Alert;