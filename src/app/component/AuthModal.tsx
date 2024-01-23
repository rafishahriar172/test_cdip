"use client"
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AuthModalInputs from './AuthModalInput';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AuthModal(SignIn:{isSignIn:boolean}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [inputs,setInputs] = useState({
    firstName:"",
    lastName:"",
    email:"",
    phone:"",
    city:"",
    password:""
  });

  const handelChangeInput=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setInputs({
        ...inputs,
        [e.target.name]:e.target.value,
    })
  }

  const renderContent = (signinContent:string, signupContent:String) => {

    return SignIn.isSignIn ? signinContent : signupContent;
  }

  return (
    <div>
        <button className={`${renderContent("bg-blue-400 text-white" , "")} border p-1 px-4 rounded mr-3`} onClick={handleOpen}>
            {renderContent("Sign In","Sign Up")}
            </button>
        
      {/* <Button className="bg-blue-400 text-white border p-1 px-4 rounded mr-3" onClick={handleOpen}>Sign in</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='uppercase front-bold text-center pb-2 border-b mb-2'>
            <p className='text-sm'>
                {renderContent("Sign In ","Create Account")}
            </p>
                <AuthModalInputs inputs={inputs} handelChangeInput={handelChangeInput} isSignup={SignIn.isSignIn}/>
                <button className='uppercase bg-red-600 w-full text-white p-3 rounded text-sm mb-5 disabled:bg-grey 400'>
                    {renderContent("Sign In","Create Account")}
                </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
