export default ({user, setUser, setEdit}) => <>
  <tr>
    <td>{user.name}</td>
    <td>{user.user}</td>
    <td>{user.profile}</td>
    <td>{user.status ? 'Active' : 'Inactive'}</td>
    <td>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-light" data-toggle="modal" data-target="#modal" onClick={_ => setEdit({
          name: user.name,
          user: user.user,
          profile: user.profile,
          status: user.status,
          index: user.index
        })}>
          <i className="cil-pen"></i>
        </button>
        <button type="button" className="btn btn-light" onClick={_ => setUser(user.index, {...user, status: false})}>
          <i className="cil-x-circle"></i>        
        </button>
      </div>
    </td>
  </tr>
</>