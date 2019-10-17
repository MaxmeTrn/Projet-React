import React, { Component } from './node_modules/react';
import { MDBContainer, MDBFooter } from './node_modules/mdbreact';

export default class Footer extends Component {
    
    render() {
        return (
            <MDBFooter className="font-small mb-0" style={{position:'fixed', minWidth:'100%'}} >
            <MDBContainer fluid className="tempting-azure-gradient text-center py-3" >
            <p className="dark-grey-text">Designed and Developped by
            <a href="https://www.facebook.com/K1ary" className="black-text font-weight-bold"> @Maxime Tran </a>
            and
            <a href="https://www.facebook.com/louis.deveze.9" className="black-text font-weight-bold"> @Louis Devèze </a>
            in {new Date().getFullYear()}
            </p>
            </MDBContainer>
            
            </MDBFooter>
            );
        }
        
    }