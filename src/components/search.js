export default ({search, setSearch}) => <>
<div className='d-flex align-items-center'>
    <label className="px-3">Status: </label> 
    <select class="form-control" value={search} onChange={event => setSearch(event.target.value)}>
        <option>Active</option>
        <option>Inactive</option>
        <option>All</option>
    </select>
    <i className="cil-filter px-3"></i>
</div>
</>