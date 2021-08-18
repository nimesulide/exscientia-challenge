import React, { useState } from 'react';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import { makeStyles, Button, Popover, Card, CardContent, Typography, Select, MenuItem, CardActions } from '@material-ui/core';
import { Plottables } from './types';
import CompoundsStore from './CompoundsStore';
import { ScatterplotConfig } from '../charts/Scatterplot';

const useStyles = makeStyles((theme) => ({
    cardContent: {
        padding: theme.spacing(4)
    },
    sectionContainer: {
        marginBottom: theme.spacing(4),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    label: {
        display: 'inline',
        marginRight: theme.spacing(2)
    },
    select: {
        minWidth: 100
    },
    addButton: {
        width: '100%'
    }
}));

export default () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [config, setConfig] = useState<ScatterplotConfig>({ x: '', y: '', color: '' });

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSetConfig = (configToSet: Partial<ScatterplotConfig>) => {
        setConfig(Object.assign({}, config, configToSet))
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <Button aria-describedby={id} variant={'text'} color={'inherit'} onClick={handleClick} startIcon={<BubbleChartIcon />}>
                Charts
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Card>
                    <CardContent className={classes.cardContent}>
                        {
                            Object.keys(config).map((key) => (
                                <div className={classes.sectionContainer}>
                                    <Typography className={classes.label}><b>{key}</b> dimension</Typography>
                                    <Select
                                        className={classes.select}
                                        onChange={event => handleSetConfig({ [key]: String(event.target.value) })}
                                        value={config[key as keyof ScatterplotConfig]}
                                    >
                                        {
                                            Object.values(Plottables).map((param) => (
                                                <MenuItem value={param}>{param}</MenuItem>
                                            ))
                                        }
                                    </Select>
                                </div>
                            ))
                        }
                    </CardContent>
                    <CardActions>
                        <Button
                            className={classes.addButton}
                            onClick={() => {
                                CompoundsStore.setChartConfig(config);
                                handleClose();
                            }}
                        >
                            Add
                        </Button>
                    </CardActions>
                </Card>
            </Popover>
        </div>
    );
};