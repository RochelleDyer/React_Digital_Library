import BookInfo from "./BookInfo";

type Props = {
    id?: string[];
    open: boolean;
    onClose: () => void;
}

const Modal = ( props : Props ) => {
    if ( !props.open ) return (<></>);
    return (
        <div onClick={ props.onClose } className=" fixed w-full h-full flex overflow-auto z-1
        justify-center align-middle bg-orange-300 bg-opacity-50">
            <div 
                className="max-w-600px w-1/5 fixed flex z-1 mt-1 bg-white shadow-xl rounded"
                onClick= {(e) => {
                    e.stopPropagation()
                }}>
                
                <div className="w-full flex flex-col">

                    <div className="flex flex-row space-apart">

                        <p className="flex justify-start bg-orange-400 p-2 rounded hover:bg-black text-white" 
                        onClick= {props.onClose}>
                            X
                        </p>
                    </div>

                        <div className="flex flex-col items-center text-center p-1">
                            <BookInfo id= {props.id} />
                        </div>
                
                </div>
                    
            </div>
        </div>
    )
}

export default Modal
