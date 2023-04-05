import React from 'react';
import { ITrack } from '../../types/track';
import MainLayout from '../../layouts/MainLayout';
import { Button, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/router';

const TrackPage = () => {
  const router = useRouter();
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
  return (
    <MainLayout>
      <Button
        variant={'outline'}
        style={{ fortSize: 32 }}
        onClick={() => router.push('/tracks')}>
        К списку
      </Button>
      <Grid container>
        <img src={track.picture} width={200} height={200}/>
        <div style={{ marginLeft: 30 }}>
          <h1> Название трека - {track.name}</h1>
          <h2>Исполнитель - {track.artist}</h2>
          <h3>Прослушиваний - {track.listens}</h3>
        </div>
      </Grid>
      <h2>Слова в треке</h2>
      <p>{track.text}</p>
      <Grid container>
        <TextField
        label="Ваше Имя" fullWidth/>
        <TextField
          label="Комментарий" fullWidth multiline rows={4}/>
      <Button>Отправить</Button>
      </Grid>
      <div>
        {track.comments.map(comment=>{
          return <div>
            <div>Автор - {comment.username}</div>
            <div>Комментарий - {comment.text}</div>
          </div>
        })}
      </div>
    </MainLayout>
  );
};

export default TrackPage;
