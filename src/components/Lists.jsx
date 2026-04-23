import React from 'react'
import Btn from './Btn'


const Lists = ({data , index }) => {
   
    
    return (
    <div className='card shadow p-2 mb-3 '>
       <div className="row">
        <div className="col-8">
            <h5>{++ index  }{data} </h5>
        </div>
        <div className="col-4 text-end ">
            <div className="btn-group gap-2">
                <Btn className='btn-sm '>edit</Btn>
                <Btn className='btn-sm btn-danger'>dlt</Btn>
            </div>
        </div>
       </div>
    </div>
    )
}

export default Lists