import React from 'react';

const Registration = () => {
    function newmessage(){
        var name=document.getElementById('firstName');
        var email=document.getElementById('Email');
        var phone=document.getElementById('lastName');
        var Password=document.getElementById('password');
        if(name.value==='' || email.value==='' || phone.value==='' || Password.value===''){
            alert("Fields can not be empty🙁");
        }
        else{
            setTimeout(() =>{
               name.value='';
               email.value='';
               phone.value='';
               Password='';
            },2000)
            alert("Successfully Registeration");
        }
    }

    return (
        <form>
            <div className='container d-flex align-items-center' style={{ minHeight: "100vh", minWidth: "100%", backgroundColor: "#000080" }}>
                <div className='card container mt-5' style={{ minHeight: "65vh", width: "65vh", backgroundColor: '#fff' }}>
                    <div className=''>
                        <h3 className='mt-2 text-center text-dark'>SignUp</h3>
                        <label htmlFor="firstName" className='mt-3'>First Name:</label>
                        <input
                            type="text"
                            id="firstName"
                            className='mt-1 ms-auto text-dark w-100 me-auto'
                            placeholder="Enter firstname"
                        />
                    </div>

                    <div>
                        <label htmlFor="lastName" className='mt-3'>Last Name:</label>
                        <input
                            type="text"
                            id="lastName"
                            placeholder="Enter lastname"
                            className='mt-1 ms-auto text-dark w-100 me-auto'
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className='mt-3'>Email:</label>
                        <input
                            type="email"
                            id="Email"
                            className='mt-1 ms-auto text-dark w-100 me-auto'
                            placeholder="Enter email"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className='mt-3'>Password:</label>
                        <input
                            type="password"
                            id="password"
                            className='mt-1 ms-auto text-dark w-100 me-auto'
                            placeholder="Enter password"
                        />
                    </div>

                    <button type="submit" onClick={newmessage} class="btn btn-primary ms-3 text-center mt-4 mb-4" style={{ minWidth: "50vh" }}>Register</button>
                </div>
            </div>
        </form>
    );
};

export default Registration;
