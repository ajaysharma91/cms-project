import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ButtonGroup, Button, Checkbox , Radio, Select, MenuItem, TextField, Container} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
function App() {
  const [color, setColor] = useState("primary");
  const [disabled, setDisabled] = useState(false);
  const [gender, setGender] = useState('male');
  const [select, setSelect] = useState(1);



  const clickMe = () => {
    // setColor("secondary");
    // setDisabled(true);
  };
  const changeValue = (e)=>{
    setGender(e.target.value);
  }
  return (
    <Container maxWidth="lg" style={{backgroundColor:"pink"}}>
      <h1>react Material UI</h1>
      <Button
        disabled={disabled}
        variant="contained"
        color={color}
        onClick={clickMe}
      >
        <Delete />
        Primary
      </Button>
      <ButtonGroup>
        <Button variant="contained" color="primary">
          Contained
        </Button>
        <Button variant="outlined" color="secondary">
          Outlined
        </Button>
        <Button variant="text" color="inherit">
          Text
        </Button>
      </ButtonGroup>

      <Checkbox
        color="primary"
        value="ajay"
        onChange={(e) => console.log(e.target.value)}
      />
      <Checkbox
        color="primary"
        value="ajay"
        onChange={(e) => console.log(e.target.value)}
      />
      <Checkbox
        color="primary"
        value="ajay"
        onChange={(e) => console.log(e.target.value)}
      />
      <Checkbox
        color="primary"
        value="ajay"
        onChange={(e) => console.log(e.target.value)}
      />

      <div>
        <Radio checked = {gender == 'male'} value="male" onChange={changeValue}>
          <span>Male</span>
        </Radio>
      </div>
      <div>
        <Radio checked={gender == 'female'} value="female" onChange={changeValue}>
          <span>Female</span>
        </Radio>
      </div>


      <div>
        <Select value={select} displayEmpty onChange={(e)=>setSelect(e.target.value)}>
          <MenuItem value="">Select Vehicle</MenuItem>
          <MenuItem value={1}>Car</MenuItem>
          <MenuItem value={2}>Bike</MenuItem>
          <MenuItem value={3}>Cycle</MenuItem>
        </Select>
      </div>
      <div>
        <TextField label="Enter Name" onChange={(e)=>console.log(e.target.value)} color="primary" variant="outlined"></TextField>
      </div>

      <Grid>
        
      </Grid>

      </Container>  );
}

export default App;
