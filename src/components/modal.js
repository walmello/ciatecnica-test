export default ({user}) => <>
  <div className="modal fade" id="modal" role="dialog" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            Editar  
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          </button>
          </div>
          <div class="modal-body">
            <div>
              <label for="exampleFormControlInput1">Name</label>
              <input type="text" class="form-control" value={user.name}/>
            </div>
            <div>
              <label for="exampleFormControlInput1">Username</label>
              <input type="text" class="form-control" value={user.user}/>
            </div>
            <div>
              <label for="exampleFormControlInput1">Profile</label>
              <input type="text" class="form-control" value={user.profile}/>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" data-dismiss="modal" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
</>
