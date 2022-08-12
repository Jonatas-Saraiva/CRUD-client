import  React ,{useState} from 'react';
import Button from '@material-ui/core//Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Game from '../game';
import axios from 'axios';

export default function FormDialog(props) {
    const [eidtValues,setEditValues]=useState({
        id:props.id,
        name:props.name,
        cost:props.cost,
        category:props.category
        

    })
const handleDeleteGame = ()=>{
axios.delete(`http://localhost:3001/delete/${eidtValues.id}`)
handleClose()
}
    const handleClickGame =()=>{
        axios.put("http://localhost:3001/updade",{
            id:eidtValues.id,
            name:eidtValues.name,
            cost:eidtValues.cost,
            category:eidtValues.category,

        
        })
        handleClose()
    }

    const handleClickOpen = () => {
      props.setOpen(true);
    };
  
    const handleClose = () => {
      props.setOpen(false);
    };
   function handleChangeValues (value){
  setEditValues((prevValues)=>({
    ...prevValues,
   [ value.target.id]:value.target.value,
  }))
}

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
       { props.name}
      </Button>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
       
      
        <DialogTitle id="form-dialog-title">Editar</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome do jogo"
            defaultValue={props.name}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="cost"
            label="preço"
            defaultValue={props.cost}
            type="number"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="category"
            label="Categoria"
            defaultValue={props.category}
            onChange={handleChangeValues}
            type="text"
            fullWidth
          />
          </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDeleteGame}>Deletar</Button>
          <Button onClick={handleClickGame} >Salvar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
  }
