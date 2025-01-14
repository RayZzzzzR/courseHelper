import { useState } from 'react';
import * as React from 'react';
import Note from './Card'; // Assuming you have a Note component for rendering individual notes
import { Button, Box, TextField, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';
import Grid2 from '@mui/material/Grid2';
import CardMedia from '@mui/material/CardMedia';
import axios from 'axios';


const NoteList = ({ notes, setNotes, onDelete }) => {
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [newCredits, setNewCredits] = useState('');
    const [newSchedule, setNewSchedule] = useState('');
    const [newTime, setNewTime] = useState('');
    const [editingNoteId, setEditingNoteId] = useState(null);

    const handleAddNote = () => {
        const newNote = {
            id: notes.length + 1,
            title: newTitle,
            description: newDescription,
            credits: newCredits,
            schedule: newSchedule,
            time: newTime,
        };
        setNotes([...notes, newNote]);
        setNewTitle('');
        setNewDescription('');
        setNewCredits('');
        setNewSchedule('');
        setNewTime('');
    };

    const handleUpdateNote = (id, updatedTitle, updatedDescription, updatedCredits, updatedSchedule, updatedTime) => {
        const updatedNotes = notes.map((note) =>
            note.id === id
                ? {
                      ...note,
                      title: updatedTitle,
                      description: updatedDescription,
                      credits: updatedCredits,
                      schedule: updatedSchedule,
                      time: updatedTime,
                  }
                : note
        );
        setNotes(updatedNotes);
        setEditingNoteId(null);
        setNewTitle('');
        setNewDescription('');
        setNewCredits('');
        setNewSchedule('');
        setNewTime('');
    };

    return (
        <Box sx={{
            bgcolor: '#f8f9fa',
            p: 3,
            width: '80vw',
            border: '2px solid #000',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            minHeight: '80vh',
            position: 'relative', 
            margin: '0 auto', 
        }}>

            {/* Title */}
            <Box sx={{ textAlign: 'center' ,color:'success.main'}}>

               {/*<img src='src\app\components\gdglogo.png'/>*/}
                <h1>
                    Course-Helper
                </h1>
            </Box>
            <Box sx={{ textAlign: 'center', mb: 2 }}>
            <h4>Little help in managing courses...</h4>
            </Box>

            {/* Log In Button */}
            <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Button
        variant="outlined"
        color="primary"
        href="/login"
    >
        Log In
    </Button>
            </Box>

            {/* Input Section */}
            <Grid2 container spacing={2} justifyContent="center" alignItems="center" sx={{ mb: 2 }}>
                <Grid2 xs={12} sm={6} md={4}>
                    <TextField
                        fullWidth
                        label="Title"
                        variant="outlined"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                    />
                </Grid2>
                <Grid2 xs={12} sm={6} md={4}>
                    <TextField
                        fullWidth
                        label="Description"
                        variant="outlined"
                        value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)}
                    />
                </Grid2>
                <Grid2 xs={12} sm={6} md={4}>
                    <TextField
                        fullWidth
                        label="Credits"
                        variant="outlined"
                        value={newCredits}
                        onChange={(e) => setNewCredits(e.target.value)}
                    />
                </Grid2>
                <Grid2 xs={12} sm={6} md={4}>
                    <TextField
                        fullWidth
                        label="Schedule"
                        variant="outlined"
                        value={newSchedule}
                        onChange={(e) => setNewSchedule(e.target.value)}
                    />
                </Grid2>
                <Grid2 xs={12} sm={6} md={4}>
                    <TextField
                        fullWidth
                        label="Time"
                        variant="outlined"
                        value={newTime}
                        onChange={(e) => setNewTime(e.target.value)}
                    />
                </Grid2>
            </Grid2>

            {/* Action Buttons */}
            <Box sx={{ textAlign: 'center', mb: 2 }}>
                {editingNoteId ? (
                    <Button
                        variant="contained"
                        startIcon={<DoneIcon />}
                        onClick={() =>
                            handleUpdateNote(
                                editingNoteId,
                                newTitle,
                                newDescription,
                                newCredits,
                                newSchedule,
                                newTime
                            )
                        }
                    >
                        Save
                    </Button>
                ) : (
                    <Button
                        variant="contained"
                        startIcon={<AddIcon />}
                        onClick={handleAddNote}
                    >
                        Add Course
                    </Button>
                )}
            </Box>

            {/* Cards Section (Flexbox and auto-expanding) */}
            <Box sx={{
                width: '100%',
                overflowY: 'auto',
                flexGrow: 1, // This allows Box to grow based on its content
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
            }}>
                <Grid2 container spacing={7} justifyContent="center">
                    {notes.map((note) => (
                        <Grid2 key={note.id} xs={12} sm={6} md={4}>
                            <Note
                                note={note}
                                onDelete={onDelete}
                                onEdit={() => {
                                    setNewTitle(note.title);
                                    setNewDescription(note.description);
                                    setNewCredits(note.credits);
                                    setNewSchedule(note.schedule);
                                    setNewTime(note.time);
                                    setEditingNoteId(note.id);
                                }}
                            />
                        </Grid2>
                    ))}
                </Grid2>
            </Box>
        </Box>
    );
};

export default NoteList;
