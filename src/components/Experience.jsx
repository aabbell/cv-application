function Experience ({experienceInfo,updateExperience}){
    return(
        <div>
            <input 
            placeholder="Company Name"
            type="text"
            value={experienceInfo.companyName}
            onChange={(e) => updateExperience("companyName",e.target.value)}/>
            <input
            placeholder="Postion Title"
            type="text"
            value={experienceInfo.postionTitle}
            onChange={(e) => updateExperience("postionTitle",e.target.value)}
            />
            <input
            placeholder="Main resposibilities"
            type="text"
            value={experienceInfo.mainResponsibilities}
            onChange={(e) => updateExperience("mainResponsibilities",e.target.value)}
            />
        </div>
    )
}

export default Experience