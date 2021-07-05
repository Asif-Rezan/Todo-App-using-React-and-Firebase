import React from 'react';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import "./Todo.css";
import db from '../firebase'


export default function Todo(props) {
  return (
    <List className="todo_list">
      <ListItem>
        <ListItemText primary={props.todo.todo} secondary="Dummy deadline"></ListItemText>
      </ListItem> 
      <button onClick={e=>db.collection('todos').doc(props.todo.id).delete()}>Delete</button>
       
    </List>  
  )
} 
