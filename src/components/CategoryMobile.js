import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import CategoryElementMobile from './CategoryElementMobile'
import { Grid, Hidden } from '@material-ui/core';

const useStyles = makeStyles({
    list: {
        width: 250,
        minHeight : 150
    },
    fullList: {
        width: 'auto',
    },
});

export default function Category() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'right' || anchor === 'bottom',
            })}
            role="presentation"
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                    <CategoryElementMobile openCategory = {setState} />
            </List>
        </div>
    );

    return (
        <div>
        <Hidden mdUp>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Grid container >
                        <Grid style={{paddingTop: 15}} align="center" item xs={12}>
                            <Button variant='text' style={{color : 'rgb(249, 87, 47)'}} onClick={toggleDrawer(anchor, true)}>Axtar &nbsp; <i class="fas fa-search"></i></Button>
                        </Grid>
                    </Grid>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </Hidden>
        </div>
    );
}
