import User from './user'

export default ({users, setUser, setEdit}) => 
  <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Profile</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {users ? users
        .map((item, index) => <User 
          user={{
            name: item.name, 
            user: item.user, 
            profile: item.profile, 
            status: item.status,            
            index: index
          }}
          setUser={setUser}
          setEdit={setEdit}
        />)
        : <p>No users</p>
      }
    </tbody>
  </table>