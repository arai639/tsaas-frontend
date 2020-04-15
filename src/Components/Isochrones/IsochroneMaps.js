import React, { Component } from 'react';
import classes from './IsochroneMaps.css';
import HereMaps from './HereMaps';
import MapControls from './MapControls'
class MAps extends Component {
  constructor(props) {
    super(props);

    this.state = {
        city:null,pois:'',modes:'car',modeState:'enabled',modePreference:'fastest',updatedFetchCount:0,
        theme: 'normal.day',
        lat:"28.7041",
        lng:"77.1025",
        value:null,secPois:'',
        timeBins:"",
      }
    this.onChange = this.onChange.bind(this);
}
inputHandler=(event)=>{
  var inputCopy=this.state[[event.target.name]]
  inputCopy=event.target.value
  this.setState({[[event.target.name]]:inputCopy}) 
}
fetchHandler=()=>{
  this.setState({updatedFetchCount:this.state.updatedFetchCount+1})
}
cityEnteredHandler=()=>{
  var platform=new window.H.service.Platform({app_id:process.env.REACT_APP_PLACES_API_ID,app_code:process.env.REACT_APP_PLACES_APP_CODE })
  this.getCityCoordinates(platform)
}
getCityCoordinates=(platform)=>{
  var geocoder = platform.getGeocodingService();
 geocoder.geocode({searchText:this.state.city}, this.onResult, function(e) {
  alert(e);

});
 }
onResult = (result)=> {
  var locations = result.Response.View[0].Result,
      position
    position = {
      lat: locations[0].Location.DisplayPosition.Latitude,
      lng: locations[0].Location.DisplayPosition.Longitude
    };
    this.setState({lat:position.lat,lng:position.lng})
  
};
       
onChange(evt) {
    evt.preventDefault();

    var change = evt.target.id;
    this.setState({
        "theme": change,
    });
}
  render() {
    return (
      
      <div className={classes.MainContainer}>
        <MapControls fetchHandler={this.fetchHandler} pois={this.state.pois} secPois={this.state.secPois} mode={this.state.modes} modePreference={this.state.modePreference} timeBins={this.state.timeBins} modeState={this.state.modeState} cityEnteredHandler={this.cityEnteredHandler} inputHandler={this.inputHandler}></MapControls>
        <HereMaps
          pois={this.state.pois}
          secPois={this.state.secPois}
          app_id={process.env.REACT_APP_PLACES_API_ID}
          app_code={process.env.REACT_APP_PLACES_APP_CODE}
          lat={this.state.lat}
          lng={this.state.lng}
          zoom="12"
          updatedFetchCount={this.state.updatedFetchCount}
          mode={this.state.modes}
          modeState={this.state.modeState}
          modePreference={this.state.modePreference}
          theme={ this.state.theme}
          timeBins={this.state.timeBins}
          inputChange={(event)=>this.inputHandler(event)}
        ></HereMaps>
        {/* <ThemeSelector changeTheme={ this.onChange } /> */}
      </div>
    );
  }
}

export default MAps;
