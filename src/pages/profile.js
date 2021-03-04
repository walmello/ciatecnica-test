export default ({profile}) =>
    <form>
        <div class="container p-3 ">
            <div class="d-flex p-2 justify-content-between">
                <label class="px-3 w-25">Username</label>
                <input type="text" className="flex-fill" value={profile.username}/>
                <div className="flex-fill"></div>
                <div className="flex-fill"></div>
                <div className="flex-fill"></div>
            </div>
            <div class="d-flex p-2">
                <label class="px-3 w-25">Full Name</label>
                <input type="text" className="flex-fill" placeholder="First Name" value={profile.firstname}/>
                <input type="text" className="flex-fill ml-3" placeholder="Last Name" value={profile.lastname}/>
            </div>
            <div class="d-flex p-2">
                <label class="px-3">Profile</label>
                <select>
                    <option>Owner</option>
                    <option>Driver</option>
                    <option>Office</option>
                </select>
                <label class="px-3">Company</label>
                <select>
                    <option>Company 1</option>
                    <option>Company 2</option>
                    <option>Company 3</option>
                </select>
            </div>
            <div class="d-flex justify-content-end">
                <button className="btn">
                    Cancel
                </button>
                <button className="btn btn-primary" type="submit">
                    Save
                </button>
            </div>
        </div>
    </form>