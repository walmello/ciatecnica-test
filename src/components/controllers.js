import Search from './search'

export default ({search, setSearch}) => 
  <div style={{backgroundColor: '#eee'}} className="d-flex align-items-end justify-content-between p-3">
      <a href="/create" class="btn btn-warning">+ Add</a>
      <Search search={search} setSearch={setSearch}/>
      <div>
        <input type="search" class="form-control" id="exampleFormControlInput1" placeholder="Search"/>
      </div>
  </div>