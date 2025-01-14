import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Note = ({ note, onDelete, onEdit }) => {
    const { id, title, description, credits, schedule, time } = note;

    return (
        <Card sx={{
            maxWidth: 275,
            border: '1px solid #111222',
            borderRadius: '8px',
            bgcolor: '#f9ffff',
            backgroundImage:`url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%236e7072' fill-opacity='0.29' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");`
        }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                    Credits: {credits}
                </Typography>
                <Typography variant="body2">
                    {description}
                    <br />
                    {schedule}
                    <br />
                    {time}
                </Typography>
            </CardContent>
            <CardActions>
                <Stack direction="row" spacing={1.5}> 
                    <Button
                        variant="contained"
                        color="error"
                        size="small"
                        startIcon={<DeleteIcon />}
                        onClick={() => onDelete(id)}
                    >
                        Delete
                    </Button>
                    <Button
                        variant="contained"
                        color="success"
                        size="small"
                        startIcon={<UpdateIcon />}
                        onClick={() => onEdit(id)}
                    >
                        Update
                    </Button>
                </Stack>
            </CardActions>
        </Card>
    );
};

export default Note;
