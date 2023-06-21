import Background from '../assets/white_library.jpg'

function Contact() {
  return (
    <div style={{backgroundImage: `url(${Background})`}}
    className='flex flex-row justify-center mx-auto bg-cover bg-fixed'>
        <div className='flex place-items-top h-screen p-5'>
            <h3 className='p-10 bg-black text-white text-3xl'>Contact Us on:

              <br></br>
            
              <p>
                <i className="fa-brands fa-facebook text-lg" > Facebook</i>
              </p>
            
              <p>
                <i className="fa-brands fa-twitter text-lg"> Twitter</i>
              </p>
            
              <p>
              <i className="fa-brands fa-instagram text-lg"> Instagram</i>
              </p>

              <p>
              <i className="fa-brands fa-snapchat text-lg"> Snapchat</i>
              </p>

              <br></br>

              <p>
                Or Call Us at:
              </p>

              <p>
              <i className="fa-solid fa-mobile text-lg"> 555-555-5555</i>
              </p>

              <br></br>
              
              <p>
                Hope to hear from you soon!
              </p>
          
            </h3>
        </div>
    </div>
  )
}

export default Contact
