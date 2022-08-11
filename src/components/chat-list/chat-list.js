import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';

function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}`,
    };
}



export function ChatList() {
    const listOfChats = [{ name: 'Mr. Robot', id: 1, lastMsg: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum quas aliquam error autem quaerat ex neque corporis ab! Inventore eligendi doloribus accusamus incidunt ad minus, culpa quasi officia dolores quibusdam.' }, { name: 'John', id: 2, lastMsg: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum quas aliquam error autem quaerat ex neque corporis ab! Inventore eligendi doloribus accusamus incidunt ad minus, culpa quasi officia dolores quibusdam.' }, { name: 'Sandra K', id: 3, lastMsg: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum quas aliquam error autem quaerat ex neque corporis ab! Inventore eligendi doloribus accusamus incidunt ad minus, culpa quasi officia dolores quibusdam.' }]
    return (
        <List sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {listOfChats.map((chat, index) => (
                <ListItem key={index} disablePadding>
                    <ListItemButton sx={{ flexWrap: 'wrap', padding: 0 }}>
                        <ListItemIcon>
                            <Avatar {...stringAvatar(chat.name)} />
                        </ListItemIcon>
                        <ListItemText primary={chat.name} />
                        <ListItemText primary={<Typography color='rgb(87, 87, 87)' noWrap>{chat.lastMsg}</Typography>} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    )
}
