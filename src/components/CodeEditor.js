import React, { useState, useEffect } from 'react';
import { Box, Tabs, Tab, Button, Paper } from '@mui/material';
import Editor from "@monaco-editor/react";

function CodeEditor({ task }) {
  const [activeTab, setActiveTab] = useState(0);
  const [htmlCode, setHtmlCode] = useState(task.htmlCode);
  const [cssCode, setCssCode] = useState(task.cssCode);
  const [jsCode, setJsCode] = useState(task.jsCode);
  const [output, setOutput] = useState('');

  useEffect(() => {
    setHtmlCode(task.htmlCode);
    setCssCode(task.cssCode);
    setJsCode(task.jsCode);
  }, [task]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleCodeChange = (value) => {
    switch(activeTab) {
      case 0:
        setHtmlCode(value);
        break;
      case 1:
        setCssCode(value);
        break;
      case 2:
        setJsCode(value);
        break;
      default:
        break;
    }
  };

  const handleRunCode = () => {
    const combinedCode = `
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>${jsCode}</script>
        </body>
      </html>
    `;
    setOutput(combinedCode);
  };

  const editorOptions = {
    fontSize: 14, // Increased font size
    minimap: { enabled: false }, // Optionally disable minimap for more space
    scrollBeyondLastLine: false, // Prevents scrolling beyond the last line
    lineNumbers: "on", // Enables line numbers
    wordWrap: "on", // Enables word wrap
    lineHeight: 24
  };


  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Box sx={{ flex: 1 }}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Tabs value={activeTab} onChange={handleTabChange} aria-label="code editor tabs">
            <Tab label="HTML" />
            <Tab label="CSS" />
            <Tab label="JavaScript" />
          </Tabs>
          <Box sx={{ mt: 2 }}>
            <Editor
              height="400px"
              language={activeTab === 0 ? "html" : activeTab === 1 ? "css" : "javascript"}
              value={activeTab === 0 ? htmlCode : activeTab === 1 ? cssCode : jsCode}
              onChange={handleCodeChange}
              options={editorOptions} 
            />
          </Box>
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" color="primary" onClick={handleRunCode}>
              Run Code
            </Button>
          </Box>
        </Paper>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Paper elevation={3} sx={{ p: 2, height: '100%' }}>
          <iframe
            title="output"
            srcDoc={output}
            style={{ width: '100%', height: '400px', border: 'none' }}
            sandbox="allow-scripts"
          />
        </Paper>
      </Box>
    </Box>
  );
}

export default CodeEditor;