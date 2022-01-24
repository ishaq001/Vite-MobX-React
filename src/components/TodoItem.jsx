/** @format */

import React, { useState } from 'react';
import {
  FormControlLabel,
  FormGroup,
  Checkbox,
  Typography,
  Button,
  Box,
  Paper,
} from '@mui/material';
import useStyles from './styles';
import { Delete, Edit } from '@mui/icons-material';
import { observer } from 'mobx-react-lite';
import DeleteModal from './DeleteModal';
import UpdateModal from './UpdateModal';
import Store from '../Store/Todo';

function TodoItem({ todo }) {
  //todo Item contains the item related data and edit and delete modals.

  const [deleteModal, setDeleteModal] = useState(false);
  const openDelete = () => setDeleteModal(true);
  const closeDelete = () => setDeleteModal(false);

  const [updateModal, setUpdateTodo] = useState(false);
  const openUpdate = () => setUpdateTodo(true);
  const closeUpdate = () => setUpdateTodo(false);

  const [checkbox, setCheckbox] = useState(Store.completed);
  function handleCheckboxChange(e) {
    setCheckbox(e.target.checked);
    Store.todoCompleted();
  }

  const { id, name } = todo;

  const classes = useStyles();
  return (
    <Box className={classes.mainBox}>
      {deleteModal && (
        <DeleteModal
          id={id}
          deleteModal={deleteModal}
          closeDelete={closeDelete}
        />
      )}
      {updateModal && (
        <UpdateModal
          closeUpdate={closeUpdate}
          updateModal={updateModal}
          todo={todo}
        />
      )}

      <Paper elevation={3} className={classes.paper}>
        <Box className={classes.checkboxContainer}>
          <FormGroup>
            <FormControlLabel
              style={{ textDecoration: checkbox && 'line-through' }}
              onChange={handleCheckboxChange}
              value={checkbox}
              control={<Checkbox />}
              label={name || 'Todo Label'}
            />
          </FormGroup>
        </Box>
        <Box className={classes.buttonContainer}>
          {checkbox && (
            <Button
              variant="outlined"
              onClick={openDelete}
              startIcon={<Delete />}
              color="error"
            >
              Delete
            </Button>
          )}
          <Button
            variant="outlined"
            endIcon={<Edit />}
            color="primary"
            onClick={openUpdate}
          >
            Edit
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
export default observer(TodoItem);
