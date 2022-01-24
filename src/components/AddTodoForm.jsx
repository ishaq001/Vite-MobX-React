/** @format */

import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  Paper,
} from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import Store from '../Store/Todo';
import { generateRandomId } from '../utils';
import useStyles from './styles';

function AddTodoForm() {
  const id = generateRandomId();
  const [todo, setTodo] = useState({
    id: '',
    name: '',
  });
  const handleChange = (e) => setTodo({ ...todo, id, name: e.target.value });
  const handleClick = (e) => {
    e.preventDefault();
    Store.addTodo(todo);
    setTodo({ id: '', name: '' });
  };

  const classes = useStyles();
  return (
    <Box className={classes.mainBox}>
      <Paper elevation={3} className={classes.paper}>
        <Box className={classes.checkboxContainer}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="add-todo">Add Todo</InputLabel>
            <Input
              id="add-todo"
              type="text"
              value={todo.name}
              onChange={handleChange}
            />
          </FormControl>
        </Box>
        <Box className={classes.buttonContainer}>
          <Button
            title="Add todo"
            color="primary"
            width={'109px'}
            variant="outlined"
            onClick={handleClick}
          >
            Add Todo
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default observer(AddTodoForm);
