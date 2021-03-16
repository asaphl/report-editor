import {
  faBars,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
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
import DialogOpenReport from "./DialogOpenReport";
import { asyncOpenReport, asyncSaveReport, asyncSaveReportAs, newReport } from "../actions";
import DialogSaveReport from "./DialogSaveReport";
import printJS from "print-js";

const useStyles = makeStyles({
  root: {
    paddingLeft: "15px",
    paddingRight: "15px",
    position: "inherit",
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
  },
});

function AppMenu(props) {
  const [reports, setReports] = useState([]);
  useEffect(() => {
    axios
      .get("api/reports")
      .then((res) => setReports(res.data));
  }, []);
  const classes = useStyles();
  const report = useSelector((state) => state.report);
  const blocks = useSelector((state) => state.blocks);
  const dispatch = useDispatch();

  const [anchorMenu, setAnchorMenu] = React.useState(null);
  const [openDialogVisibility, setOpenDialogVisibility] = React.useState(false);
  const [saveAsDialogVisibility, setSaveAsDialogVisibility] = React.useState(
    false
  );

  const handleClick = (event) => {
    setAnchorMenu(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorMenu(null);
  };

  const openNewReport = () => {
    dispatch(newReport());
  }

  const saveReport = () => {
    const reportData = {
      name: report.name,
      data: JSON.stringify([...blocks]),
    };
    closeMenu();
    dispatch(asyncSaveReport(reportData));
  };

  const saveReportAs = (filename) => {
    const reportData = {
      name: filename,
      data: JSON.stringify([...blocks]),
    };
    closeMenu();
    dispatch(asyncSaveReportAs(reportData));
  };

  const openDialogOpenReport = (event) => {
    setOpenDialogVisibility(true);
  };

  const closeDialogOpenReport = (value) => {
    setOpenDialogVisibility(false);
    closeMenu();
    if (value) dispatch(asyncOpenReport(value));
  };

  const openDialogSaveAs = () => {
    setSaveAsDialogVisibility(true);
  };

  const closeDialogSaveAs = (value) => {
    setSaveAsDialogVisibility(false);
    if (value) saveReportAs(value);
    closeMenu();
  };

  const printReport = () => {
    printJS("print-report", "html");
  };

  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          report-editor <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
          {report.name}
        </Typography>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="app-menu"
          aria-controls="app-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faBars} />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorMenu}
          keepMounted
          open={Boolean(anchorMenu)}
          onClose={closeMenu}
        >
          <MenuItem onClick={openNewReport}>New Report</MenuItem>
          <MenuItem onClick={openDialogOpenReport}>Open Report</MenuItem>
          <MenuItem onClick={saveReport}>Save Report</MenuItem>
          <MenuItem onClick={openDialogSaveAs}>Save As...</MenuItem>
          <MenuItem onClick={printReport}>Print (or to PDF)</MenuItem>
        </Menu>
      </Toolbar>
      <DialogOpenReport
        open={openDialogVisibility}
        onClose={closeDialogOpenReport}
        reports={reports}
      />
      <DialogSaveReport
        open={saveAsDialogVisibility}
        onClose={closeDialogSaveAs}
      />
    </AppBar>
  );
}

export default AppMenu;
