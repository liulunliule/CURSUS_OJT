import React from 'react'

const Setting = () => {
  return (
    <div className="settings">
      <h2>Live Streaming Setting</h2>
      <div>
        <label className='randomLine'>
          <input className="inputToggle" type="checkbox" defaultChecked />
          Publish this as a continuous live video
        </label>
      </div>
      <div>
        <label className='randomLine'>
          <input className="inputToggle" type="checkbox" />
          Allow embedding
        </label>
      </div>
      <div>
        <label className='randomLine'>
          <input className="inputToggle" type="checkbox" />
          Unpublish after live video ends
        </label>
      </div>
      <div>
        <label className='randomLine'>
          <input className="inputToggle" type="checkbox" defaultChecked />
          Allow viewers to rewind
        </label>
      </div>
      <div>
        <label className='randomLine'>
          <input className="inputToggle" type="checkbox" defaultChecked />
          End broadcast when stream ends
        </label>
      </div>
      <div>
        <label className='randomLine'>
          <input className="inputToggle" type="checkbox" />
          Publish as a test broadcast
        </label>
      </div>
      <div>
        <label className='randomLine'>
          <input className="inputToggle" type="checkbox" />
          Turn off live commentary
        </label>
      </div>
      <button className='buttonRed100'>Save changes & Go Live</button>
    </div>
  );
}

export default Setting;