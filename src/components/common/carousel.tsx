import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import styled from 'styled-components';
import { BackgroundLogo } from './Logo';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'NIKE',
    imgPath:
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-TttlGpDb.png',
  },
  {
    label: 'ADIDAS',
    imgPath: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/61f87dec481e4512823ea7fb0080ba1a_9366/Black_BB5476_01_standard.jpg',
  },
  {
    label: 'SALE INFO',
    imgPath: 'http://localhost:3000/img/sale.png',
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <CarouselContainer>
      <BackgroundLogo />
      <CarouselBox>
        <CarouselHeader>TODAY PROMOTION</CarouselHeader>
        <Box sx={{ maxWidth: 900, flexGrow: 1 }}>
          <Paper
            square
            elevation={0}
            sx={{
              display: 'flex',
              alignItems: 'center',
              height: 50,
              pl: 2,
              bgcolor: 'background.default',
            }}
          >
            <Typography>{images[activeStep].label}</Typography>
          </Paper>
          <AutoPlaySwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={activeStep} onChangeIndex={handleStepChange} enableMouseEvents>
            {images.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component='img'
                    sx={{
                      height: 255,
                      display: 'block',
                      Width: 900,
                      overflow: 'hidden',
                      width: '100%',
                    }}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position='static'
            activeStep={activeStep}
            nextButton={
              <Button size='small' onClick={handleNext} disabled={activeStep === maxSteps - 1} color='inherit'>
                Next
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
            }
            backButton={
              <Button size='small' onClick={handleBack} disabled={activeStep === 0} color='inherit'>
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                Back
              </Button>
            }
          />
        </Box>
      </CarouselBox>
    </CarouselContainer>
  );
}

export default SwipeableTextMobileStepper;

const CarouselContainer = styled.div`
  margin-top: 50px;
  @media screen and (max-width: 768px) {
    width: 700px;
    height: 250px;
    margin-bottom: 120px;
  }
`;

const CarouselBox = styled.div`
  box-sizing: border-box;
  /* border: 7px solid rgba(246, 246, 27, 0.7); */
  margin: 5px;
  padding: 3px;
`;

const CarouselHeader = styled.span`
  color: black;
  font-weight: 600;
  font-size: x-large;
`;
