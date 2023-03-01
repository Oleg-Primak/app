import Form from './Form';
import Alert from './Alert';
import Exersice from './Exersice';
import Table from './Table';


document.addEventListener('DOMContentLoaded', ()=> {
    const form = new Form();
    const alert = new Alert();
    const table = new Table();
  

    form.node.addEventListener('submit', (e) => {
        e.preventDefault();

        try {
            const data = form.getData();
            const exersice = new Exersice(data);

            form.clear();
            table.addMovie(exersice);
            console.log(table);
           
            
        } catch (e) {
            alert.showAlert(e.message, true);
        }
    });
});