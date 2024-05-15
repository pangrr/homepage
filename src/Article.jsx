import { useEffect, useState } from 'react'
import { Card, CardContent, CardActions, Button, Collapse, Box } from '@mui/material'
import Markdown from 'markdown-to-jsx'
import { blueGrey } from '@mui/material/colors'

export default function Article({ name, collapsedSize = 0 }) {
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
			{collapsedSize > 0 ?
				<Collapse in={expand} collapsedSize={collapsedSize}>
					<Markdown options={markdownOptions}>{content}</Markdown>
				</Collapse>
				:
				<Markdown options={markdownOptions}>{content}</Markdown>
			}
		</CardContent>
		{collapsedSize > 0 && <CardActions>
			<Button size='small' onClick={() => setExpand(!expand)}>{expand ? 'collapse' : 'expand'}</Button>
		</CardActions>}
	</Card>
}

function Code({ children }) {
	return <code style={{ backgroundColor: blueGrey[700] }}>
		{children}
	</code>
}

const markdownOptions = {
	overrides: {
		code: { component: Code }
	}
}