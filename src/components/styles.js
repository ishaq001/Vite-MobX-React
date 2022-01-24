/** @format */

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  mainBox: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  paper: {
    display: 'flex',
    padding: '30px',
    width: '60%',
    marginTop: '20px',
  },
  checkboxContainer: {
    width: '100%',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    marginTop: '10px',
  },
  formControl: {
    minWidth: '95%',
  },
});

export default useStyles;
