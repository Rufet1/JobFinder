import { Card, CardContent, Container, Typography } from '@material-ui/core'
import React from 'react'

const NotFound404 = () => {
  return (
    <Container maxWidth='sm'>
        <Card style={{minHeight : '50vH',marginTop : '10vH'}} elevation={8} variant='elevation'>
            <CardContent>
                <Typography style={{textAlign:'center', color : '#f9572f',marginTop : '10vH'}} variant='h2' color='textSecondary'> 404 Not Found :/ </Typography>
            </CardContent>
        </Card>
    </Container>
  )
}

export default NotFound404
