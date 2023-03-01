class Exersice {
    #data = {};
    #id = null;
    
    setData(data) {
        this.#data = data;
    }

    getData() {
        return this.#data;
    }

    getId() {
        return this.#id;
    }

   /* createButton(isDelete) {
        const button = document.createElement('button');

        button.setAttribute('type', 'button');
        button.classList.add('btn');
        button.classList.add(isDelete ? 'btn-danger' : 'btn-warning');
        button.innerText = isDelete ? '🗑️' : '✏️';

        return button;
    }*/

    setNode({ title, date, day, weight, repeat, attempt }) {
        const tr = document.createElement('tr');

        const html = `
        <th scope="row">${title}</th>
        <td>${weight + 'x' + repeat}</td> 
        <td>${attempt /*? '⭐' : ''*/}</td>
        <td>${day + '/' + date}</td>
        <td>
          <div class="btn-group" role="group">
          </div>
        </td>
        `;


    
    tr.insertAdjacentHTML('beforeend', html);
    /*const btnGroup = tr.querySelector('.btn-group');
    const editButton = this.createButton(false);
    const deleteButton = this.createButton(true);
    
    btnGroup.append(editButton, deleteButton);*/
    
    this.node = tr;
    }

    constructor(data) {
        this.setData(data);
        this.#id = Date.now();
        this.setNode(data);

    }
}

export default Exersice;