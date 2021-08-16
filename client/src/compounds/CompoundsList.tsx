import React from 'react';
import { List } from '@material-ui/core';
import { Compound } from './types';
import CompoundsListItem from './CompoundsListItem';
import { view } from '@risingstack/react-easy-state';
import CompoundsStore from './CompoundsStore';

interface CompoundListProps {
    compounds: Compound[];
}

export default view(({ compounds }: CompoundListProps) => (
    <List>
        {
            compounds.map(compound => (
                <CompoundsListItem
                    compound={compound}
                    handleListItemSelect={(compound_id) => CompoundsStore.selectCompound(compound_id)}
                    selected={compound.compound_id === CompoundsStore.selectedCompoundId}
                />
            ))
        }
    </List>
));
