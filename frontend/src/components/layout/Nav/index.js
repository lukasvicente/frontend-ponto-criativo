import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import Link from '@material-ui/core/Link';
import { FaSignLanguage } from 'react-icons/fa'
 
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import './styles.css';

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
        padding: theme.spacing(2),
      
      },
    typography: {
        marginTop: theme.spacing(1),
        marginBottom: 40,
       
    },

    input:{
        width: 240,
         
        marginTop:20
          
    },
    
 
      divMenu: {
        display:'flex',
         
      },
      divUl: {
        margin: 30,
        marginRight:100,
        marginLeft:40, 
        whiteSpace: "nowrap",
      },
      typographyUl: {
        listStyleType: 'None',
        marginTop: theme.spacing(0),
        padding: theme.spacing(2),
       
    },
    linkPassword:{
        marginTop:40,
    },
    btnForm: {
        backgroundColor: "#3BACFF",
        marginRight:'30%' ,
       
        "&:hover":{
            backgroundColor: "#3BACFF",
            opacity: '80%'
        }
    },
 
    iconArrow:{

        color: '#3BACFF',
        marginLeft: 10,
        fontSize: 15
    },
  }));
  



export default function Nav() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Fragment>
            <div className="divUl">
                <ul>
                    <li> <a class="active" href="#paravoce">  Para <b> Você </b> </a></li>
                    <li> <a href="#paraempresa">  Para <b> Empresa </b></a> </li>

                </ul>

                <Button
                    variant="contained"                  
                    className="bntTitle"
                    lab
                > <AddIcon /> </Button>
                
                <Button
                    variant="contained"                  
                    className="bntTitle"
                    lab
                >A</Button>
                <Button
                    variant="contained"                  
                    className="bntTitle"
                    lab
                > <RemoveIcon /> </Button>

                <Typography className="navBarTitle"> Contraste</Typography>

                <FaSignLanguage  style={{ 
                    margin: 'auto',
                    marginLeft: 20,
                    marginRight:20
                }}  size={20}/>
                 <Typography className="navBarTitle"> Acessibilidade</Typography>
            </div>
            <section>
                <div className="divUlSection">
                    <p>
                        <h3> <b> RN</b>.edu</h3>
                    </p>

                    <ul>
                        <li> <a href="#a"> Instituição </a></li>
                        <li> <a href="#b">Cursos</a> </li>
                        <li> <a href="#c">Pesquisa</a> </li>
                        <li> <a href="#d">Extenção</a> </li>
                    </ul>

                    <Button variant="contained" color="primary">Inscreva-se</Button>
                    <a onClick={handleClick} href="#portal">Portal do Aluno </a>

                    <ExpandMoreIcon   style={{ 
                            color: '#3BACFF',
                            marginLeft: 10
                        }} 
                    />
                   
                    
                </div>
            </section>

            <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <div className={classes.divMenu}>
            <div className={classes.divUl}>
                
                <ul>
                    <li  className={classes.typographyUl}> <ArrowForwardIosIcon className={classes.iconArrow} />Meus Cursos</li>
                    <li  className={classes.typographyUl}> <ArrowForwardIosIcon className={classes.iconArrow} />Impressão de 2a. Via </li>
                    <li  className={classes.typographyUl}> <ArrowForwardIosIcon className={classes.iconArrow} />Débito automático </li>
                    <li  className={classes.typographyUl}> <ArrowForwardIosIcon className={classes.iconArrow} />Mudança de vencimento</li>
                    <li  className={classes.typographyUl}> <ArrowForwardIosIcon className={classes.iconArrow} />Entenda sua fatura </li>
                    <li  className={classes.typographyUl}> <ArrowForwardIosIcon className={classes.iconArrow} />Fatura por e-mail </li>
                </ul>
             </div>

            <form className={classes.form}>
            <Typography   variant="h5" component="h5" display="block"> <b> Olá! </b></Typography>
            <Typography className={classes.typography} variant="displayBlock"  > Bem-vindo ao Portal do Aluno.</Typography>
            
            <Grid  item xs={12} md={6}>
                <FormLabel>E-mail ou CPF</FormLabel>
                <TextField className={classes.input}
                variant="outlined"
                margin="normal"
                required
                fullWidth          
                name="email"
                autoFocus/>
                
            </Grid>
            <Grid  item xs={12} md={6}>
                <FormLabel>Senha</FormLabel>
                <TextField className={classes.input}
                variant="outlined"
                margin="normal"
                required
                fullWidth          
                name="email"
                />
                
            </Grid>
            <Grid container className={classes.linkPassword}>
                <Grid item xs>
                <Link href="#" variant="body2">
                <ArrowForwardIosIcon     style={{ 
                                color: '#3BACFF',
                                marginLeft: 10,
                                fontSize: 15
                                
                                
                            }} 
                        />
                    Lembrar senha
                </Link>
                </Grid>

                <Button className={classes.btnForm} variant="contained" color="primary">Entrar</Button>
                
            </Grid>
            </form>

        </div>
      </Popover>
        </Fragment>
    )
}