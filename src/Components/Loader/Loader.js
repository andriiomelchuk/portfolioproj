import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import styles from './loader.module.css';

export default function CircularIndeterminate() {
    return (
        <div className={styles.overlay}>
            <Box sx={{display: 'flex'}} className={styles.loaderContainer}>
                <CircularProgress/>
            </Box>
        </div>
    );
}