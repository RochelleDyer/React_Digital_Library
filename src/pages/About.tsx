import Background from '../assets/books_on_shelf.jpg'

function About() {
  return (
    <div style={{backgroundImage: `url(${Background})`}}
    className='flex flex-row justify-center mx-auto bg-cover bg-fixed'>
        <div className='flex place-items-top h-screen'>
            <h1 className='p-5 text-black text-4xl rounded'>
              <p className='text-center'>About The Digital Library</p>
              <p>The digital library provides a means for adding, updating, and deleting the contents contained in your collection.
                You can keep your library organized as you buy, sell or trade your books. 
              </p>
            </h1>
        </div>
    </div>
  )
}

export default About
