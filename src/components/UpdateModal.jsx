/** @format */

import {
  Backdrop,
  Button,
  Fade,
  FormControl,
  Input,
  InputLabel,
  Modal,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useStyles from './styles';
import Store from '../Store/Todo';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: '#fff',
  borderRight: '4px solid green',
  borderLeft: '4px solid green',
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
};
function UpdateModal({ updateModal, id, closeUpdate, todo }) {
  const [newTodo, setNewTodo] = useState({
    name: todo.name,
    id: todo.id,
  });
  console.log('updateModal,', updateModal, 'id', newTodo.id);
  function handleChange(e) {
    setNewTodo({ ...newTodo, name: e.target.value });
  }
  function handleClick(e) {
    e.preventDefault();
    Store.updateTodo(newTodo.id, newTodo);
    closeUpdate();
  }
  const classes = useStyles();
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      open={updateModal}
      onClose={closeUpdate}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={updateModal}>
        <Box sx={style}>
          <Box className={classes.checkboxContainer}>
            <Typography
              id="transition-modal-title"
              variant="h6"
              mt={3}
              mb={3}
              component="h2"
            >
              Update this todo...
            </Typography>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="update-todo">Update Todo</InputLabel>
              <Input
                id="update-todo"
                type="text"
                value={newTodo.name}
                onChange={handleChange}
              />
            </FormControl>
          </Box>
          <Box className={classes.buttonContainer}>
            <Button
              title="Update todo"
              color="primary"
              variant="outlined"
              onClick={handleClick}
            >
              {' '}
              Update Todo{' '}
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}

export default UpdateModal;
