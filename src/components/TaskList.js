// src/components/TaskList.js

import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

function TaskList({ tasks, onSelectTask, selectedTaskId }) {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Tasks
      </Typography>
      <List>
        {tasks.map((task) => (
          <ListItem
            button
            key={task.id}
            onClick={() => onSelectTask(task)}
            selected={selectedTaskId === task.id}
          >
            <ListItemText primary={task.title} secondary={task.description} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default TaskList;