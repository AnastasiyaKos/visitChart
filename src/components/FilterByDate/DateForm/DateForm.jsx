import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';

import 'date-fns';
import Grid from '@material-ui/core/Grid';


const DateForm = ({ selectedDate, handleDateChange, label}) => {

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify='space-around'>
                <KeyboardDatePicker
                    disableToolbar
                    variant='inline'
                    format='dd/MM/yyy'
                    margin='normal'
                    id='date-picker'
                    label={label}
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date'
                    }}
                />
            </Grid>
        </MuiPickersUtilsProvider>
    );
}

export default DateForm;
