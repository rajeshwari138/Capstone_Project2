import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';
import {
  Typography,
  Paper,
  Grid,
  Button,
  CssBaseline,
  RadioGroup,
  FormLabel,
  MenuItem,
  FormGroup,
  FormControl,
  FormControlLabel,
} from '@material-ui/core';

const onSubmit = async values => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};
const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  if (!values.email) {
      errors.email = 'Required';
  }
  if(!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(values.email))){
    errors.email = 'Kindly enter a Valid email address';
  }
  return errors;
};

export default function MyAccount() {
  return (
      <>
      <div className='sub-header'>
       <h5>Edit Profile</h5>
       <Link to='/studentdashboard'><Button variant="contained" sx={{ mt: 25 }} style={{backgroundColor:'#2196f3', color: 'white'}}>BACK</Button></Link>
      </div>
      <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
        <CssBaseline />
        <Typography variant="h4" align="center" component="h1" gutterBottom>
          🏁 Full-Stack Developer
        </Typography>
        <Typography variant="h5" align="center" component="h2" gutterBottom>
          My Details
        </Typography>
        <Form
        onSubmit={onSubmit}
        initialValues={{ employed: true, experience: 'Fresher' }}
        validate={validate}
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Paper style={{ padding: 16 }}>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={6}>
                  <Field
                    fullWidth
                    required
                    name="firstName"
                    component={TextField}
                    type="text"
                    label="First Name"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    fullWidth
                    required
                    name="lastName"
                    component={TextField}
                    type="text"
                    label="Last Name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="email"
                    fullWidth
                    required
                    component={TextField}
                    type="email"
                    label="Email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    label="Employed"
                    control={
                      <Field
                        name="employed"
                        component={Checkbox}
                        type="checkbox"
                      />
                    }
                  />
                </Grid>
                <Grid item>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Experience</FormLabel>
                    <RadioGroup row>
                      <FormControlLabel
                        label="Fresher"
                        control={
                          <Field
                            name="experience"
                            component={Radio}
                            type="radio"
                            value="Fresher"
                          />
                        }
                      />
                      <FormControlLabel
                        label="1-3 years"
                        control={
                          <Field
                            name="experience"
                            component={Radio}
                            type="radio"
                            value="1-3 years"
                          />
                        }
                      />
                      <FormControlLabel
                        label="More than 3 years"
                        control={
                          <Field
                            name="experience"
                            component={Radio}
                            type="radio"
                            value="More than 3 years"
                          />
                        }
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Languages Known</FormLabel>
                    <FormGroup row>
                      <FormControlLabel
                        label="JavaScript"
                        control={
                          <Field
                            name="languages known"
                            component={Checkbox}
                            type="checkbox"
                            value="JavaScript"
                          />
                        }
                      />
                      <FormControlLabel
                        label="SQL"
                        control={
                          <Field
                            name="languages known"
                            component={Checkbox}
                            type="checkbox"
                            value="SQL"
                          />
                        }
                      />
                      <FormControlLabel
                        label="Python"
                        control={
                          <Field
                            name="languages known"
                            component={Checkbox}
                            type="checkbox"
                            value="Python"
                          />
                        }
                      />
                      <FormControlLabel
                        label="PHP"
                        control={
                          <Field
                            name="languages known"
                            component={Checkbox}
                            type="checkbox"
                            value="PHP"
                          />
                        }
                      />
                    </FormGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="Bio"
                    component={TextField}
                    multiline
                    label="Bio"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="city"
                    component={Select}
                    label="Select your City"
                    formControlProps={{ fullWidth: true }}
                  >
                    <MenuItem value="Chennai">Chennai</MenuItem>
                    <MenuItem value="Udupi">Udupi</MenuItem>
                    <MenuItem value="Bangalore">
                      A city with a very long Name
                    </MenuItem>
                  </Field>
                </Grid>
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    type="button"
                    variant="contained"
                    onClick={reset}
                    // disabled={submitting || pristine}
                  >
                    Reset
                  </Button>
                </Grid>
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={submitting}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Paper>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
    </div>
    </>
  );
}

