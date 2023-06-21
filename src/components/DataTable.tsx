import Button from './Button'
import Modal from './Modal'
import { useState } from 'react';
import { server_calls } from '../api/server';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import { useGetData } from '../custom_hooks/FetchData';

const columns: GridColDef [] = [
  { field: 'id', headerName: 'ID', width: 200, hide: true},
  { field: 'book_title', headerName: 'Book Title', flex: 2},
  { field: 'author', headerName: 'Author', flex: 1},
  { field: 'genre', headerName: 'Genre', flex: 1},
  { field: 'cover_type', headerName: 'Cover Type', flex: 1},
  { field: 'isbn', headerName: 'ISBN', flex:1},
  { field: 'length', headerName: 'Length', flex: 1}
]
function DataTable() {
  const [open, setOpen ] = useState (false);
  const { bookData, getData } = useGetData ();
  const [selectionModel, setSelectionModel] = useState<string[]>([])

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const deleteData = () => {
    server_calls.delete (selectionModel[0]);
    getData ();
    console.log (`Selection model: ${selectionModel}`)
    setTimeout ( () => { window.location.reload () }, 500)
  }

  

  return (
  <>
    {/*Modal*/}
    <Modal 
        id = {selectionModel}
        open={open}
        onClose={handleClose}
        />

    {/* Buttons section for controlling CRUD*/}
    <div className="flex flex-row">
        <div>
            <button className="p-3 m-3 bg-orange-400 rounded hover:bg-black hover:text-white" 
            onClick = {() => handleOpen ()}>
                Create New Book
            </button>
          </div> 
            
          <Button onClick= {handleOpen} className='p-3 m-3 bg-orange-400 rounded hover:bg-black hover:text-white'>Update Book</Button>
          <Button onClick={deleteData} className='p-3 m-3 bg-orange-400 rounded hover:bg-black hover:text-white'>Delete Book</Button>           
        
    </div>

    {/*DataTable Section */}

    <div className= { open ? "hidden" : 'container x-10 my-5 flex flex-col'}
            style = {{ height: 400, width: '100%'}}>
                <h2 className='p-3 mx-3 bg-orange-400 my-2 rounded'>My Books</h2>
                <DataGrid rows={bookData} columns= {columns} rowsPerPageOptions={[5]}
                checkboxSelection={true} 
                onSelectionModelChange= { (item:any) => {
                    setSelectionModel (item)
                }}
                />

        </div>
  </>
  )
}

export default DataTable
