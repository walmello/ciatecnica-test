import { useState } from 'react'

export default ({profile, setProfile}) => {
    const [expire, setExpire] = useState(true)
    const [phone, setPhone] = useState()
    const [mobile, setMobile] = useState()
    const maskPhone = value => {
        const x = value ? value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/) : ''
        return !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    }
return <form>
<div class="container p-3 ">
    <div class="d-flex p-2">
        <label class="px-3 w-25">Username</label>
        <input type="text" className="flex-fill" value={profile.username} onChange={event => setProfile({...profile, username: event.target.value})}/>
    </div>
    <div class="d-flex p-2">
        <label class="px-3 w-25">Full Name</label>
        <input type="text" className="flex-fill" value={profile.firstname} onChange={event => setProfile({...profile, firstname: event.target.value})} placeholder="First Name"/>
        <input type="text" className="flex-fill ml-3" value={profile.lastname} onChange={event => setProfile({...profile, lastname: event.target.value})} placeholder="Last Name"/>
    </div>
    <div class="d-flex p-2">
        <label class="px-3 w-25">Email Address</label>
        <input type="email" className="flex-fill"/>
    </div>
    <div class="d-flex p-2">
        <label class="px-3 w-25">Phone Number</label>
        <input type="text" className="flex-fill" placeholder="(000) 000-00000" value={maskPhone(phone)} onChange={event => setPhone(event.target.value)}/>
        <label class="pl-5 w-25">Mobile Phone</label>
        <input type="text" className="flex-fill" placeholder="(000) 000-00000" value={maskPhone(mobile)} onChange={event => setMobile(event.target.value)}/>
    </div>
    <div class="d-flex p-2">
        <label class="px-3 w-25">Password</label>
        <input type="password" className="flex-fill"/>
    </div>
    <div class="d-flex p-2 position-relative">
        <label class="px-3 w-25">Confirm Password</label>
        <input type="password" className="flex-fill is-invalid"/>
        <div class="invalid-feedback position-absolute" style={{left: '25.5%', top: '70%'}}>
          The password must have at least 8 characters, 1 capital letter, 1 special character and numbers
        </div>
    </div>
    <div class="d-flex p-2 justify-content-between">
        <div>
            <label class="px-3">Expire?</label>
            <input type="radio" name="expire" className="mx-1" value="yes" onClick={_ => setExpire(true)}/> Yes
            <input type="radio" name="expire" className="mx-1" value="never" onClick={_ => setExpire(false)}/> Never
        </div>
        <div>
            { expire ? 
                <>
                    <label class="mx-3">Expire Date</label>
                    <input type="date"/>
                </>
                :
                <></>
            }
        </div>
    </div>
    <div class="d-flex p-2">
        <label class="px-3">Status</label>
        <select>
            <option>Active</option>
            <option>Inactive</option>
        </select>
    </div>
    <div class="d-flex justify-content-end">
        <button className="btn">
            Cancel
        </button>
        <button className="btn btn-primary">
            Save
        </button>
    </div>
</div>
</form>
}