import React, { Component } from 'react';
import Button from "./button"
import Output from "./Output";
import "./box.css"


class Box extends Component {
  constructor(props){
    super (props);
    this.state ={
      PRButton: true,
      showForm:false,      
      showOutput: false,
      monfi: '',
      yearFirst: '', 
      monthSecond: '',
      yearSecond: '',
      jobDes: '',
      employment: '',
      company: '',
      website: '',
      place: '',
      country: '',
      desc: '', 
      salutation: '',   
      forename: '',
      surname: '',
      position: '',
      phone: '',
      mail: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.showOutput = this.showOutput.bind(this);
    this.showForm = this.showForm.bind(this);
    this.quitForm = this.quitForm.bind(this);
  }
  
  handleChange (event) {
    this.setState({ [event.target.name]: event.target.value });
  };
  
  showForm(){
    this.setState({
      PRButton: false,
      showForm: true,
      showOutput: false
    });
  }


  showOutput(){
    this.setState({
      showOutput: true,
      showForm: false,
    });
  }

  quitForm(){
    this.setState({
      showForm:false,
      PRButton: true,
    });
  }

render(){
    return (
<div className="Form">
{/* Ausgabe des Formulares */}
{this.state.showForm ?
  <div className="collapse show">
    <div className="card card-body">
    <div className="row">
    <h5 className="col-12">Praxiserfahrung hinzuf&uuml;gen</h5>
      <div className="col-6 Box-FormWrapper">
        <label className="Box-label" htmlFor="monfi">Von (Monat)</label>
            <select name="monfi" onChange={this.handleChange} className="Box-select" id="monfi" >
              <option disabled selected>...</option>
              <option value="1">Januar</option>
              <option value="2">Februar</option>
              <option value="3">März</option>
              <option value="4">April</option>
              <option value="5">Mai</option>            
              <option value="6">Juni</option>
              <option value="7">Juli</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">Oktober</option>
              <option value="11">November</option>
              <option value="12">Dezember</option>
            </select>
        </div>
          <div className="col-6 Box-FormWrapper">
            <label className="Box-label" htmlFor="yearFirst"> Von (Jahr) </label>
              <select name="yearFirst" onChange={this.handleChange} className="Box-select" id="yearFirst" > 
                <option disabled selected>...</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>            
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
              </select>
          </div>

      <div className="col-6 Box-FormWrapper">
        <label className="Box-label" htmlFor="monthSecond">Von (Monat)</label>
        <select name="monthSecond" onChange={this.handleChange} className="Box-select" id="monthSecond" >
              <option disabled selected>...</option>
              <option value="1">Januar</option>
              <option value="2">Februar</option>
              <option value="3">März</option>
              <option value="4">April</option>
              <option value="5">Mai</option>            
              <option value="6">Juni</option>
              <option value="7">Juli</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">Oktober</option>
              <option value="11">November</option>
              <option value="12">Dezember</option>
            </select>
        </div>

          <div className="col-6 Box-FormWrapper">
            <label className="Box-label" htmlFor="yearSecond"> Von (Jahr) </label>
              <select name="yearSecond" onChange={this.handleChange} className="Box-select" id="yearSecond" > 
                <option disabled selected>...</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>            
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
              </select>
          </div>

          <div className="col-6 Box-FormWrapper">
            <label className="Box-label" htmlFor="jobDes">Jobbezeichnung</label>
            <input name="jobDes" onChange={this.handleChange} className="Box-input" id="jobDes" />
            </div>

          <div className="col-6 Box-FormWrapper">
            <label className="Box-label" htmlFor="employment"> Besch&auml;ftigungsart </label>
              <select name="employment" onChange={this.handleChange} className="Box-select" id="employment" > 
                <option disabled selected>...</option>
                <option value="Vollzeit">Vollzeit</option>
                <option value="Teilzeit">Teilzeit</option>
                <option value="Praktikum">Praktikum</option>
              </select>
          </div>

          <div className="col-6 Box-FormWrapper">
            <label className="Box-label" htmlFor="company">Unternehmen</label>
            <input name="company" onChange={this.handleChange} className="Box-input" id="company" />
          </div>

          <div className="col-6 Box-FormWrapper">
            <label className="Box-label" htmlFor="website">Website</label>
            <input name="website" onChange={this.handleChange} className="Box-input" id="website" />
          </div>

          <div className="col-6 Box-FormWrapper">
            <label className="Box-label" htmlFor="place">Ort</label>
            <input name="place" onChange={this.handleChange} className="Box-input" id="place" />
          </div>

          <div className="col-6 Box-FormWrapper">
            <label className="Box-label" htmlFor="country">Land</label>
            <input name="country" onChange={this.handleChange} className="Box-input" id="country" />
          </div>

          <div className="col-12 Box-FormWrapper">
            <label className="Box-label" htmlFor="desc">Beschreibung</label>
            <textarea name="desc" onChange={this.handleChange} className="Box-textarea" id="desc" />
          </div>
          
          <div className="col-6 Box-FormWrapper">
            <label className="Box-label" htmlFor="salutation">Anrede</label>
            <select name="salutation" onChange={this.handleChange} className="Box-select" id="salutation">            
              <option disabled selected>...</option>
              <option value="Herr">Herr</option>
              <option value="Frau">Frau</option>
            </select>
          </div>

          <div className="col-6 Box-FormWrapper">
            <label className="Box-label" htmlFor="title">Titel</label>
            <input name="title" onChange={this.handleChange} className="Box-input" id="title" />
          </div>

          <div className="col-6 Box-FormWrapper">
            <label className="Box-label" htmlFor="forename">Vorname</label>
            <input name="forename" onChange={this.handleChange} className="Box-input" id="forename" />
          </div>

          <div className="col-6 Box-FormWrapper">
            <label className="Box-label" htmlFor="surname">Nachname</label>
            <input name="surname" onChange={this.handleChange} className="Box-input" id="surname" />
          </div>         
          
          <div className="col-6 Box-FormWrapper">
            <label className="Box-label" htmlFor="position">Position</label>
            <input name="position" onChange={this.handleChange} className="Box-input" id="position" />
          </div>  

          <hr />

          <div className="col-6 Box-FormWrapper">
            <label className="Box-label" htmlFor="phone">Telefonnummer</label>
            <input name="phone" onChange={this.handleChange} className="Box-input" id="phone" />
          </div>     

          <div className="col-6 Box-FormWrapper">
            <label className="Box-label" htmlFor="mail">Telefonnummer</label>
            <input name="mail" onChange={this.handleChange} className="Box-input" id="mail" />
          </div>   

{/* Button zum speichern bzw. beenden */}
          <div className="button-save">
            <a href="#" onClick={this.showOutput}>speichern</a>
          </div>

          <div className="button-quit">
            <a href="#" onClick={this.quitForm} >abbrechen</a>
          </div>

        </div>
    </div>
  </div> : null}

  {/* Ausgabe der eingebenen Daten */}
  {this.state.showOutput ? 
  <Output 
    phone={this.state.phone} 
    mail={this.state.mail} 
    forename={this.state.forename} 
    surname={this.state.surname} 
    position={this.state.position} 
    salutation={this.state.salutation} 
    place={this.state.place} 
    jobDes={this.state.jobDes} 
    country={this.state.country} 
    desc={this.state.desc} 
    employment={this.state.employment} 
    company={this.state.company} 
    website={this.state.website} 
    monfi={this.state.monfi} 
    yearFirst={this.state.yearFirst} 
    yearSecond={this.state.yearSecond}  
    monthSecond={this.state.monthSecond}
    openForm={this.showForm}
  /> 
  : null} 

  {/* Ausgabe des hinzufügen Buttons */}
  {this.state.PRButton ? <Button showForm={this.showForm}/> : null} 
</div>
    );
  }
}

export default Box;