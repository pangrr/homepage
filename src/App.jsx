import { useEffect, useState } from 'react'
import { Skeleton, ImageList, ImageListItem, Box, Container, AppBar, Toolbar, Card, CardContent, Typography, CardActions, Button, CardMedia, Collapse } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import { MuiMarkdown, getOverrides } from 'mui-markdown'
import { Highlight, themes } from 'prism-react-renderer'
import wallet from './assets/wallet.gif'
import articlePath_constForFunctions from './assets/constForFunctions.md'


const markdownOverrides = {
  ...getOverrides({ Highlight, themes, theme: themes.okaidia, hideLineNumbers: true }),
  h1: { component: 'h2' }
}

function App() {
  const [article_constForFunctions, setArticle_constForFunctions] = useState('')
  const [expandArticle_constForFunctions, setExpandArticle_constForFunctions] = useState(false)

  useEffect(() => {
    async function getArticles() {
      setArticle_constForFunctions(await (await fetch(articlePath_constForFunctions)).text())
    }
    getArticles()
  }, [])

  return (
    <>
      <AppBar color='darkerBackground' enableColorOnDark>
        <Toolbar variant="dense">
          <Button onClick={() => window.open('https://github.com/pangrr/demo', '_blank')} startIcon={<GitHubIcon />} color='inherit'>source code</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="xl">
        <Box sx={{ p: 8, maxHeight: '100%' }}>
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
                  <Collapse in={expandArticle_constForFunctions} collapsedSize={300}>
                    <MuiMarkdown overrides={markdownOverrides}>{article_constForFunctions}</MuiMarkdown>
                  </Collapse>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => setExpandArticle_constForFunctions(!expandArticle_constForFunctions)}>{expandArticle_constForFunctions ? 'collapse' : 'expand'}</Button>
                </CardActions>
              </Card>
            </ImageListItem>
            {[...Array(5).keys()].map((i) =>
              <ImageListItem key={i}>
                <Skeleton variant="rectangular" sx={{ bgcolor: 'grey.900' }} width={432} height={475} />
              </ImageListItem>
            )}
          </ImageList>
        </Box>
      </Container>
    </>
  )

  function openTab(path) {
    window.open(path, '_blank')
  }
}

export default App
