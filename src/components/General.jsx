function General ({generalInfo,updateGeneral}){
 
    return (
        <div>
        
            <input 
            placeholder="Name"
            type="text"
            value={generalInfo.name}
            onChange={(e) => updateGeneral("name",e.target.value)}/>
            <input
            placeholder="Email"
            type="Email"
            value={generalInfo.email}
            onChange={(e) => updateGeneral("email",e.target.value)}
            />
            <input
            placeholder="PhoneNumber"
            type="tel"
            value={generalInfo.phoneNumber}
            onChange={(e) => updateGeneral("phoneNumber",e.target.value)}
            />

        </div>
    )
}
export default General