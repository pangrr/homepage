import {
  Skeleton,
  ImageList,
  ImageListItem,
  Box,
  Container,
  AppBar,
  Toolbar,
  Button
} from "@mui/material"
import GitHubIcon from "@mui/icons-material/GitHub"
import Article from "./Article"
import WebApp from "./WebApp"

function App() {
  return (
    <>
      <AppBar color="darkerBackground" enableColorOnDark>
        <Toolbar variant="dense">
          <Button
            onClick={() =>
              window.open("https://github.com/pangrr/useless-gallery/", "_blank")
            }
            startIcon={<GitHubIcon />}
            color="inherit"
          >
            source code
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="xl">
        <Box sx={{ pt: 6, maxHeight: "100%" }}>
          <ImageList cols={3} gap={32} variant="mansory">
            <ImageListItem>
              <WebApp
                name="useless-crypto-wallet"
                title="Ehtereum Wallet"
                action="open wallet"
                imageHeight={400}
              />
            </ImageListItem>
            <ImageListItem>
              <WebApp
                name="useless-telegram-client"
                title="Instant Message with Telegram"
                action="start chat"
                imageHeight={300}
              />
            </ImageListItem>
            <ImageListItem>
              <Article name="highlightMainCode" collapsedSize={430} />
            </ImageListItem>
            <ImageListItem>
              <WebApp
                name="useless-video-call"
                title="Video Chat"
                action="start call"
                imageHeight={400}
              />
            </ImageListItem>
            {[...Array(5).keys()].map((i) => (
              <ImageListItem key={i}>
                <Skeleton
                  variant="rectangular"
                  sx={{ bgcolor: "grey.900" }}
                  width={432}
                  height={475}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Container>
    </>
  )
}

export default App
