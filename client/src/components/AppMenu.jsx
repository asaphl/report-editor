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
import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    paddingLeft: "15px",
    paddingRight: "15px",
    position: "inherit"
  },
});

function AppMenu(props) {
  const classes = useStyles();
  const report = useSelector((state) => state.report);

  const [anchorEl, setAnchorEl] = React.useState(null);

  // const [open, setOpen] = React.useState(false);
  // const [selectedValue, setSelectedValue] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const saveReport = () => {
    const reportData = {
      name: "spain",
      report: [...report],
    };
    axios
      .post("http://localhost:5000/api/save", reportData)
      .then((res) => console.log(res.data));
    handleClose();
  };

  const openReport = (e) => {
    // setModal(<ModalContainer visibility={true} />);
    handleClose();
  };

  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="simple-menu"
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faChevronCircleDown} />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={openReport}>Open Report</MenuItem>
          <MenuItem onClick={saveReport}>Save Report</MenuItem>
          <MenuItem onClick={handleClose}>Export</MenuItem>
        </Menu>
        <Typography variant="h6" className={classes.title}>
          report-editor
        </Typography>
      </Toolbar>
      {/*<DialogOpenReport selectedValue={selectedValue} open={open} onClose={handleClose} />*/}
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
