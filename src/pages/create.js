import Register from './register';
import Profile from './profile';
import { useState } from 'react';

export default ({profile, setProfile}) => { 
    const [mode, setMode] = useState(false)

    return <div className="container p-3">
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class={`nav-link ${!mode ? 'active' : ''}`} href="#" onClick={_ => setMode(false)}>UserRegistry</a>
            </li>
            <li class="nav-item">
                <a class={`nav-link ${mode ? 'active' : ''}`} href="#" onClick={_ => setMode(true)}>Profile</a>
            </li>
        </ul>
        {!mode ? 
            <Register profile={profile} setProfile={setProfile}/> : 
            <Profile profile={profile} setProfile={setProfile}/>
        }
    </div>
}