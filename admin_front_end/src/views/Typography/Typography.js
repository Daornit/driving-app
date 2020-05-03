import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Quote from "components/Typography/Quote.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
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
    typo: {
      paddingLeft: "15%",
      marginBottom: "40px",
      position: "relative"
    },
    note: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      bottom: "10px",
      color: "#c0c1c2",
      display: "block",
      fontWeight: "400",
      fontSize: "13px",
      lineHeight: "13px",
      left: "0",
      marginLeft: "20px",
      position: "absolute",
      width: "260px"
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


export default function TypographyPage() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Card>
      <GridContainer id="simple-modal-title">
        
          <CardHeader color="primary">
        <GridItem xs={12} sm={12} md={12}>
        <h4 className={classes.cardTitleWhite}>Зарлал нэмэх</h4>
      </GridItem>
      </CardHeader>
      </GridContainer>
      <CardBody>
      <GridContainer id="simple-modal-description">
        
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Зарлалын гарчиг"
                    id="post_name"
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
                    aria-label="Зарлалын дэлгэрэнгүй"
                    placeholder="Зарлалын дэлгэрэнгүй"
                    
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
    <>
    <div>
      <GridContainer>
      <GridItem xs={12} sm={12} md={4}>
        <Button
          fullWidth
          color="primary"          
        >          
        Зарлал
        </Button>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
        <Button
          fullWidth
          color="primary"          
        >          
        Зөвөлгөө
        </Button>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
        <Button
          fullWidth
          color="primary"          
        >          
        Хууль
        </Button>
        </GridItem>
        </GridContainer>
    </div>
    <Card>

      <CardHeader >
        <GridContainer>
      <GridItem xs={12} sm={12} md={4}>
        <Button
          fullWidth
          color="primary"
          onClick={handleOpen}          
        >          
        Нэмэх
        </Button>
        <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="simple-modal-title"
  aria-describedby="simple-modal-description"
>{body}</Modal> 
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
        <Button
          fullWidth
          color="primary"
                     
        >          
        Устгах
        </Button>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
        <Button
          fullWidth
          color="primary"          
        >          
        Шинэчлэх
        </Button>
        </GridItem>
        </GridContainer>
      </CardHeader>
      <CardBody>
        <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
        <div className={classes.typo}>
          <div className={classes.note}>Зарлал</div>
          <Quote
            text="B болон BC ангилалд хямдрал зарлалаа"
            author="Батхүлэг"
          />
        </div>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
        <div className={classes.typo}>
          <div className={classes.note}>Зарлал</div>
          <Quote
            text="B болон BC ангилалд хямдрал зарлалаа"
            author="Батхүлэг"

          />
        </div>
        </GridItem>
        </GridContainer>
        
      </CardBody>
    </Card>
    </>
  );
}
