import { useState } from 'react'
import { Skeleton, ImageList, ImageListItem, ImageListItemBar, Container, Paper } from '@mui/material'
import wallet from './assets/wallet.gif'

function App() {
  return (
    <Container maxWidth="xl">
      <Paper sx={{ p: 8 }}>
        <ImageList cols={3} gap={32}>
          <ImageListItem sx={{ p: 2, borderRadius: 2, border: '1px solid', borderColor: 'grey.900', cursor: 'pointer' }} onClick={() => openTab('https://pangrr.github.io/wallet/')}>
            <img src={wallet} />
            <ImageListItemBar
              title={'Wallet'}
              subtitle={'A simple Ethereum wallet'}
              position="below"
            />
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
