import { addTeste } from "@/app/lib/action"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import { Typography } from "@mui/material"
import { title } from "process"

export default function FormColaborador({title}) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
      <Typography variant="h4" sx={{marginBottom:2, marginTop:2}}>
        {title}
      </Typography>
      <form action={addTeste}>
        <TextField 
        name="nome" 
        label="Amor da vida de Rodrigo" 
        fullWidth 
        required 
        variant="outlined"
        sx={{marginBottom: 2}}/>
        
        <TextField 
        name="email" 
        label="Email" 
        fullWidth 
        required 
        variant="outlined" 
        sx={{marginBottom: 2}} />

        <Button variant="contained" type="sumbit" fullwidth>
          Cadastrar Colaborador
        </Button>
      </form>
    </Box>


  )
}
