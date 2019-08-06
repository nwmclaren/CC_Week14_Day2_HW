import React from 'react';

const SongDetail = (props) =>{

  return (
    <div className="song">
    <li> {props.title} by {props.artist}</li>
    </div>
  )

}

export default SongDetail;
