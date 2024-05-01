import { useEffect, useState } from 'react'
import { Skeleton, ImageList, ImageListItem, ImageListItemBar, Container, Paper, Card, CardContent, Typography, CardActions, Button, CardMedia, Collapse } from '@mui/material'
import { MuiMarkdown, getOverrides } from 'mui-markdown'
import { Highlight, themes } from 'prism-react-renderer'
import wallet from './assets/wallet.gif'
import article1Path from './assets/constForFunction.md'

const markdownOverrides = {
  ...getOverrides({ Highlight, themes, theme: themes.okaidia, hideLineNumbers: true }),
  h1: { component: 'h2' }
}

function App() {
  const [article1, setArticle1] = useState('')
  const [expandArticle1, setExpandArticle1] = useState(false)

  useEffect(() => {
    async function getMdFiles() {
      setArticle1(await (await fetch(article1Path)).text())
    }
    getMdFiles()
  }, [])

  return (
    <Container maxWidth="xl">
      <Paper sx={{ p: 8 }}>
        <ImageList cols={3} gap={32} variant='mansory'>
          <ImageListItem>
            <Card raised>
              <CardMedia
                sx={{ height: 400 }}
                image={wallet}
                title="Wallet"
              />
              <CardContent>
                <Typography variant="h5">
                  Ehtereum Wallet
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => openTab('https://pangrr.github.io/wallet/')}>open wallet</Button>
              </CardActions>
            </Card>
          </ImageListItem>
          <ImageListItem>
            <Card raised>
              <CardContent>
                <Collapse in={expandArticle1} collapsedSize={300}>
                  <MuiMarkdown overrides={markdownOverrides}>{article1}</MuiMarkdown>
                </Collapse>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => setExpandArticle1(!expandArticle1)}>{expandArticle1 ? 'collapse' : 'expand'}</Button>
              </CardActions>
            </Card>
          </ImageListItem>
          {[...Array(5).keys()].map((i) =>
            <ImageListItem key={i}>
              <Skeleton variant="rectangular" sx={{ bgcolor: 'grey.800' }} width={432} height={475} />
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
