import './CSS/Todoitems.css'
import check from './Assets/checked.png'
import uncheck from './Assets/unchecked.png'
import del from './Assets/delete.png'


const Todoitems = ({ number, display, text, setTodos }) => {
    
    const delet = (number) => {
        let data = JSON.parse(localStorage.getItem('todos'));
        data = data.filter((todo) => todo.number !== number)
        setTodos(data)
    }
    
    const toggle = () => {
        let data = JSON.parse(localStorage.getItem('todos'));
        for (let i = 0; i < data.length; i++) {
            if (data[i].number===number) {
                if (data[i].display==='') {
                    data[i].display = 'line-through';
                } 
                else {
                    data[i].display = '';
                }
                break;
            }
           
        }
        setTodos(data);
    }
  return (
      <div className='todo-items'>
          <div className={`todoitems-container ${display}`} onClick={() => {
              toggle(number)
      }}>
              { display===""?<img src={uncheck} alt=''/>:<img src={check} alt='' />}         
          <div className='todoitems-text'>{ text }</div>
        </div>
          <img className='todoitems-del-icon' onClick={() => {
              delet(number)
          }} src={del} alt=''/>
      </div>
  )
}

export default Todoitems