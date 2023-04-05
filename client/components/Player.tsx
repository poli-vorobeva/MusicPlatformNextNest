import React from 'react';
import styles from '../styles/Player.module.scss'
import { Grid, IconButton } from '@mui/material';
import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import { ITrack } from '../types/track';
import TrackProgress from './TrackProgress';
const Player = () => {
  const track: ITrack = {
    _id: '333',
    name: 'Track THREE',
    artist: 'someSinger 3',
    text: '333-Description sing',
    listens: 3,
    picture: '',
    audio: '',
    comments: [],
  };
  const active=false
  return (
    <div className={styles.player}>
      <IconButton onClick={e=>e.stopPropagation()}>
        {
          !active?<PlayArrow/>:<Pause/>
        }
      </IconButton>
      <Grid container direciotn="column">
        <div>{track.name}</div>
        <div style={{fontSize:12,color:'gray'}}>{track.artist}</div>
        <TrackProgress left={0} right={100} onChange={()=>({})}/>
      </Grid>
      <VolumeUp style={{marginLeft:'auto'}}/>
      <TrackProgress left={0} right={100} onChange={()=>({})}/>
    </div>
  );
};

export default Player;