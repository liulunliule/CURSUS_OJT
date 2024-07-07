import React from 'react'

const AddStreaming = () => {
  return (
    <div className="add-streaming">
      <h2 className='live-stream-title'>Connect your live stream to the Live API</h2>
      <div className='whatever'>
      Use live-streaming software or a hardware encoder.
      <a href='#' className='learn-more'>Learn More</a>
      </div>
      <div className='sth-imp'>Preview your broadcast with a stream key or paired encoder.</div>
      <div className='group-form'>
        <label>Server URL*</label>
        <input className="_dlor1" type="text" value="rtmps://live-api-s.edututs+.com:443/rtmp/" readOnly />
        <button className='_6tf7s'>Copy</button>
      </div>
      <div className='group-form mb-20'>
        <label>Persistent stream key*</label>
        <input className="_dlor1" type="text" value="592030151361629?s_bl=1&s_ps=1&s_sw=065&s_vt=api&s_a=AbzB7xYk7XdnKpBf" readOnly />
        <button className='_6tf7s'>Copy</button>
      </div>
      <button className='buttonRed100'>Go Live</button>
    </div>
  );
}

export default AddStreaming;