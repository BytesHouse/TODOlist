import { Checkbox } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function CheckBox() {
    return <div>
    <FormControlLabel control={<Checkbox defaultChecked  sx={{ '& .MuiSvgIcon-root': { fontSize: 24 } }} style ={{
                      color: "#ffffff",
                    }}/>} label={<span style={{ fontSize: '24px' }}>Today Tasks:</span>} />
    </div>
}