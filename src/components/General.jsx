function General ({generalInfo,updateGeneral}){
 
    return (
        <div>
            <p className="info">General Information</p>
            <div className="General-Name">
            <label>Name: </label>
            <input 
            placeholder="Bekele"
            type="text"
            value={generalInfo.name}
            onChange={(e) => updateGeneral("name",e.target.value)}/>
            </div>
            <div className="General-Email">
            <label>Email: </label>
            <input
            placeholder="Bekele@gmail.com"
            type="Email"
            value={generalInfo.email}
            onChange={(e) => updateGeneral("email",e.target.value)}
            />
            </div>
            <div className="General-PhoneNumber">
            <label>PhoneNumber: </label>
            <input
            placeholder="+251 9xx xxx xxx"
            type="tel"
            value={generalInfo.phoneNumber}
            onChange={(e) => updateGeneral("phoneNumber",e.target.value)}
            />
            </div>

        </div>
    )
}
export default General