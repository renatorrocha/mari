import './App.css'
import { Button, Typography } from '@mui/material'

function App() {
  
  return (
    <>
        <Typography variant='h1'>Quer Casar comigo Amor?</Typography>
        <Button variant="contained" size='large' color='success' sx={{margin:2}}>Eu quero</Button>
        <Button variant="outlined" size='large' color='error'>Eu te odeio, morra!</Button>
    </>
  )
}


export default App
