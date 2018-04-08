import React, { Component } from 'react';
import "./Output.css";
import './App.css';


class Output extends Component {
    render(){

// Berechnung des Jahres bzw. des Monats        
        let years = this.props.yearSecond - this.props.yearFirst;
        let monfi = this.props.monfi;
        let monthSecond = this.props.monthSecond;
        let StringOne = String(monthSecond);
        let calcOne = 12 - monfi;
        let clacTwo = StringOne  +++ calcOne;
        let calcThree = monthSecond - monfi;

// Ausgabe der gesamten Formulardate
        return(
            <div className="panel panel-default">
                <div className="panel-body">
                    <div className="row">
{/* Linke Spalte*/}
                        <div className="col-sm-4">
                            <p>{this.props.monfi}.{this.props.yearFirst}{' bis ' + this.props.monthSecond}.{this.props.yearSecond}<br /></p>
                            {this.props.employment ? <p className="pill"> {this.props.employment} </p> : null} 
                            <p className="pill"> {years < 0 ? null : years + ' Jahr(e),'} {clacTwo >= 12 ? calcThree + ' Monat(e)' : clacTwo + ' Monate'}</p>
                        </div>
{/* Rechte Spalte */}
                        <div className="col-sm-8">
                            <h4>{this.props.jobDes}</h4>
                                <p>{this.props.website ? <span className="company"> <a href={'http://' + this.props.website} target="blank">{this.props.company}</a></span> : <span className="company">{this.props.company}</span>} {this.props.place ? ' in ' + this.props.place : null } <span className="country">{this.props.country ? '(' + this.props.country + ')' : null }</span></p>
                            <p>{this.props.desc}</p>

                            <div className="button-quit output-button">
                                <a onClick={this.props.openForm} href="#">bearbeiten</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
} 

export default Output;