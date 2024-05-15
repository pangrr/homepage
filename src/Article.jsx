import { useEffect, useState } from 'react'
import { Card, CardContent, CardActions, Button, Collapse } from '@mui/material'
import { MuiMarkdown, getOverrides } from 'mui-markdown'
import { Highlight, themes } from 'prism-react-renderer'

const markdownOverrides = {
	...getOverrides({ Highlight, themes, theme: themes.okaidia, hideLineNumbers: true }),
	h1: { component: 'h2' }
}

export default function Article({ name }) {
	const [content, setContent] = useState('')
	const [expand, setExpand] = useState(false)

	useEffect(() => {
		async function getArticle() {
			const path = (await import(`./assets/${name}.md`)).default
			setContent(await (await fetch(path)).text())
		}
		getArticle()
	}, [])

	return <Card raised>
		<CardContent>
			<Collapse in={expand} collapsedSize={300}>
				<MuiMarkdown overrides={markdownOverrides}>{content}</MuiMarkdown>
			</Collapse>
		</CardContent>
		<CardActions>
			<Button size='small' onClick={() => setExpand(!expand)}>{expand ? 'collapse' : 'expand'}</Button>
		</CardActions>
	</Card>
}