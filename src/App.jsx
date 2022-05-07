import { Container, Grid, Typography, Box } from '@mui/material';
import newspaper from '../src/assets/newspaper.png';
import Form from './components/Form';
import NewsList from './components/NewsList';
import { NewsProvider } from './context/NewsProvide';

const App = () => {
  return (
    <NewsProvider>
      <Container>
        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          marginY={3}
          padding={1}
          sx={{ backgroundColor: '#79DAE8', borderRadius: '6px' }}
        >
          <Typography
            component={'h1'}
            variant={'h3'}
            fontWeight={'bold'}
            color={'secondary'}
          >
            Noti Geek Studio
          </Typography>
          <img src={newspaper} alt="newspaper" className="img-paper" />
        </Box>

        <Grid container direction={'row'} justifyContent={'center'}>
          <Grid item xs={12} md={8}>
            <Form />
          </Grid>
        </Grid>

        <NewsList />
      </Container>
    </NewsProvider>
  );
};

export default App;
