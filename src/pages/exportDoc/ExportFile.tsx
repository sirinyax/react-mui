import React from 'react';
import Header from '../advisor/header/Header';

const ExportFile = () => {
  return (
    <div>
        <Header />
        <div className='d-flex justify-content-between p-3'>
            <div className="col-1">
                <span className="header-2">ข้อมูลองค์กร</span>
            </div>
            <div className="col-2">
                <button className="btn btn-success">download</button>
            </div>
        </div>

        <div></div>
    </div>
  )
}

export default ExportFile;