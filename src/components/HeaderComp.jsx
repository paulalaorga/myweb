import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import styles from '../App.module.css';
import logo from '../assets/PL.png'; 

export default function HeaderComp() {

return (
        <div>
        <Stack display="flex" flexDirection= "row" justifyContent="space-between" alignItems="center" position= "fixed" spacing={2} sx={{ p: 5, width: '100%'}}>
        <div className={styles.logo}>
            <img src={logo} alt="PL Logo" />
        </div>
            <Paper className={styles.menu}>
                <MenuList >
                    <MenuItem sx={{ borderBottom: '1px solid #444452',
                                    fontFamily: 'Apercu,"Source Sans Pro",system,system-ui,-apple-system,BlinkMacSystemFont,Roboto,Helvetica,Arial,sans-serif', // Specify the font family
                                    fontSize: '16px', 
                                    fontWeight: 'bold', 
                                    textTransform: 'uppercase',
                                    '&:hover': {
                                        color: 'red' 
                                      }
                                    }}>Work</MenuItem>
                    <MenuItem sx={{ borderBottom: '1px solid #444452',
                                    fontFamily: 'Apercu,"Source Sans Pro",system,system-ui,-apple-system,BlinkMacSystemFont,Roboto,Helvetica,Arial,sans-serif', // Specify the font family
                                    fontSize: '16px', 
                                    fontWeight: 'bold', 
                                    textTransform: 'uppercase',
                                    }}>About</MenuItem>
                    <MenuItem sx={{ 
                                    fontFamily: 'Apercu,"Source Sans Pro",system,system-ui,-apple-system,BlinkMacSystemFont,Roboto,Helvetica,Arial,sans-serif', // Specify the font family
                                    fontSize: '16px', 
                                    fontWeight: 'bold', 
                                    textTransform: 'uppercase',
                                    }}>Resume</MenuItem>
                </MenuList>
            </Paper>
        </Stack>
        </div>
    );
}
