import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadMoedaRequest } from '../../store/ducks/moedas/action'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Header from '../../components/header';
import Footer from '../../components/footer';
import './style.scss'



const Moedas = () => {

    const moeda = useSelector((state:any) => state.reducerMoeda.moeda);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadMoedaRequest())
    },[dispatch])

    const useStyles = makeStyles({
        root: {
          width: '250px',
          height: '240px',
          display: 'inline-block',
          wordWrap: 'break-word',
          clear: 'left',
          backgroundColor: '#ab47bc'
        },
        bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
        },
        title: {
          fontSize: 14,
        },
        pos: {
          marginBottom: 12,
        },
        btn: {
            fontWeight: 'bold'
        },
      });
      
        const classes = useStyles();
        const bull = <span className={classes.bullet}>•</span>;

    return (
        <div>
            <Header />

            {

                moeda?.map((coin: any) => (
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                    <Card className={classes.root} variant="outlined" key={coin.name}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Moeda de {coin.country_name} - {coin.country_code}
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {bull}{coin.currency_code}{bull}
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                {coin.symbol}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {coin.name}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button className={classes.btn} size="small">Mais informações</Button>
                        </CardActions>
                    </Card>
                            </div>
                            <div className="flip-card-back"> 
                            <p>Olar</p>
                            </div>
                        </div>
                    </div>
                ))}
                <Footer />
        </div>
)};

            
export default Moedas;


