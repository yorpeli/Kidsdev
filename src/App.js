import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Container, Box, Typography, Paper, Grid, Divider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import CodeEditor from './components/CodeEditor';
import TaskList from './components/TaskList';
import TaskElements from './components/TaskElements';
import { mockTasks } from './mockData/mockTasks';

const theme = createTheme({
  // We can customize the theme here later
});

function App() {
  const [selectedTask, setSelectedTask] = useState(mockTasks[0] || null);

  const handleSelectTask = (task) => {
    setSelectedTask(task);
  };


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            KidsDev App
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Box sx={{ flex: 1 }}>
              <TaskList
                tasks={mockTasks}
                onSelectTask={handleSelectTask}
                selectedTaskId={selectedTask.id}
              />
            </Box>
            <Box sx={{ flex: 2 }}>
              <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
                <Typography variant="h6" gutterBottom>
                  {selectedTask.title}
                </Typography>
                <Typography variant="body1" paragraph>
                  {selectedTask.description}
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Objective:</strong> {selectedTask.objective}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <TaskElements
                  htmlElements={selectedTask.htmlElements}
                  cssElements={selectedTask.cssElements}
                  jsElements={selectedTask.jsElements}
                />
                <Divider sx={{ my: 2 }} />
                <Typography variant="body1">
                  <strong>Hints:</strong>
                </Typography>
                <ul>
                  {selectedTask.hints.map((hint, index) => (
                    <li key={index}>{hint}</li>
                  ))}
                </ul>
              </Paper>
              <CodeEditor task={selectedTask} />
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;