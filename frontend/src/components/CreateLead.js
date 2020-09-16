import React, {Component} from "react";
import {Grid, Typography, TextField, Button, Input} from "@material-ui/core";



class CreateLead extends  Component {

    constructor(props) {
        super(props);
        this.state = {
            'name': 'aditi',
            'email': 'aditi@gmail.com',

        }
        console.log(this.state.name);
        console.log(this.state.email);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = () => {
        console.log('in submit');
        console.log(this.state.name)
        console.log(this.state.email)

    }

    render(){
        return(
            <Grid container direction="column" alignItems="center">

                <Grid item>

                <Input id="name-input" variant="outlined"
                    onChange={e=> {
                    this.setState({name:e.target.value})
                    }}
                    />
                </Grid>
                <Grid item>
                <Typography>
                    Enter the name
                </Typography>
                </Grid>
                <Grid item>
                    <Input id="email-input" variant="outlined"
                        onChange={e=> {
                        this.setState({email:e.target.value})
                    }}
                    />

                </Grid>
                <Grid item>
                    <Typography>
                        Enter the email
                    </Typography>
                </Grid>
                <Button
                    onClick={this.handleSubmit}>
                    Submit
                </Button>

            </Grid>
        )
    }
}



export default CreateLead;