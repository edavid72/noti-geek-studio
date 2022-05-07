import { Grid, Typography, Stack, Pagination } from '@mui/material';
import useNews from '../hooks/useNews';
import News from './News';
const NewsList = () => {
  const { news, totalNews, handleChangePage, page } = useNews();

  const totalPages = Math.ceil(totalNews / 20);

  return (
    <>
      <Typography
        textAlign={'center'}
        marginY={5}
        variant={'h4'}
        component={'h4'}
        sx={{ color: '#af00ae', fontWeight: 'bold' }}
      >
        Last News
      </Typography>

      <Grid container spacing={2}>
        {news.map((n) => {
          return <News n={n} key={n.url} />;
        })}
      </Grid>

      <Stack
        spacing={2}
        marginY={6}
        direction={'row'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Pagination
          count={totalPages}
          variant="outlined"
          color="secondary"
          onChange={handleChangePage}
          page={page}
          size={'large'}
        />
      </Stack>
    </>
  );
};

export default NewsList;
