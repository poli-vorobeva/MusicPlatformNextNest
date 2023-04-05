import React, { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import StepWrapper from '../../components/StepWrapper';
import { Button, Grid, TextField } from '@mui/material';
import FileUpload from '../../components/FileUpload';

const Create = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [picture,setPicture]=useState(null)
  const [audio,setAudio]=useState(null)
  const next = () => {
    setActiveStep(prev => prev + 1);
  };
  const back = () => {
    setActiveStep(prev => prev - 1);
  };
  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0
          ? <Grid container direction={'column'} style={{ padding: 20 }}>
            <TextField style={{ marginTop: 10 }} label={'Название трека'}/>
            <TextField style={{ marginTop: 10 }} label={'Имя исполнителя'}/>
            <TextField style={{ marginTop: 10 }} label={'Слова к треку'} multiline rows={3}/>
          </Grid>
          : activeStep === 1
            ? <FileUpload accept={'image/*'} setFile={setPicture}>
              <Button>Загрузить изображение</Button>
            </FileUpload>
            : <FileUpload accept={'audio/*'} setFile={setAudio}>
              <Button>Загрузить трек</Button>
            </FileUpload>
        }
      </StepWrapper>
      <Grid container justifyContent={'space-between'}>
        <Button disabled={activeStep === 0} onClick={back}>Назад</Button>
        <Button disabled={activeStep === 2} onClick={next}>Далее</Button>
      </Grid>
    </MainLayout>
  );
};

export default Create;