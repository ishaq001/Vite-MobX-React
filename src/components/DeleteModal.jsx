/** @format */

import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { observer } from 'mobx-react-lite';
import Store from '../Store/Todo';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  borderRight: '4px solid red',
  borderLeft: '4px solid red',
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
};
function DeleteModal({ id, closeDelete, deleteModal }) {
  function handleDeleteClick() {
    return Store.deleteTodo(id);
  }

  console.log('dlete');
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        open={deleteModal}
        onClose={closeDelete}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={deleteModal}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Are you sure you want to delete this todo?
            </Typography>
            <Button
              style={{ marginTop: '20px' }}
              color="success"
              onClick={handleDeleteClick}
              variant="contained"
            >
              Yes
            </Button>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default observer(DeleteModal);
