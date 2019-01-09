//Liudmila Zyrianova
//Assigment5
import React, { Component } from 'react';
import './FileEdit.css';

class FileEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            allFiles : true,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {    
        this.setState ({
            allFiles : !this.state.allFiles
        });
    }
    
    render() {
        if (this.state.allFiles) {
            return (
                <div> 
                    <h1 className="header">Home</h1>
                    <button className="buttonToggle" onClick={this.handleClick}>Toggle</button>   
                    <ul className="listOfFiles" width="30%">
                        <li className="file" >
                            <div class="card">
                                <img src="https://img.icons8.com/metro/1600/file.png" alt="Avatar" width="100%"></img>
                                <div class="container">
                                    <h4><b>File1</b></h4> 
                                </div>
                            </div>
                        </li>
                        <li >
                            <div class="card">
                                <img src="https://img.icons8.com/metro/1600/file.png" alt="Avatar" width="100%"></img>
                                <div class="container">
                                    <h4><b>File2</b></h4> 
                                </div>
                            </div>
                        </li>
                        <li >
                            <div class="card">
                                <img src="https://img.icons8.com/metro/1600/file.png" alt="Avatar" width="100%"></img>
                                <div class="container">
                                    <h4><b>File3</b></h4> 
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            );              
        } else {
            return (
                <div> 
                    <h1 className="header">Home</h1>
                    <p><button className="buttonUntoggle" onClick={this.handleClick}>Toggle</button></p>
    
                </div>
            )
        }
    }
    

}



export default FileEdit;