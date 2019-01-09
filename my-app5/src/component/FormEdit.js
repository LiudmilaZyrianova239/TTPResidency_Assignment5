//Liudmila Zyrianova
//Assigment5
import React, { Component } from 'react';
import './FormEdit.css';

class FormEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {  
            fname: "First Name",   
            lname: "Last Name",
            prevfname: "First Name",   
            prevlname: "Last Name",
            firstPage : true,
        };
        this.handleClickEdit = this.handleClickEdit.bind(this);
        this.handleClickSave = this.handleClickSave.bind(this);
        this.handleClickCancel = this.handleClickCancel.bind(this);
        this.handleFNameChange = this.handleFNameChange.bind(this);
        this.handleLNameChange = this.handleLNameChange.bind(this);
    }

    handleClickEdit() {    
        this.setState ({
            prevfname : this.state.fname,
            prevlname : this.state.lname,
            firstPage : false
        });
    }

    handleFNameChange (event) {
        this.setState({
            fname: event.target.value
        });
    }
    handleLNameChange (event) {
        this.setState({
            lname: event.target.value
        });
    }

    handleClickSave(event) {    
        this.setState ({
            firstPage : true
        });
    }

    handleClickCancel() {    
        this.setState ({
            fname : this.state.prevfname,
            lname : this.state.prevlname,
            firstPage : true
        });
    }

    
    render() {
        if (this.state.firstPage) {
            return (
                <div className = "divMain">                
                    <p className= "textFirst">{this.state.fname}</p>
                    <p className= "textFirst">{this.state.lname}</p>
                    <button className= "buttom" onClick={this.handleClickEdit}>Edit</button>
                </div> 
            );                
        } else {
            return (
                <div className = "divMain">
                    <p>You can edit First name and Last name here: </p>
                    <p><input className= "textSecond" type='text' value={this.state.fname} onChange={this.handleFNameChange}/></p>
                    <p><input className= "textSecond" type='text' value={this.state.lname} onChange={this.handleLNameChange}/></p>
                    <p><button className= "buttom" onClick={this.handleClickSave}>Save</button></p>
                    <p><button className= "buttom" onClick={this.handleClickCancel}>Cancel</button></p>
               </div>
            ); 
        }

    }



}



export default FormEdit;