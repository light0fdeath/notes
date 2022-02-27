import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Avatar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { pink, yellow, green, blue } from '@mui/material/colors';
import { StyledEngineProvider } from '@mui/material/styles';

const useStyles = makeStyles({
  avata: {
    background: (note) => {
      if (note.category == 'work') {
        return yellow[500];
      }
      if (note.category == 'money') {
        return green[500];
      }
      if (note.category == 'todos') {
        return pink[500];
      }
      return blue[500];
    },
  },
});

export default function NoteCard({ note, handleDelete }) {
  const classes = useStyles(note);

  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={
            <StyledEngineProvider injectFirst>
              <Avatar className={classes.avata}>
                {note.category[0].toUpperCase()}
              </Avatar>
            </StyledEngineProvider>
          }
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteIcon />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant='body1' color=''>
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
