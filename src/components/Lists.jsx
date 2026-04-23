import React from 'react'
import Btn from './Btn'
import { MdOutlineModeEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

const Lists = ({data , index }) => {
   
    
    return (
    <div className='card shadow p-2 mb-3'>
       <div className="row">
        <div className="col-8">
            <h5>{++index  }{data} </h5>
        </div>
        <div className="col-4 text-end ">
            <div className="btn-group gap-2">
                <Btn className='btn-sm '><MdOutlineModeEdit /></Btn>
                <Btn className='btn-sm btn-danger'><MdDeleteOutline /></Btn>
            </div>
        </div>
       </div>
    </div>
    )
}

export default Lists