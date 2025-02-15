import React, { useState } from "react";
import General from "./General.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import Cv from "./Cv.jsx";



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
    return(
        <div>
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

            <Cv
            generalInfo = {generalInfo}
            educationInfo = {educationInfo}
            experienceInfo = {experienceInfo}
            />
        </div>
    )
}

export default App;