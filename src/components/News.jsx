import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from '@mui/material';

const News = ({ n }) => {
  const { urlToImage, url, title, description, source } = n;

  return (
    <Grid item md={6} lg={4}>
      <Card >
        {urlToImage && (
          <CardMedia
            component={'img'}
            alt={`News image: ${title}`}
            image={urlToImage}
            height={'250'}
          />
        )}

        <CardContent>
          <Typography variant={'body1'} color={'secondary'}>
            {source.name}
          </Typography>

          <Typography variant={'h5'} component={'div'}>
            {title}
          </Typography>

          <Typography variant={'body2'}>{description}</Typography>
        </CardContent>

        <CardActions>
          <Link
            href={url}
            target="_blank"
            variant="button"
            color={'secondary'}
            width={100}
            textAlign={'center'}
          >
            Go News
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default News;
