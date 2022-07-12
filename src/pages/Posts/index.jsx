import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import React, { Component, Fragment } from "react";
import { styleSheet } from "./style";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import GDSEButton from "../../components/common/Button";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import PostService from "../../services/PostService";
import GDSESnackBar from "../../components/common/SnackBar";

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                userId: '',
                id: '',
                title: '',
                body: ''
            },
            alert: false,
            message: '',
            severity: ''
        }
    }

    async loadData() {
        let res =-await PostService.fetchPosts();
        if(res.status === 200) {
            console.log("res: " + res)
        } else {
            console.log("error: " + res)
        }
    }

    componentDidMount() {
        console.log('Post Screen Mounted!');
        this.loadData();
    }

    // componentWillUnmount() {
    //     console.log("Post Scren Unmounted!!")
    // }

    handleSubmit = async () => {
        console.log('save button clicked!!')
        console.log(this.state.formData)
        let formData = this.state.formData
        let response = await PostService.createPost(formData);
        if (response.status === 201) {
            this.setState({
                alert: true,
                message: 'Post created succesfully!',
                severity: 'success'
            })
        } else {
            this.setState({
                alert: true,
                message: 'Post created Unsuccesfully!',
                severity: 'error'
            })
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <Typography variant="h4">
                    Poster Manage
                </Typography>
                <ValidatorForm
                    ref="form"
                    onSubmit={this.handleSubmit}
                    onError={errors => console.log(errors)}
                >
                    <Grid container spacing={0.5}>
                        <Grid item lg={6} md={6} sm={6} xm={6} >
                            <Typography variant="body2">User Id</Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeHolder="User Id"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.userId}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.userId = e.target.value
                                    this.setState({ formData })
                                }}
                                style={{ width: '100%' }}
                                validators={['required',]}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6}>
                            <Typography variant="body2">Id</Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeHolder="Id"
                                variant="outlined"
                                size="small"
                                style={{ width: '100%' }}
                                validators={['required']}
                                value={this.state.formData.id}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.id = e.target.value
                                    this.setState({ formData })
                                }}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6} >
                            <Typography variant="body2">Title</Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeHolder="Title"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.title}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.title = e.target.value
                                    this.setState({ formData })
                                }}
                                style={{ width: '100%' }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6}>
                            <Typography variant="body2">Body</Typography>
                            <TextValidator
                                id="outlined-basic"
                                placeHolder="Body"
                                variant="outlined"
                                size="small"
                                value={this.state.formData.body}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.body = e.target.value
                                    this.setState({ formData })
                                }}
                                style={{ width: '100%' }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xm={12} style={{ display: 'flex' }} justifyContent="flex-end" >
                            <GDSEButton size="small" variant="contained" label="save" type="submit" />
                        </Grid>
                    </Grid>
                </ValidatorForm>
                <GDSESnackBar
                    open={this.state.alert}
                    onClose={() => {
                        this.setState({ open: false })
                    }}
                    message={this.state.message}
                    autoHideDuration={3000}
                    severity={this.state.severity}
                    variant="filled"
                />
            </Fragment>

        )
    }
}
export default withStyles(styleSheet)(Posts)