import "../style/Education.css"
function Education ({educationInfo,updateEducation}){

    return(
        <div>
                <p className="info">Education</p>
                <div className="Education-Name">
                <label>School Name: </label>
                <input
                placeholder="ASTU"
                type="text"
                value={educationInfo.schoolName}
                onChange={(e) => updateEducation("schoolName",e.target.value)}
                />
                </div>
                <div className="Education-Title">
                <label>Title Of Study: </label>
                <input
                placeholder="Software Engineering"
                type="text"
                value={educationInfo.titleOfStudy}
                onChange={(e) => updateEducation("titleOfStudy",e.target.value)}
                />
                </div>
                <div className="Education-Date">
                <label>Date: </label>
                <input
                type="date"
                value={educationInfo.dateOfStudy}
                onChange={(e) => updateEducation("dateOfStudy",e.target.value)}
                />
                </div>
            </div>
    )
}

export default Education