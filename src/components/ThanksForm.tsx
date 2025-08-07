import * as React from 'react';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';

import Diversity3Icon from '@mui/icons-material/Diversity3';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import StarsIcon from '@mui/icons-material/Stars';

const ThanksType = [
    {
        value: 'atvirumas',
        label: '#Atvirumą',
        icon: <Diversity3Icon fontSize="small" />
    },
    {
        value: 'atsakingumas',
        label: '#Atsakingumą',
        icon: <AssignmentTurnedInIcon fontSize="small" />
    },
    {
        value: 'patikimumas',
        label: '#Patikimumą',
        icon: <StarsIcon fontSize="small" />
    },
];

export const ThanksForm = () => {
    const [thanksType, setThanksType] = React.useState<string>('');

    return (
        <Box className="thanksCard">
            <Typography
                variant="h6"
                component="div"
                style={{ fontWeight: 'bold' }}
            >
                Įvertink savo kolegę / bendradarbį!
            </Typography>
            <TextField
                label="Kolegė / Darbuotojas"
                fullWidth
            />
            <TextField
                fullWidth
                select
                label="Padėka už"
                value={thanksType}
                onChange={e => setThanksType(e.target.value)}
                SelectProps={{
                    MenuProps: {
                        disableScrollLock: true,
                        PaperProps: {
                            style: {
                                maxHeight: 300,
                            },
                        },
                    },
                }}
            >
                {ThanksType.map((option) => (
                    <MenuItem
                        key={option.value}
                        value={option.value}
                    >
                        <span
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 8
                            }}
                        >
                            {option.icon}
                            {option.label}
                        </span>
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                label="Už ką esi dėkingas?"
                fullWidth
            />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    style={{ borderRadius: '16px' }}
                >
                    Pateikti
                </Button>
            </Box>
        </Box>
    );
}