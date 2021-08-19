import React, { useState } from 'react';
import { makeStyles, Typography, Select, MenuItem } from '@material-ui/core';

interface SimpleSelectGroupProps {
    configs: { [key: string]: string[] };
    onChange: (currentConfig: { [key: string]: string }) => void;
    initialConfig?: { [key: string]: string };
}

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


export default ({ configs, onChange, initialConfig }: SimpleSelectGroupProps) => {
    const classes = useStyles();
    const [currentConfig, setCurrentConfig] = useState<{ [key: string]: string }>(initialConfig ?? {});

    const handleSetConfig = (configToSet: { [key: string]: string }) => {
        const newConfig = Object.assign({}, currentConfig, configToSet);
        setCurrentConfig(newConfig);
        onChange(newConfig);
    };

    return (
        <>
            {
                Object.keys(configs).map((key) => (
                    <div className={classes.sectionContainer} key={key}>
                        <Typography className={classes.label}><b>{key}</b></Typography>
                        <Select
                            className={classes.select}
                            onChange={event => handleSetConfig({ [key]: String(event.target.value) })}
                            value={currentConfig[key] ?? ''}
                        >
                            {
                                Object.values(configs[key]).map((param) => (
                                    <MenuItem key={param} value={param}>{param}</MenuItem>
                                ))
                            }
                        </Select>
                    </div>
                ))
            }
        </>
    );
};