import React, { useState } from 'react';
import { Typography, Button, Container, FormControlLabel } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
  },
});

export default function Create() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState('todos');

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitleError(false);
    setDetailsError(false);

    if (title == '') {
      setTitleError(true);
    }
    if (details == '') {
      setDetailsError(true);
    }

    if (title && details) {
      fetch('http://localhost:8002/notes/', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ title, details, category }),
      }).then(() => navigate('/'));
    }
  };

  return (
    <Container>
      <Typography variant='h4' color='textSecondary'>
        Create a new note
      </Typography>
      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label='Note Title'
          variant='outlined'
          color='secondary'
          fullWidth
          required
          error={titleError}
        />

        <TextField
          onChange={(e) => setDetails(e.target.value)}
          marginbottom='20px'
          label='Details'
          variant='outlined'
          color='secondary'
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        ></TextField>
        <FormControl className={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel value='money' control={<Radio />} label='Money' />
            <FormControlLabel value='todos' control={<Radio />} label='Todos' />
            <FormControlLabel
              value='remainders'
              control={<Radio />}
              label='Remainders'
            />
            <FormControlLabel value='work' control={<Radio />} label='Work' />
          </RadioGroup>
        </FormControl>
        <br></br>

        <Button
          type='submit'
          variant='contained'
          color='primary'
          endIcon={<SendIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
