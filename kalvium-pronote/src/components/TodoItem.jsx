import React from 'react'
import '../App.css'

class TodoItem extends React.Component{
    render(){
        console.log('props:', this.props);
        let {e, i, updateItem, deleteItem} = this.props
        return (
            <>
            <div key={i} className='toDo'>
            <input type="text" value={e} onChange={(ev)=>{
            updateItem(ev.target.value, i)
            }}/>
            <button className="Delete" onClick={()=> deleteItem(i)}>Delete</button>
            </div>
            </>
        )
    }
}

export default TodoItem