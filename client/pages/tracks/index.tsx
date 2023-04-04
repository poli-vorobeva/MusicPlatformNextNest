import NavBar from '../../components/NavBar';
import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Box, Button, Card, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { IComment,ICom,ITrack } from '../../types/track';
import { TrackList } from '../../components/TrackList';

const Index = () => {
  const router = useRouter()
  const tracks:ITrack[]=[
    { _id:'44',
      name:'TrackOne',
      artist:"someSinger",
      text:"Description sing",
      listens:9,
      picture:'',
      audio:'',
      comments:[]
    }, { _id:'222',
      name:'Track TWO',
      artist:"someSinger to",
      text:"Description sing",
      listens:9,
      picture:'',
      audio:'',
      comments:[]
    }, { _id:'333',
      name:'Track THREE',
      artist:"someSinger 3",
      text:"333-Description sing",
      listens:3,
      picture:'',
      audio:'',
      comments:[]
    },
  ]
  return (
    <MainLayout>
      <Grid container justifyContent='center'>
        <Card style={{width:900}}>
          <Box p={3}>
            <Grid container justifyContent='space-between'>
              <h1>Список треков</h1>
              <Button onClick={()=>router.push('/tracks/create')}>Загрузить</Button>
            </Grid>
          </Box>
        </Card>
      </Grid>
      <div>
        <h1>Track List</h1>
        <TrackList tracks={tracks}/>
      </div>
    </MainLayout>

      );
      };
      export default Index;