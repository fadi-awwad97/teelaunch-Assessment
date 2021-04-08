import React, { useRef, useEffect,useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const Canvas = props => {
  
  const canvasRef = useRef(null)
  const [text, setText] = useState("");
  const [textWidth, setTextWidth] = useState("10");
  const [textHeight,setTextHeight] = useState("50");
  
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    context.clearRect(0,0,context.canvas.width,context.canvas.height)
    const image = new Image();
    image.src =props.image;
    console.log(props.image)
    image.onload = () => {
    context.drawImage(image, 0, 0);
  
    context.font = "15px Verdana";
    var gradient = context.createLinearGradient(0, 0, context.canvas.width, 0);
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");
    context.strokeStyle = gradient;
    context.strokeText(text, textWidth, textHeight);
    };

  }, [props.image,text,textWidth,textHeight])

 const handleSubmit = (e) => {
    const canvas = canvasRef.current
    var image = canvas.toDataURL("image/png");
    var link = document.getElementById('link');
    link.setAttribute('download', 'image.png');
    link.setAttribute('href', image.replace("image/png", "image/octet-stream")); 
  }
  
  return (
<div>
  <div style={{marginTop:"8px", alignItems:"center",justifyContent:"center",display:"flex"}}>
  <canvas style={{borderRadius:"10%"}} width={512} height={512} ref={canvasRef} />
</div>

  <div>
  <Grid container style={{padding: '20px'}}>

   <Grid item xs={11}>
      <TextField id="outlined-basic" color="primary" value={text} label="Add some Text to your photo" fullWidth onChange={(e) => setText(e.target.value)}/>
     </Grid>
     <Grid item xs={11}>
      <TextField id="outlined-basic" color="primary" value={textWidth} label="Width" fullWidth onChange={(e) => setTextWidth(e.target.value)}/>
    </Grid>
    <Grid item xs={11}>
     <TextField id="outlined-basic" color="primary" value={textHeight} label="Height" fullWidth onChange={(e) => setTextHeight(e.target.value)}/>
    </Grid>
  </Grid>

  </div>

  <div style={{alignItems:"center",justifyContent:"center",display:"flex"}}>
  <a id='link' download="myImage.png" href="" onClick={handleSubmit}>Download Image</a>
  </div>

</div>
  );
}

export default Canvas