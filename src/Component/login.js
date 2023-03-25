import React from 'react';
const SignIn = () => {
    function newmessage(){
        var email=document.getElementById('email');
        var Password=document.getElementById('password');
        if(email.value==='' || Password.value===''){
            alert("Fields can not be empty🙁");
        }
        else{
            setTimeout(() =>{
               email.value='';
               Password='';
            },2000)
            alert("Welcome to nccedu.com👍");
        }
    }        
    return (
        <form>
            <div className='container d-flex align-items-center' style={{ minHeight: "100vh", minWidth: "100%", backgroundColor: "#000080" }}>
                <div className='card container mt-5' style={{ minHeight: "30vh", width: "70vh", backgroundColor: '#fff' }}>
                    <div className='card-body'>
                        <div className=''>
                            <h1 className='mt-2 text-center text-dark'>Login</h1>
                            <h6 htmlFor="email" className='mt-3'>Email address</h6>
                            <input
                                type="email"
                                id="email"
                                className='mt-1 ms-auto text-dark w-100 me-auto'
                                placeholder="Enter email"
                            />
                        </div>
                        <div>
                            <h6 htmlFor="password" className='mt-2'>Password</h6>
                            <input
                                type="password"
                                id="password"
                                className='mt-1 ms-auto w-100 me-auto'
                                placeholder='Enter password'
                            />
                        </div>
                        <div class="form-check mt-4">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Remember me</label>
                        </div>
                        <button type="submit" class="btn btn-primary ms-3 text-center mt-4 mb-3" style={{minWidth: "50vh"}} onClick={newmessage}>Login</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default SignIn;
