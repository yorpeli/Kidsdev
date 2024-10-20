// src/components/TaskElements.js

import React from 'react';
import { Typography, Chip, Box } from '@mui/material';

function TaskElements({ htmlElements = [], cssElements = [], jsElements = [] }) {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>Elements Covered:</Typography>
      <Box mb={2}>
        <Typography variant="subtitle1">HTML:</Typography>
        {htmlElements.map((element, index) => (
          <Chip key={index} label={element} color="primary" variant="outlined" style={{ margin: '0 4px 4px 0' }} />
        ))}
      </Box>
      <Box mb={2}>
        <Typography variant="subtitle1">CSS:</Typography>
        {cssElements.map((element, index) => (
          <Chip key={index} label={element} color="secondary" variant="outlined" style={{ margin: '0 4px 4px 0' }} />
        ))}
      </Box>
      <Box mb={2}>
        <Typography variant="subtitle1">JavaScript:</Typography>
        {jsElements.map((element, index) => (
          <Chip key={index} label={element} color="default" variant="outlined" style={{ margin: '0 4px 4px 0' }} />
        ))}
      </Box>
    </Box>
  );
}

export default TaskElements;