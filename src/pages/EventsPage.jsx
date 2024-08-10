import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Navbar from '../components/Navbar';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function EventsPage() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="bg-[#17153B]">
            <Navbar></Navbar>
            <Box sx={{ width: '100%', height: '90vh', p: 3 }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab sx={{
                            color: "white", '&.Mui-selected': {
                                color: '#1890ff'
                            }
                        }} label="Past" {...a11yProps(0)} />
                        <Tab sx={{ color: "white" }} label="Present" {...a11yProps(1)} />
                        <Tab sx={{ color: "white" }} label="Upcoming" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    New events
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    Presentt
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    All are here
                </CustomTabPanel>
            </Box>
        </div>

    );
}
