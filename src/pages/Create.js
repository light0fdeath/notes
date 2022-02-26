import React from 'react';
import { Typography, Button, Container } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function Create() {
  return (
    <Container>
      <Typography variant='h4' color='textSecondary'>
        Create a new note
      </Typography>
      <Button
        onClick={() => console.log('You clicked me')}
        type='submit'
        color='secondary'
        variant='contained'
        endIcon={<SendIcon />}
      >
        Submit
      </Button>
    </Container>
  );
}
