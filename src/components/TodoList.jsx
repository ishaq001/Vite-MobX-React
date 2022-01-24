/** @format */

import { Alert, List, ListItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { observer } from 'mobx-react-lite';
import React from 'react';
import Store from '../Store/Todo';
import AddTodoForm from './AddTodoForm';
import TodoItem from './TodoItem';

function TodoList() {
  //TodoList contains some text headings and list ITem component that it will render
  // to get the idea of mobx Store go to the Store Directory
  return (
    <Box>
      <Box>
        <AddTodoForm />
      </Box>

      <Box mt={2}>
        {Store.todos.length > 0 ? (
          <>
            <Typography variant="h5">Current Todos</Typography>
            <Typography variant="p">
              The current number of Todos {Store.todosLength}
            </Typography>
            <Box mt={4} display={'flex'} justifyContent={'center'}>
              <Alert severity="info">
                To delete a todo, it needs to be completed first!
              </Alert>
            </Box>
          </>
        ) : (
          <Box display={'flex'} justifyContent={'center'}>
            <Typography variant="h6" borderBottom={'2px solid green'}>
              Add you FIRST todo....
            </Typography>
          </Box>
        )}
      </Box>
      <List>
        {/* getting todos from MobX store */}
        {Store.todos.map((todo) => (
          <ListItem key={todo.id}>
            <TodoItem todo={todo} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
export default observer(TodoList);
