import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import { Modal } from 'react-bootstrap';
import Input from '@material-ui/core/Input';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Canvas from '../Canvas/canvas';
import './home.css';

export default function Home() {
    const [file, setFile] = useState();
    const [showHide, setShowHide] = useState(false);

      const saveFile = (e) => {
       let x= URL.createObjectURL(e.target.files[0])
       setFile(x);
      };

    function handleModalShowHide() {
        setShowHide(!showHide)
     }

    return (
<div className="container">
    <div className="title">
        <h3>What About Playing Around With Pictures</h3>
    </div>

    <div style={{}}>
         Add A Photo
        <Fab color="primary" size="small" component="span" aria-label="add"  onClick={handleModalShowHide}>
            <AddIcon />
        </Fab>
    </div>

        <div>
            <Modal style={{marginLeft:"0px",marginTop:"-530px",width:"400px"}} show={showHide}>
                    <Modal.Header onClick={handleModalShowHide}>
                    <Modal.Title>Choose photo </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>                      
                    <Input   
                        type="file"
                        onChange={saveFile}>
                        Change the picture
                    </Input >
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="contained" onClick={handleModalShowHide}>
                        Close
                    </Button>
                    </Modal.Footer>
            </Modal>
        </div>       
     <div>
     <Canvas image={file}/>
    </div>

        
</div>
    )
}
