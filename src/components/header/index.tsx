import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      display: 'flex',
    },
    icon: {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20,
    },
  }),
);

export default function Header() {
  const classes = useStyles();

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/home"  className={classes.link}>
        <HomeIcon className={classes.icon} />
        Home
      </Link>
      <Link
        color="inherit"
        href="/moedas"
        className={classes.link}
      >
        <WhatshotIcon className={classes.icon} />
        Moedas
      </Link>
      <Link color="textPrimary"  href="/finance" className={classes.link}>
        <GrainIcon className={classes.icon} />
        Finanças
      </Link>
    </Breadcrumbs>
  );
}
