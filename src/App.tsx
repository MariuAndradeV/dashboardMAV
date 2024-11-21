//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

import Grid from '@mui/material/Grid2' 

function App() {
//  const [count, setCount] = useState(0)

  return (
    <Grid container spacing={5}>

        {/* Indicadores */}
        <Grid size={{xs: 12, xl:3}}>Elemento: Indicador 1</Grid>
        <Grid size={{xs: 12, xl:3}}>Elemento: Indicador 2</Grid>
        <Grid size={{xs: 12, xl:3}}>Elemento: Indicador 3</Grid>
        <Grid size={{xs: 12, xl:3}}>Elemento: Indicador 4</Grid>
       
        {/* Tabla */}
        <Grid size={{xs: 12, xl:8}}>Elemento: Tabla</Grid>
       
        {/* Gráfico */}
        <Grid size={{xs: 12, xl:4}}>Elemento: Gráfico 1</Grid>
   
    </Grid>
  )
}

export default App

