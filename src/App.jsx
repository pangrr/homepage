import { useState } from 'react'
import { Skeleton, ImageList, ImageListItem, ImageListItemBar, Container, Paper, Card, CardContent, Typography, CardActions, Button, CardMedia } from '@mui/material'
import wallet from './assets/wallet.gif'

function App() {
  return (
    <Container maxWidth="xl">
      <Paper sx={{ p: 8 }}>
        <ImageList cols={3} gap={32}>
          <ImageListItem>
            <Card sx={{ minWidth: 275 }} raised>
              <CardMedia
                sx={{ height: 400 }}
                image={wallet}
                title="Wallet"
              />
              <CardContent>
                <Typography variant="body">
                  A simple ehtereum wallet
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => openTab('https://pangrr.github.io/wallet/')}>open wallet</Button>
              </CardActions>
            </Card>
          </ImageListItem>
          <ImageListItem>
            <Card sx={{ minWidth: 275 }} raised>
              <CardContent>
                <Typography variant="h5" component="div">
                  const vs function
                </Typography>
                <Typography variant="body2">
                  Avoid using const for functions.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">see why</Button>
              </CardActions>
            </Card>
          </ImageListItem>
          {[...Array(5).keys()].map((i) =>
            <ImageListItem key={i}>
              <Skeleton variant="rectangular" sx={{ bgcolor: 'grey.900' }} width={432} height={475} />
            </ImageListItem>
          )}
        </ImageList>
      </Paper>
    </Container>
  )

  function openTab(path) {
    window.open(path, '_blank')
  }
}

export default App
