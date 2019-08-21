import React,{Component} from 'react';
import Axios from 'axios';
import StartSurveySub from './StartSurveySub';
// import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy'
import HostName from '../../assets/globalvaribles/GlobalVariables';
// require('dotenv').config();
class StartSurvey extends Component{
    state={
        showSideDrawer:false,
        displayComponent:false,
        collegeName:'',
        collegeID:''
    }
    componentWillMount(){
        Axios.defaults.xsrfCookieName = 'csrftoken'
        Axios.defaults.xsrfHeaderName = 'X-CSRFToken'
        Axios.get(HostName+"college/")
        .then(Response=>{
               const collegeArr= Response.data.filter(item=>{
               return (("/"+item.collegeURL===this.props.match.url));
           })
           if(collegeArr.length===1){
               this.setState({displayComponent:true,collegeName:collegeArr[0].collegeName,collegeID:collegeArr[0].collegeID})
           }
           else{
           }
        })
    }
    SideDrawerClosedHandler=()=>{
        this.setState({showSideDrawer:false})
    }
    SideDrawerToggleHandler=()=>{
        this.setState((prevState)=>{
            return{showSideDrawer:!prevState.showSideDrawer}
        })
    }
    onClickHandler=()=>{  
        Axios.defaults.xsrfCookieName = 'csrftoken'
        Axios.defaults.xsrfHeaderName = 'X-CSRFToken'
        Axios.post(HostName+"survey/",{surveyType:'hhs'}).then(response=>{
            const surveyID=response.data.surveyID
            if(this.props.match.url==="/"){
                this.props.history.push({pathname:"/demo/hhs"+surveyID+"/family"})
            }
            else{this.props.history.push({pathname:this.props.match.url+"/hhs"+surveyID+"/family"})}
        })
        .catch(e=>console.log("network not connected"))
            
    }
    
    render(){    
        let showElement;
        if(this.props.match.url==="/"){
            showElement=<StartSurveySub collegeName={"demo"} collegeID={'1'} showSideDrawer={this.state.showSideDrawer} SideDrawerToggleHandler={this.SideDrawerToggleHandler} SideDrawerClosedHandler={this.SideDrawerClosedHandler}  submitClicked={this.onClickHandler}></StartSurveySub>
        }
        else{
                showElement=null
        }
        const element=this.state.displayComponent?<StartSurveySub collegeName={this.state.collegeName} collegeId={this.state.collegeId}  showSideDrawer={this.state.showSideDrawer} SideDrawerToggleHandler={this.SideDrawerToggleHandler} SideDrawerClosedHandler={this.SideDrawerClosedHandler}  submitClicked={this.onClickHandler}></StartSurveySub>:showElement;
    return element
    }
}
export default StartSurvey;