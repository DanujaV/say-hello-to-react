import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import React, { Component, Fragment } from "react";
import { styleSheet } from "./style";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import GDSEButton from "../../../components/common/Button"

class GridLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    address: {
                        geolocation: {
                            lat: "-37.3159",
                            long: "81.1496"
                        },
                        city: "kilcoole",
                        street: "new road",
                        number: 7682,
                        zipcode: "12926-3874"
                    },
                    id: 1,
                    email: "john@gmail.com",
                    username: "johnd",
                    password: "m38rmF$",
                    name: {
                        firstname: "john",
                        lastname: "doe"
                    },
                    phone: "1-570-236-7033",
                    __v: 0
                },
                {
                    address: {
                        geolocation: {
                            lat: "-37.3159",
                            long: "81.1496"
                        },
                        city: "kilcoole",
                        street: "Lovers Ln",
                        number: 7267,
                        zipcode: "12926-3874"
                    },
                    id: 2,
                    email: "morrison@gmail.com",
                    username: "mor_2314",
                    password: "83r5^_",
                    name: {
                        firstname: "david",
                        lastname: "morrison"
                    },
                    phone: "1-570-236-7033",
                    __v: 0
                },
            ],
            formData: {
                userId: '',
                date: '',
                products: [
                    {
                        productId: '',
                        quantity: ''
                    }
                ]
            },
            products: [

                {
                    id: 1,
                    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                    price: 109.95,
                    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                    category: "men's clothing",
                    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                    rating: {
                        rate: 3.9,
                        count: 120
                    }
                },
                {
                    id: 2,
                    title: "Mens Casual Premium Slim Fit T-Shirts ",
                    price: 22.3,
                    description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
                    category: "men's clothing",
                    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
                    rating: {
                        rate: 4.1,
                        count: 259
                    }
                },
                {
                    id: 3,
                    title: "Mens Cotton Jacket",
                    price: 55.99,
                    description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
                    category: "men's clothing",
                    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
                    rating: {
                        rate: 4.7,
                        count: 500
                    }
                },

            ]
        }

    }

    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <Typography variant="h4">
                    Customer Manage
                </Typography>
                <Grid container spacing={0.5}>
                    <Grid item lg={6} md={6} sm={6} xm={6} >
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={this.state.users}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="username" />}
                            getOptionLabel={
                                (option) => option.username
                            }
                            onChange={(e, value) => {
                                console.log(value.id)
                                let formData = this.state.formData
                                formData.id = value.id
                                this.setState({ formData });
                            }}
                            size="small"
                            style={{ width: '100%' }}
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={this.state.products}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="product title" />}
                            getOptionLabel={
                                (option) => option.title
                            }
                            onChange={(e, value) => {
                                console.log(value.id);
                            }}
                            size="small"
                            style={{ width: '100%' }}
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6} >
                        <TextField id="outlined-basic" placeHolder="NIC" label="NIC" variant="outlined" size="small"
                            style={{ width: '100%' }} />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <TextField id="outlined-basic" placeHolder="address" label="Outlined" variant="outlined" size="small"
                            style={{ width: '100%' }}
                        />
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xm={12} style={{ display: 'flex' }} justifyContent="flex-end" >
                        <GDSEButton size="small" variant="contained" label="save" />
                    </Grid>
                </Grid>
            </Fragment>

        )
    }
}
export default withStyles(styleSheet)(GridLayout)