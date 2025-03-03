import "../style/Cv.css"
export default function Cv({generalInfo,educationInfo,experienceInfo}){

    return(
        <div className="Cv-container">
            <h2 className="Cv-header">CV</h2>
            <div className="Cv-section">
            <p className="Cv-title">General Educaion</p>
            <p><strong>Name:</strong> {generalInfo.name}</p>
            <p><strong>Email:</strong> {generalInfo.email}</p>
            <p><strong>Phone Number:</strong> {generalInfo.phoneNumber}</p>
            </div>

            <div className="Cv-section">
            <p className="Cv-title">Education</p>
            <p><strong>School Name:</strong> {educationInfo.schoolName}</p>
            <p><strong>Title of Study</strong> {educationInfo.titleOfStudy}</p>
            <p><strong>DateOfStudy:</strong> {educationInfo.dateOfStudy}</p>
            </div>
            <div className="Cv-section">
            <p className="Cv-title">Experience</p>
            <p><strong>Company Name:</strong> {experienceInfo.companyName}</p>
            <p><strong>Postion Title</strong> {experienceInfo.postionTitle}</p>
            <p><strong>Main Responsibilities:</strong> {experienceInfo.mainResponsibilities}</p>
            </div>
        </div>
    )
}