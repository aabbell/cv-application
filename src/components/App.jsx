import React, { useState } from "react";
import General from "./General.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import Cv from "./Cv.jsx";
import Button from "./Button.jsx";
import "../style/App.css"


function App (){
    const [generalInfo, setGeneralInfo] = useState({
        name : "",
        email: "",
        phoneNumber: "",
    })

    const [educationInfo, setEducationInfo] = useState({
        schoolName : "",
        titleOfStudy : "",
        dateOfStudy : "" ,
       })

    const [experienceInfo, setExperienceInfo] = useState({
        companyName : "",
        postionTitle: "",
        mainResponsibilities: "",
    })
    const updateGeneral = (field , value) => {
        setGeneralInfo((prevState) => ({ ...prevState, [field]: value}))
}
    const updateEducation = (field, value) => {
        setEducationInfo((prevState) => ({ ...prevState,[field]: value}))
    }

    const updateExperience = (field, value) => {
        setExperienceInfo((prevState) => ({ ...prevState,[field]: value}))
    }
    const [showCv, setShowCv] = useState(false)
    return(
        <div className="container">
            <div className="input-field">
            <div className="input">
            <General
            generalInfo = {generalInfo}
            updateGeneral = {updateGeneral}
            />
            <Education
            educationInfo = {educationInfo}
            updateEducation = {updateEducation}
            />
            <Experience
            experienceInfo = {experienceInfo}
            updateExperience = {updateExperience}
            />
            </div>
            <div className="buttons">
            <Button handleClick={()=> setShowCv(true)}/>
            <Button 
            text="clear" 
            backgroundColor="red" 
            handleClick={() => { 
                setShowCv(false)
                setGeneralInfo({ name: "", email: "", phoneNumber: "" });
                setEducationInfo({ schoolName: "", titleOfStudy: "", dateOfStudy: "" });
                setExperienceInfo({ companyName: "", positionTitle: "", mainResponsibilities: "" })
            }}/>
            </div>
            </div>
            <div className="Cv-field">
           {showCv && (<Cv 
                    generalInfo={generalInfo}
                    educationInfo={educationInfo}
                    experienceInfo={experienceInfo}
                    />
           )}
           </div>
            
        </div>
    )
}

export default App;