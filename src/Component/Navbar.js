import React from 'react';
import {Link} from 'react-router-dom';
export default function Navbar(){
    return(
        <ul class="d-flex mx-auto">
            <li class="ms-5 list-group-item"><Link to="/" class="text-white">Home</Link></li>
            <li class="ms-5 list-group-item"><Link to="/About" class="text-white">About</Link></li>
            <li class="ms-5 list-group-item"><Link to="/Gallery" class="text-white">Gallery</Link></li>
            <li class="ms-5 list-group-item"><Link to="/NoteApp" class="text-white">Notes</Link></li>
            <li class="ms-5 list-group-item"><Link to="/Quiz" class="text-white">Quiz</Link></li>
         </ul>
    );
};