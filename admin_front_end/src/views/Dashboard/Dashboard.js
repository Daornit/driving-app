import React from "react";

// @material-ui/core

import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Button from "components/CustomButtons/Button.js";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import { bugs, website} from "variables/general.js";
import Modal from '@material-ui/core/Modal';
import CustomInput from "components/CustomInput/CustomInput.js";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';





function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(
  (theme) => ({
    cardCategoryWhite: {
      "&,& a,& a:hover,& a:focus": {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
      },
      "& a,& a:hover,& a:focus": {
        color: "#FFFFFF"
      }
    },
    cardTitleWhite: {
      color: "#FFFFFF",
      marginTop: "0px",
      minHeight: "auto",
      fontWeight: "300",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      marginBottom: "3px",
      textDecoration: "none",
      "& small": {
        color: "#777",
        fontSize: "65%",
        fontWeight: "400",
        lineHeight: "1"
      }
    },
    paper: {
      position: 'absolute',
      width: 400,
      border: '2px solid #000',
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      'p':{
        color: "primary",
      },
    },
    head: {
      backgroundColor: "primary",
    }
  })
);

export default function Dashboard() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body1 = (
    <div style={modalStyle} className={classes.paper}>
      <Card>
      <GridContainer id="simple-modal-title">
        
          <CardHeader color="primary">
        <GridItem xs={12} sm={12} md={12}>
        <h4 className={classes.cardTitleWhite}>Дүрэм нэмэх</h4>
      </GridItem>
      </CardHeader>
      </GridContainer>
      <CardBody>
      <GridContainer id="simple-modal-description">
        
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Дүрмийн гарчиг"
                    id="durem_name"
                    formControlProps={{
                      fullWidth: true
                    }}

                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Зургийн URL"
                    id="img"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <br></br>
              <GridContainer>

                  <GridItem xs={12} sm={12} md={12}>
                    
                      
                  <TextareaAutosize style={{width: "100%"}}
                    rows={10}
                    aria-label="Дүрмийн дэлгэрэнгүй"
                    placeholder="Дүрмийн дэлгэрэнгүй"
                    
                  />
                  
                  
                </GridItem>

              </GridContainer>
              </CardBody>
              <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
        <Button
          fullWidth
          color="primary"          
        >          
        Нэмэх
        </Button>
                
      </GridItem>
      
              </GridContainer>
              </Card>
    </div>
  );
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
        <Button
          fullWidth
          color="primary" 
          onClick={handleOpen}         
        >          
        Шинээр дүрэм нэмэх
        </Button>
        </GridItem>
        <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="simple-modal-title"
  aria-describedby="simple-modal-description"
>{body1}</Modal>

        <GridItem xs={12} sm={12} md={12}>
          <CustomTabs
            title="Дүрэм:"
            headerColor="primary"
            tabs={[
              {
                tabName: "Гарчиг",

                tabContent: (
                  <Tasks
                    tasksIndexes={[0, 1, 2, 3]} 
                    tasks={bugs}
                  />
                )
              },
              {
                tabName: "Ангилал",
                
                tabContent: (
                  <Tasks
                    checkedIndexes={[]}
                    tasksIndexes={[0, 1]}
                    tasks={website}
                  />
                )
              }
            ]} 
          />

        </GridItem>
      </GridContainer>
    </div>
  );
}
