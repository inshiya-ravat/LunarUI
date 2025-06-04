import { ThemeProvider } from '@emotion/react';

import { Camera } from '../lib/main';
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
        <Camera
          action={() => alert('captured image')}
          className="camera-container"
        />
      </ThemeProvider>
    </>
  );
}

export default App;
