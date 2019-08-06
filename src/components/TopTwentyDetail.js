import React, {Compnent} from 'react';
import SongDetail from './SongDetail.js'

const TopTwentyDetail = (props) => {
  const songList = props.songs.map( (song, index) => {
    return (
    <SongDetail
      key={index}
      title={song["im:name"].label}
      artist={song["im:artist"].label}>
    </SongDetail>
  );
});

return(
  <div classname="songs-list">
  <ol>
  {songList}
  </ol>
  </div>
)

}

export default TopTwentyDetail;
