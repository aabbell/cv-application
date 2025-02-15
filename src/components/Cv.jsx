export default function Cv({generalInfo,educationInfo,experienceInfo}){
    return(
        <div>
            <h2>CV</h2>
            <p><strong>Name:</strong> {generalInfo.name}</p>
            <p><strong>Email:</strong> {generalInfo.email}</p>
            <p><strong>Phone Number:</strong> {generalInfo.phoneNumber}</p>
            <p><strong>School Name:</strong> {educationInfo.schoolName}</p>
            <p><strong>Title of Study</strong> {educationInfo.titleOfStudy}</p>
            <p><strong>DateOfStudy:</strong> {educationInfo.dateOfStudy}</p>
            <p><strong>Company Name:</strong> {experienceInfo.companyName}</p>
            <p><strong>Postion Title</strong> {experienceInfo.postionTitle}</p>
            <p><strong>Main Responsibilities:</strong> {experienceInfo.mainResponsibilities}</p>
        </div>
    )
}