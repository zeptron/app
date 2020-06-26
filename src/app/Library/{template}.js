import React from 'react'
import {Box, Button, Grid, Paper} from '@material-ui/core'
import Spacer from 'react-spacer'
import s from '../../styles/styles.module.css'
import YouTube from 'react-youtube'
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    container: {
        maxHeight: 440
      },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  }));

  const columns = [
    { id: "name", label: "Name", minWidth: 170 },
    { id: "number", label: "Number", minWidth: 100 },
  ];
  

  // data from GraphQL

  const rating = 5
  const modelID = 1
  const modelName = "{modelName}"
  const description = "{short model description}"
  const videoID = "7UTpr-jPH0A"
  function createData(name, number) {
    return { name, number };
  }
  const rows = [
    createData("Person", 1),
    createData("Car", 2),
    createData("Bike", 3),
    createData("Hamer", 4),
    createData("Etc", 5),
    createData("Person", 1),
    createData("Car", 2),
    createData("Bike", 3),
    createData("Hamer", 4),
    createData("Etc", 5),
    createData("Person", 1),
    createData("Car", 2),
    createData("Bike", 3),
    createData("Hamer", 4),
    createData("Etc", 5),
    createData("Person", 1),
    createData("Car", 2),
    createData("Bike", 3),
    createData("Hamer", 4),
    createData("Etc", 5)
  ];

export default function Currency() {
    
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
    setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    
    return ( 
    <div>

        <Box bgcolor="primary.dark" color="primary.contrastText">
            <Spacer height="50px"/>
            <Grid container alignItems="center" justify="center">
                <Grid item md={8} sm={10} xs={12}>
                    
                    <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating name="read-only" value={rating} readOnly />
                    </Box>
                    
                    <h1 className={s.header}>{modelName}</h1>
                    <p className={s.subheader}>{description}</p>

                    <Spacer height="25px"/>

                    <Button size="large" variant="contained" color="secondary" href={`/studio/start/${modelID}`}>
                        <span className={s.ctabutton}>Start with this model</span>
                    </Button>

                    <Spacer height="25px"/>
                    
                </Grid>
            </Grid>
            <Spacer height="50px"/>
        </Box>
        
        <Box bgcolor="primary.light">
        <Spacer height="50px"/>
            <Grid container alignItems="center" justify="center">
                <Grid item md={8} sm={12} xs={12}>
                <h3 style={{color:'white'}} className={s.subclass}>Classes</h3>
            <Grid container alignItems="center" justify="center" spacing={2}>
                <Grid item xs={12} md={6}>
                <Paper className={classes.root}>
                    <TableContainer className={classes.container}>
                        <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                            {columns.map(column => (
                                <TableCell
                                key={column.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth }}
                                >
                                {column.label}
                                </TableCell>
                            ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map(row => {
                                return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map(column => {
                                    const value = row[column.id];
                                    return (
                                        <TableCell key={column.id} align={column.align}>
                                        {column.format && typeof value === "number"
                                            ? column.format(value)
                                            : value}
                                        </TableCell>
                                    );
                                    })}
                                </TableRow>
                                );
                            })}
                        </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                    </Paper>
                </Grid>
               

            </Grid>
         </Grid>
         </Grid>
         <Spacer height="50px"/>
         </Box>

         <Box>
             <Spacer height="50px"/>
            <Grid container alignItems="top" justify="center">
                <Grid item md={6} sm={6} xs={12}>
                <h3 className={s.subclass}>Demo Video</h3>
                    <Box p={4}>
                    <Spacer height="20px"/>
                <YouTube videoId={videoID} />
                </Box>
                </Grid>
            </Grid>
            <Spacer height="50px"/>
        </Box>

    </div>
    )
}