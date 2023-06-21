import Background from '../assets/library.jpg'

function Home() {
  return (
    <div style={{backgroundImage: `url(${Background})`}}
    className='flex flex-row justify-center mx-auto bg-cover bg-fixed'>
        <div className='flex place-items-center h-screen'>
            <h3 className='p-5 bg-white bg-opacity-10 text-white text-3xl rounded'>Welcome to Digital Library</h3>
        </div>
    </div>
  )
}

export default Home
