import { Typography, Button, Card, CardActinos, CardContent, CardMedia } from '@material-ui/core'

import useStyles from './styles'

const CartItem = () => {
    const classes = useStyles()
    return (
        <Card>
            <CardMedia image={image.media.source}/>
        </Card>
    )
}