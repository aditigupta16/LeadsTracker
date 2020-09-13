import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, } from 'react-router-dom';
import ListLeads from "./ListLeads.js";
import CreateLead from "./CreateLead.js";
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Container,
    Divider,
    Grid,
    Link,
    Typography,
    Avatar,
    withStyles,
    MuiThemeProvider,
    createMuiTheme,
} from "@material-ui/core";

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Route exact path="/" component={ListLeads}/>
                <Route path="/create-lead/" component={CreateLead} />
            </BrowserRouter>
        );
    }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);