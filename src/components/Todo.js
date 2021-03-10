const Todo = ({todo, index, completeTodo, deleteTodo}) => {
    return ( 
        <div 
        className="todo"
        style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}
        >
            {todo.text}
            <div>
                <i onClick = {() => completeTodo(index)} style={{color: "green", padding: '10px'}} class="fa fa-check"></i>
                <i onClick = {() => deleteTodo(index)} style={{color: "red"}} class="fa fa-trash"></i>
            </div>
        </div>
     );
}
 
export default Todo;