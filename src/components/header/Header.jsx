import { withStyles, createTheme , ThemeProvider} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import GOLD_SKULL from './GOLD_SKULL.png';

import React from "react";

import './header.css'

export default function Header() {
    const theme = createTheme({
        typography: {
          fontFamily: [
            'Times New Roman'
          ]
        }
    });

    const GoldText = withStyles({
        root: {
          color: "#ebd379"
        }
      })(Typography);

  return (
    <header>
        <AppBar title={<img src="./GOLD_SKULL.png"/>} style={{ background: '#000000' }} position="static">
        <Toolbar>
            <ThemeProvider theme={theme}>
                <GoldText>
                    Spoils of War
                </GoldText>
            </ThemeProvider>

            <img 
                src={process.env.PUBLIC_URL + GOLD_SKULL} 
                alt="logo" 
                className="middle" 
            />
            connect wallet
        </Toolbar>
        </AppBar>
    </header>
  );
}

