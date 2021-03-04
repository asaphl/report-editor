import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import DialogOpenReport from './DialogOpenReport';
import { OPEN_REPORT } from "../constants/actions";
import { asyncOpenReport, openReport } from "../actions";
import DialogSaveReport from "./DialogSaveReport";
import printJS from "print-js";

const useStyles = makeStyles({
  root: {
    paddingLeft: "15px",
    paddingRight: "15px",
    position: "inherit"
  },
});

function AppMenu(props) {
  const [reports, setReports] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/reports")
      .then((res) => setReports(res.data));
  });
  const classes = useStyles();
  const reportMeta = useSelector((state) => state.reportMeta);
  const report = useSelector((state) => state.report);
  const dispatch = useDispatch();

  const [anchorMenu, setAnchorMenu] = React.useState(null);
  const [openDialogVisibility, setOpenDialogVisibility] = React.useState(false);
  const [saveAsDialogVisibility, setSaveAsDialogVisibility] = React.useState(false);

  const handleClick = (event) => {
    setAnchorMenu(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorMenu(null);
  };

  const saveReport = () => {
    const reportData = {
      name: reportMeta.name,
      report: JSON.stringify([...report]),
    };
    axios
      .put("http://localhost:5000/api/save", reportData)
      .then((res) => console.log(res.data));
    closeMenu();
  };

  const saveReportAs = (filename) => {
    const reportData = {
      name: filename,
      report: JSON.stringify([...report]),
    };
    axios
      .post("http://localhost:5000/api/save", reportData)
      .then((res) => console.log(res.data));
    closeMenu();
  };

  const openDialogOpenReport = (event) => {
    setOpenDialogVisibility(true);
  };

  const closeDialogOpenReport = (value) => {
    setOpenDialogVisibility(false);
    closeMenu();
    dispatch(asyncOpenReport(value))
  };

  const openDialogSaveAs = (event) => {
    setSaveAsDialogVisibility(true);
  };

  const closeDialogSaveAs = (value) => {
    setSaveAsDialogVisibility(false);
    saveReportAs(value);
    // closeMenu();
    // dispatch(asyncOpenReport(value))
  };

  const printReport = () => {
    printJS('print-report', 'html');
  }

  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="app-menu"
          aria-controls="app-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faChevronCircleDown} />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorMenu}
          keepMounted
          open={Boolean(anchorMenu)}
          onClose={closeMenu}
        >
          <MenuItem onClick={openDialogOpenReport}>Open Report</MenuItem>
          <MenuItem onClick={saveReport}>Save Report</MenuItem>
          <MenuItem onClick={openDialogSaveAs}>Save As...</MenuItem>
          <MenuItem onClick={printReport}>Print (or to PDF)</MenuItem>
        </Menu>
        <Typography variant="h6" className={classes.title}>
          report-editor... { reportMeta.name }
        </Typography>
      </Toolbar>
      <DialogOpenReport selectedValue={1} open={openDialogVisibility} onClose={closeDialogOpenReport} reports={reports}/>
      <DialogSaveReport open={saveAsDialogVisibility} onClose={closeDialogSaveAs}/>
    </AppBar>
  );
}

export default AppMenu;

// <Box bgcolor="rgb(200, 200, 200)" textAlign="left" letterSpacing="20px">
//         <ButtonGroup variant="text" color="default" aria-label="text default button group">
//           <Button classes={{ root: classes.root }}>File</Button>
//           <Button classes={{ root: classes.root }}>View</Button>
//           <Button classes={{ root: classes.root }}>About</Button>
//         </ButtonGroup>
//       </Box>
