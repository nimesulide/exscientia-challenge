import React from 'react';
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { Compound } from './types';
import CompoundsListItem from './CompoundsListItem';

interface CompoundListProps {
    compounds: Compound[];
}

export default ({ compounds }: CompoundListProps) => (
    <List>
        {
            compounds.map(compound => (
                <CompoundsListItem compound={compound} />
            ))
        }
    </List>
);
