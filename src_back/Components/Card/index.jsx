import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {useDispatch, useSelector} from "react-redux";




const movieCard = (movies) => {

console.log(movies.moviesList, 'movv')

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    /*image={movies.movies.Poster}*/
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                       {/* {moviesList.title}*/}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {/*{moviesList.plot}*/}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
            </CardActions>
        </Card>

    )
}

export default movieCard