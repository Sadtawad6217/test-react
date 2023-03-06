import  React,{useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Button, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';

export default function SimpleContainer() {
  const handleSubmit = event => {
    event.preventDefault();
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "content": content,
  "title": title
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://dev.opensource-technology.com:3000/api/posts", requestOptions)
  .then(response => response.json())
  .then(result => {
    alert(result['id'])
    window.location.href = '/'
  })
  .catch(error => console.log('error'));
  }

  const[title, setTitle] = useState('');
  const[content, setContent] = useState('');
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx = {{p:1}}>
        <Typography variant = "h6" gutterBottom component= "div">
        <center>
          New Post
          </center>
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField id="title" label="Title" variant="outlined" 
              fullWidth required 
              onChange={(e) => setTitle(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField id="content" label="Content" variant="outlined" 
              fullWidth required 
              onChange={(e) => setContent(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm = {6}>
              <Button type ="submit" variant="contained" fullWidth> Create</Button>
            </Grid>
            <Grid item xs={12} sm = {6}>
              <Button onClick={() => window.location.href = '/'}  variant="contained" fullWidth> CANCEL</Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </React.Fragment>
  );
}