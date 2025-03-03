function Experience ({experienceInfo,updateExperience}){
    return(
        <div>
            <p className="info">Experience</p>
            <div className="Experience-Name">
            <label>Company Name: </label>
            <input 
            placeholder="icog"
            type="text"
            value={experienceInfo.companyName}
            onChange={(e) => updateExperience("companyName",e.target.value)}/>
            </div>
            <div className="Experience-Title">
            <label>Postion Title: </label>
            <input
            placeholder="Backend Developer"
            type="text"
            value={experienceInfo.postionTitle}
            onChange={(e) => updateExperience("postionTitle",e.target.value)}
            />
            </div>
            <div className="Experience-Main">
            <label>Main Responsibilities: </label>
            <input
            placeholder="Database Management"
            type="text"
            value={experienceInfo.mainResponsibilities}
            onChange={(e) => updateExperience("mainResponsibilities",e.target.value)}
            />
            </div>
        </div>
    )
}

export default Experience