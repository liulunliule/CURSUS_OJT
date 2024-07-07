import React, { useState } from 'react';
import "./index.scss";
import Setting from './Setting/setting';
import AddStreaming from './AddStreaming/add'

const Add_Live_Stream = () => {
  const [view, setView] = useState('addStreaming');

  const handleViewChange = (view) => {
    setView(view);
  };

  return (
    <div className='wrapper12'>
      <div className='sa4d25'>
        <div className='container-fluid'>
          <div className='row justify-content-md-center'>
            <div className='col-lg-8 col-md-10'>
              <div className='section3125'>
                <div className='justify-content-center'>
                  <div className="live-stream-page">
                    <div className="header100">
                      <button className='buttonRed100' onClick={() => handleViewChange('addStreaming')}>Add Streaming</button>
                      <button className='buttonRed100'onClick={() => handleViewChange('settings')}>Setting</button>
                    </div>
                    <div className="content100">
                      {view === 'addStreaming' && <AddStreaming />}
                      {view === 'settings' && <Setting />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  );
}

export default Add_Live_Stream;
