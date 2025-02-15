function Education ({educationInfo,updateEducation}){

    return(
        <div>

                <input
                placeholder="School Name"
                type="text"
                value={educationInfo.schoolName}
                onChange={(e) => updateEducation("schoolName",e.target.value)}
                />
                <input
                placeholder="Title of Study"
                type="text"
                value={educationInfo.titleOfStudy}
                onChange={(e) => updateEducation("titleOfStudy",e.target.value)}
                />
                <input
                type="date"
                value={educationInfo.dateOfStudy}
                onChange={(e) => updateEducation("dateOfStudy",e.target.value)}
                />
            </div>
    )
}

export default Education