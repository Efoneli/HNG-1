import { useForm} from 'react-hook-form';


const Contact = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const onSubmit = values => alert('successful');


  return (
    <div className='p-8'>
    <div className="bg-white flex justify-center items-center flex-col mx-2">
    
      <div class=''>
        <strong class=' text-xl' id='title'>Contact Me</strong>
        <p class=''>Hi there, contact me to ask me about anything  you have in mind.</p>
        </div>

        <div className='p-8'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class='m-2 flex justify-between gap-3 ' id='name-div'>
          <div className='lg:w-1/2 md:w-full sm:w-full'>
          <label>First Name</label><br />
            <input id='first_name' 
            type='text' placeholder='Enter your first name'
              {...register("firstname", {
                required: true, maxLength: 15 
              })}
            /> 
            {errors.firstname && <p style={{color: 'red'}}>Firstname Required</p>}

          </div>
          <div  className='lg:w-1/2 md:w-full sm:w-full'>
          <label>Last Name </label><br />
            <input id='last_name'
             type='text' placeholder='Enter your last name'
              {...register("lastname", {
                required: true, maxLength: 15
                })}
                />
                {errors.lastname && <p style={{color: 'red'}}>Lastname Required</p>}
          </div>
        </div>

        <div class='m-2'>
          <label>Email<br />
            <input id='email'
            type='email'
            placeholder='yourname@email.com'
            {
              ...register("email", {
                required: "Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address"
                }
              })}
             />
            {errors.email && <p style={{color: 'red'}}>Email required</p>}

          </label>
        </div>

        <div class='m-2'>
          <label>Message<br />
            <textarea id='message'
             name='comment' placeholder="Send me a message and I'll reply as soon as possible..."
            {...register("message", {
              required: true,
              pattern: String, 
            })}
            />
          {errors.message && <p style={{color: 'red'}}>Please enter a message</p>}    
          
          </label>
        </div>

        <div class='m-2'>
          <label>
            <input type='checkbox' className='mr-4'/>
            You agree to providing your data to name who may contact you
          </label>
        </div>
        <button id='btn__submit'
         type='submit' value='submit' class='w-full h-8 text-white p-0 m-0 m-2 bg-blue-600'>
          Send Message
        </button>
        </form>
    </div>
    </div>
    </div>
    );
  }
  
  
  export default Contact;
  