import React, { Component } from "react";
import { Grid, Typography } from "@mui/material";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import GDSEButton from '../../components/common/Button';

class Customer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitCustomer} >
                <Grid container className="pt-2" spacing={3}>
                    <Grid item lg={12} xs={12} sm={12} md={12}>
                        <Typography variant="h2">Customer Manage</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography variant="subtitle1">Customer Id</Typography>
                        <TextValidator
                            id="outlinedbasic"
                            placeholder="Customer Id"
                            variant="outlined"
                            size="small"
                            style={{ width: '100%' }}
                            // value={}
                            // onChange={(e) => {
                            //     let formData = this.state.formData
                            //     formData.id = e.target.value
                            //     this.setState({ formData })
                            // }}
                            validators={['required']}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Typography variant="subtitle1">Customer Name</Typography>
                        <TextValidator
                            id="outlinedbasic"
                            placeholder="Customer Name"
                            variant="outlined"
                            size="small"
                            style={{ width: '100%' }}
                            // value={}
                            // onChange={(e) => {
                            //     let formData = this.state.formData
                            //     formData.id = e.target.value
                            //     this.setState({ formData })
                            // }}
                            validators={['required']}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Typography variant="subtitle1">Customer Address</Typography>
                        <TextValidator
                            id="outlinedbasic"
                            placeholder="Customer Address"
                            variant="outlined"
                            size="small"
                            style={{ width: '100%' }}
                            // value={}
                            // onChange={(e) => {
                            //     let formData = this.state.formData
                            //     formData.id = e.target.value
                            //     this.setState({ formData })
                            // }}
                            validators={['required']}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Typography variant="subtitle1">Customer Salary</Typography>
                        <TextValidator
                            id="outlinedbasic"
                            placeholder="Customer Salary"
                            variant="outlined"
                            size="small"
                            style={{ width: '100%' }}
                            // value={}
                            // onChange={(e) => {
                            //     let formData = this.state.formData
                            //     formData.id = e.target.value
                            //     this.setState({ formData })
                            // }}
                            validators={['required']}
                        />
                    </Grid>
                    <Grid container style={{marginTop: '10px'}} direction="row" justifyContent="flex-end" alignItems="center">
                        <GDSEButton label="save" type="submit" size="small" color="primary" variant="outlined"/>
                    </Grid>
                </Grid>
            </ValidatorForm>


        );
    }
}

export default Customer;