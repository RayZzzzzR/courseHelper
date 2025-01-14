'use client';
import React, { useState } from 'react';
import NoteList from './components/CardList';
import { Button, Typography, Box } from '@mui/material';
import './page.module.css';
import './globals.css';

const IndexPage = () => {
    const [notes, setNotes] = useState([
        {
            id: 1,
            title: 'MSO201',
            description: 'Probability & Statistics',
            credits: '11',
            schedule: 'M W(t) Th F',
            time: '9-10 AM',
        },
        {
            id: 2,
            title: 'EE210',
            description: 'Analog Electronics',
            credits: '11',
            schedule: 'M T(t) W F',
            time: '10-11 AM',
        },
        {
            id: 3,
            title: 'EE250',
            description: 'Control Systems Analysis',
            credits: '11',
            schedule: 'T W(t) Th F',
            time: '11-12 AM',
        },
        {
            id: 4,
            title: 'ESO203',
            description: 'Intro to Electrical Engineering',
            credits: '13',
            schedule: 'M T W(t) Th',
            time: '5-6 PM',
        },
        {
            id: 5,
            title: 'ECO111',
            description: 'Economy, Society & Public Policy',
            credits: '11',
            schedule: 'M T(t) W Th',
            time: '12-1 PM',
        },
        {
            id: 6,
            title: 'TA211',
            description: 'Manufacturing Processes 1',
            credits: '3',
            schedule: 'W only',
            time: '2-5 PM',
        }
    ]);

    const deleteNote = (id) => {
        setNotes(notes.filter((note) => note.id !== id));
    };

    return (
        <div>
            {/* Notes List - Make sure it's scrollable and doesn't push the header */}
            <Box sx={{ flex: 1, overflowY: 'auto' }}>
                <NoteList notes={notes} setNotes={setNotes} onDelete={deleteNote} />
            </Box>
        </div>
    );
};

export default IndexPage;
