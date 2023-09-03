import './App.css'
import { Button, Typography } from '@mui/material'

function App() {
  
  return (
    <>
            <Typography variant='h1'>Oi Amor (Maria Clara),</Typography>
        <Typography variant='h1'>Quer Casar comigo Amor?</Typography>
        <Button variant="contained" size='large' color='success' sx={{margin:8}} onClick={()=>{ alert('Parabens amor agora vc esta casada comigo (Renato Rocha'); }}>Eu quero</Button>
        <Button variant="outlined" size='large' color='error' onClick={()=>{ window.open("about:blank", "_self");
window.close();}}>Eu te odeio, morra!</Button>
    </>
  )
}


export default App
