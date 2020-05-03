import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import Modal from '@material-ui/core/Modal';
import CustomInput from "components/CustomInput/CustomInput.js";
import InputLabel from "@material-ui/core/InputLabel";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Tasks from "components/Tasks/Tasks";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";


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

export default function TableList() {
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
  const deleteIcon = (
    <IconButton
                aria-label="Close"
                className={classes.tableActionButton}
              > <Close
              className={
                classes.tableActionButtonIcon + " " + classes.close
              }
            />
          </IconButton>
  );

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Card>
      <GridContainer id="simple-modal-title">
        
          <CardHeader color="primary">
        <GridItem xs={12} sm={12} md={12}>
        <h4 className={classes.cardTitleWhite}>Жолооны курс нэмэх</h4>
        
      </GridItem>
      </CardHeader>
      </GridContainer>
      <CardBody>
      <GridContainer id="simple-modal-description">
        
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Курсийн нэр"
                    id="course_name"
                    formControlProps={{
                      fullWidth: true
                    }}

                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Цахим шуудан(Email)"
                    id="email"
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
                    aria-label="Курсын дэлгэрэнгүй тайлбар."
                    placeholder="Курсын дэлгэрэнгүй тайлбар."
                    
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
    <GridContainer>
      
      <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="simple-modal-title"
  aria-describedby="simple-modal-description"
>{body}</Modal>
      <GridItem xs={12} sm={12} md={12}>
        
        <Card>
          
<GridContainer>
<GridItem xs={12} sm={12} md={12}>
          <CardHeader color="primary">
            <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <h4 className={classes.cardTitleWhite}>Жолооны Курсүүд</h4>
            <p className={classes.cardCategoryWhite}>
              Манай вебд бүртгэлтэй жолооны курсүүд
            </p>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
        <Button
          fullWidth
          color="white"
          onClick={handleOpen}          
        ><a color="primary">          
        Жолооны курс нэмэх
        </a>
        </Button>
        </GridItem> 
        </GridContainer>     
          </CardHeader>
          </GridItem>
          </GridContainer>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["ID","Name", "Directory", "Email", "Phone", "Action"]}
              tableData={[
                ["1","Батхүлэг", "Бархасболд", "batkhuleg@gmail.com", "9773507", deleteIcon],
                ["2","Билгүүнтулга", "Бархасболд", "bilguuntulga@gmail.com", "99999999", deleteIcon],
                
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>

      
    </GridContainer>
  );
}
