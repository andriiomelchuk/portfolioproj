import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';





const movieCard = (movies) => {

console.log(movies)

    return (
        /*<>
            {movies.map((movies) => (
                    <Card  sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image={movies.Poster}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                     {movies.Title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {movies.Year}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                {movies.Type}
                            </Button>
                        </CardActions>
                    </Card>

            ))}

        </>*/
        <><p>test</p></>
    )
}

export default movieCard