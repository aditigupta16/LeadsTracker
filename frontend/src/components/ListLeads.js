import React, {Component} from "react";
import {Grid, Link, Typography} from "@material-ui/core";

class ListLeads extends  Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loaded: false,
            placeholder: "Loading"
        };
    }

    componentDidMount() {
        fetch("api/lead")
            .then(response => {
                if (response.status > 400) {
                    return this.setState(() => {
                        return { placeholder: "Something went wrong!" };
                    });
                }
                return response.json();
            })
            .then(data => {
                this.setState(() => {
                    return {
                        data,
                        loaded: true
                    };
                });
            });
    }


    render(){

        return(
            <Grid container >
                {this.state.data.map(contact => {
                    return (
                        <Grid item key={contact.id} xs={12}>
                            <Typography>{contact.name} - {contact.email}
                            </Typography>

                        </Grid>
                    );
                })}
                <Link href={"localhost:8000/create-lead/"}>Create Lead</Link>

            </Grid>

        )


    }



}

export default ListLeads;