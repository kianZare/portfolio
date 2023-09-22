import linkedin from "../assets/link/linkedin.png"
import github from "../assets/link/github.png"
import phone from "../assets/link/phone.png"
import email from "../assets/link/gmail.png"
function Contact() {
  return (
    <div className="flex w-full max-w-6xl justify-center items-center ">
        <section className='flex flex-col justify-center items-center mt-20 w-full max-w-3xl p-4'>
            <h1 className='flex justify-center text-6xl font-bold p-8"'>Contact Me</h1>
            <span className='p-2 text-xl '>Please fill out the form below to discuss any work opportunites</span>
            <form className='flex flex-col w-[90vw] max-w-2xl text-lg'>
                <input type="text" placeholder='Your Name' className='border h-10 px-4 py-7 bg-slate-700 m-2 rounded-lg'/>
                <input type="text" placeholder='Your Email' className='border h-10 px-4 py-7 bg-slate-700 m-2 rounded-lg'/>
                <textarea name="message"  rows="5" placeholder='Your Message' className='p-4 bg-slate-700 m-2 rounded-lg'></textarea>
                <div className='flex justify-center m-4'>
                <button type='submit' value='send' className='w-44 bg-white border-none text-slate-900 text-xl font-bold p-4 rounded-lg box-border hover:bg-yellow-500'> Submit</button>

                </div>
                <div className="flex justify-center items-center p-4 mt-8">
                    <a href="">
                    <img className="flex w-16 md:w-24 m-2 hover:scale-110" src={linkedin} alt="linkedin" />
                    </a>
                    <a href="">
                    <img className="flex w-16 md:w-24 m-2 hover:scale-110" src={github} alt="github" />

                    </a>
                    <a href="">
                    <img className="flex w-16 md:w-24 m-2 hover:scale-110" src={email} alt="email" />

                    </a>
                    <a href="">
                    <img className="flex w-16 md:w-[107px] m-1 hover:scale-110" src={phone} alt="phone" />

                    </a>
                </div>
            </form>
        </section>
    </div>
  )
}

export default Contact