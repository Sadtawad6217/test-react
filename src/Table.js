import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Link from '@mui/material/Link';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function Table1() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    UserGet()
  }, [])

  const UserGet = () => {
    fetch("http://dev.opensource-technology.com:3000/api/posts/draft?page=1&limit=10")
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result.posts);
        }
      )
  }
  
  const UserDelete = id => {
    var requestOptions = {
      method: 'DELETE',
      redirect: 'follow'
    };

    fetch("http://dev.opensource-technology.com:3000/api/posts/" + id, requestOptions)
    alert(id)

    UserGet()
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ p: 1 }}>
        <Paper sx={{ p: 2 }}>
          <Box display="flex">
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h6" gutterBottom>
                Draft
              </Typography></Box>
            <Box>
              <Link href="createApi">
                <Button variant="contained">
                  Create Draft
                </Button>
              </Link>
            </Box>
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="right">title</TableCell>
                  <TableCell align="right">content</TableCell>
                  <TableCell align="right">published</TableCell>
                  <TableCell align="right">Date</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="right">{row.title}</TableCell>
                    <TableCell align="right">{row.content}</TableCell>
                    <TableCell align="right">{row.published}</TableCell>
                    <TableCell align="right">{row.created_at}</TableCell>

                    <TableCell align="right">
                      <ButtonGroup variant="outlined" aria-label="outlined button group">
                        {/* <Link href="editApi" >
                          <Button  variant="contained" >
                            EDIT
                          </Button>
                        </Link>  */}
                        <Button onClick={() => UserDelete(row.id)}>DEL</Button>
                      </ButtonGroup>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </React.Fragment >
  );
}