import React, { useEffect } from "react";
import { Box, Button, Grid, Paper } from "@material-ui/core";
import Spacer from "react-spacer";
import s from "../../styles/styles.module.css";
import YouTube from "react-youtube";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import {
  Hidden,
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TablePagination, 
  TableRow} from "@material-ui/core";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import allActions from "../../actions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  container: {
    maxHeight: 440,
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

export const ModelDetails = ({ model, rows, modelClasses }) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const dispatch = useDispatch();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  dispatch(allActions.modelActions.setModel(model));
  dispatch(allActions.modelActions.setClasses(modelClasses));

  return (
    <div>
      <Box bgcolor="primary.dark" color="primary.contrastText" p={2}>
        <Spacer height="50px" />
        <Grid container alignItems="center" justify="center">
          <Grid item md={8} sm={10} xs={12}>
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Rating name="read-only" value={model.rating} readOnly />
            </Box>

            <h1 className={`${s.header} ${s.center}`}>{model.name}</h1>
            <p  className={`${s.subheader} ${s.center}`}>{model.description}</p>

            <Spacer height="25px" />
            <Link
              to={`/studio/configuration/${model.id}`}
              style={{ textDecoration: "none" }}
            >
              <Hidden xsDown>
                    <Button size="large" variant="contained" color="secondary" >
                    <span className={s.ctabutton}>Start with this model</span>
                    </Button>
              </Hidden>
              <Hidden smUp>
                    <div className={s.center}>
                    <Button size="small" variant="contained" color="secondary">
                    <span className={s.ctabutton}>Start with this model</span>
                    </Button>
                    </div>
              </Hidden>
            </Link>
            <Spacer height="25px" />
          </Grid>
        </Grid>
        <Spacer height="50px" />
      </Box>

      <Box bgcolor="primary.light" p={2}>
        <Spacer height="50px" />
        <Grid container alignItems="center" justify="center">
          <Grid item md={8} sm={12} xs={12}>
            <h3 style={{ color: "white" }} className={s.subclass}>
              Classes
            </h3>
            <Grid container alignItems="center" justify="center" spacing={2}>
              <Grid item xs={12} md={6}>
                <Paper className={classes.root}>
                  <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                          {columns.map((column) => (
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
                          .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .map((row) => {
                            return (
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={row.code}
                              >
                                {columns.map((column) => {
                                  const value = row[column.id];
                                  return (
                                    <TableCell
                                      key={column.id}
                                      align={column.align}
                                    >
                                      {column.format &&
                                      typeof value === "number"
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
        <Spacer height="50px" />
      </Box>

      <Box>
        <Spacer height="50px" />
        <Grid container alignItems="top" justify="center">
          <Grid item md={6} sm={6} xs={12}>
            <h3 className={s.subclass}>Demo Video</h3>
            <Box p={4}>
              <Spacer height="20px" />
              <div style={{maxWidth: '100%'}}>
              <YouTube className={s.video} videoId={model.video} />
              </div>
            </Box>
          </Grid>
        </Grid>
        <Spacer height="50px" />
      </Box>
    </div>
  );
};

export default ModelDetails;
