import Input from "./Input"
import Button from "./Button"
import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseBook_title, chooseAuthor, chooseGenre, chooseCover_type, chooseIsbn, chooseLength} from '../redux/slices/RootSlice'

interface BookInfoProps {
    id? : string []
   
}

const BookInfo = (props: BookInfoProps) => {
    const { register, handleSubmit } = useForm ({})
    const dispatch = useDispatch();
    const store = useStore ();

    const onSubmit = (data:any, event:any) => {
        console.log(`ID: ${ props.id }`);
        if (props.id && props.id.length > 0) {
            server_calls.update(props.id[0], data)
            console.log (`Updated: ${ data } ${ props.id }`)
            setTimeout(() => {window.location.reload()}, 1000)
            event.target.reset()
        } else {
            dispatch(chooseBook_title(data.book_title));
            dispatch(chooseAuthor(data.author));
            dispatch(chooseGenre(data.genre));
            dispatch(chooseCover_type(data.cover_type));
            dispatch(chooseIsbn(data.isbn));
            dispatch(chooseLength(data.length));

            server_calls.create (store.getState())
            setTimeout( () => {window.location.reload()}, 1000)
        }
    }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>   
            <label htmlFor="book_title">Title</label>
            <Input {...register('book_title')} name='book_title' placeholder='Book Title'/>
        </div>
        <div>   
            <label htmlFor="author">Author</label>
            <Input {...register('author')}name='author' placeholder='Author'/>
        </div>
        <div>   
            <label htmlFor="genre">Genre</label>
            <Input {...register('genre')}name='genre' placeholder='Genre'/>
        </div>
        <div>   
            <label htmlFor="cover_type">Cover Type</label>
            <Input {...register('cover_type')} name='cover_type' placeholder='Cover Type'/>
        </div>
        <div>   
            <label htmlFor="isbn">ISBN</label>
            <Input {...register('isbn')} name='isbn' placeholder='ISBN'/>
        </div>
        <div>   
            <label htmlFor="length">Length</label>
            <Input {...register('length')} name='length' placeholder='Length'/>
        </div>
        <div className="flex p-1">
            <Button 
                className='flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white'>
                    Submit
            </Button>
        </div>
      </form>
    </div>
  )
}

export default BookInfo



