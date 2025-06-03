import { ThemeProvider } from '@emotion/react';

import { Button, Camera } from '../lib/main';
import './App.css';

function App() {
  const theme = {
    Colors: {
      primary: 'skyblue',
    },
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Button variant="outlined">hi</Button>
        <Camera/>
      </ThemeProvider>
    </>
  );
}

export default App;
