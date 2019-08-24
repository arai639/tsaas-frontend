import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Members from "../../Components/Members/Members";
import Trips from "../Trips/Trips";
import StartSurvey from "../../Components/StartSuvey/StartSurvey";
import ParentHome from "../../Components/ParentHome/ParentHome";
import Family from "../../Components/Family/Family";
import PrivacyPolicy from "../../Components/PrivacyPolicy/PrivacyPolicy";
import ContactUs from "../../Components/ContactUs/ContactUs";
import FinishSurvey from "../../Components/FinishSurvey/FinishSurvey";
import Wiki from "../../Components/Wiki/Wiki";
import RAHome from "../../Components/roadAccidents/AccidentsHome";

import PersonalInformation from "../../Components/PTSurvey/PersonalInformation/PersonalInformation";
import TravelInformation from "../../Components/PTSurvey/TravelInformation/TravelInformation";
import PTHome from "../../Components/PTSurvey/PTHome";
import RatingForm from "../../Components/PTSurvey/RatingForm/RatingForm";

class Survey extends Component {
  render() {
    return (
      <div>
        {/* <Members 
        // changedMems={this.inputChangeHandler} 
        // membInfo={this.state.member}
        >
        </Members> */}
        {/* <Trips>\
        </Trips> */}
        <Switch>
          {/* <Route path='/' component={StartSurvey}/>     */}
          <Route path="/rdac" exact component={RAHome} />
          Route path="/pts" exact component={PTHome} />
          <Route
            path="/pts/personal-info"
            exact
            component={PersonalInformation}
          />
          <Route
            path="/pts/:id/travel-info"
            exact
            component={TravelInformation}
          />
          <Route path="/pts/:id/rating-form" exact component={RatingForm} />
          <Route path="/finishsurvey" exact component={FinishSurvey} />
          <Route path="/privacypolicy" exact component={PrivacyPolicy} />
          <Route path="/contact" exact component={ContactUs} />
          <Route path="/wiki" exact component={Wiki} />
          <Route path="/" exact component={ParentHome} />
          <Route path="/:id" exact component={StartSurvey} />
          <Route path="/:id/:id" exact component={StartSurvey} />
          {/* <Route path='/:id/wiki' exact component={Wiki}/> */}
          {/* <Route path='/privacypolicy' exact component={PrivacyPolicy}/>  */}
          {/* <Route path='/family' exact component={Family}></Route> */}
          {/* <Route path='/:id/hhs:id/family'exact component={Family}></Route>
        <Route path="/:id/hhs:id/family:id/member" exact component={Members}/>
        <Route path="/:id/hhs:id/family:id/member:id1/trip-info" exact component={Trips}/>
         */}
          <Route path="/:id/:id/:id/family" exact component={Family}></Route>
          <Route
            path="/:id/:id/:id/family:id/member"
            exact
            component={Members}
          />
          <Route
            path="/:id/:id/:id/family:id/member:id1/trip-info"
            exact
            component={Trips}
          />
        </Switch>
      </div>
    );
  }
}
export default Survey;
