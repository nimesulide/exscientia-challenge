import React, { useState } from 'react';
import { makeStyles, Button, Popover, Card, CardContent, CardActions } from '@material-ui/core';
import SimpleSelectGroup from './SimpleSelectGroup';

interface ActionButtonWithDialogProps {
    title: string;
    icon?: React.ReactElement;
    configs: { [key: string]: string[] };
    initialConfig?: { [key: string]: string };
    handleConfirm: (config: { [key: string]: string }) => void;
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
    addButton: {
        width: '100%'
    }
}));

export default ({ title, icon, configs, initialConfig, handleConfirm }: ActionButtonWithDialogProps) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [config, setConfig] = useState(initialConfig ?? {});

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSetConfig = (configToSet: typeof config) => {
        setConfig(Object.assign({}, config, configToSet));
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <Button aria-describedby={id} variant={'text'} color={'inherit'} onClick={handleClick} startIcon={icon}>
                {title}
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
                        <SimpleSelectGroup
                            configs={configs}
                            initialConfig={initialConfig}
                            onChange={handleSetConfig}
                        />
                    </CardContent>
                    <CardActions>
                        <Button
                            className={classes.addButton}
                            onClick={() => {
                                handleConfirm(config);
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