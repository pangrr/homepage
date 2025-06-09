import { useEffect, useState } from "react"
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Typography
} from "@mui/material"

export default function WebApp({ name, title, action, imageHeight }) {
  const [image, setImage] = useState("")

  useEffect(() => {
    async function getImage() {
      setImage((await import(`./assets/${name}.gif`)).default)
    }
    getImage()
  }, [])

  if (!image) return null

  return (
    <Card raised>
      <CardMedia sx={{ height: imageHeight }} image={image} />
      <CardContent>
        <Typography variant="h5">{title}</Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() =>
            window.open(`https://pangrr.github.io/${name}/`, "_blank")
          }
        >
          {action}
        </Button>
      </CardActions>
    </Card>
  )
}
