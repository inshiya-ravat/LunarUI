import { ThemeProvider } from '@emotion/react';

import { Button } from '../lib/main';
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
      </ThemeProvider>
    </>
  );
}

export default App;
