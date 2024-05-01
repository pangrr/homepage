# `const` for functions?
As a believer of 'important code first', it highlights the main logic to put functions down below. `function` makes it possible, not `const`.
   
  
Which one is better?

```jsx
function Button() {
	const handleClick = () => {
		getData()
		parseData()
		showNotification()
	}

	const getData = () => {
		...
	}
	
	const parseData = () => {
		...
	}

	const showNotification = () => {
		...
	}

	return <button onClick={handleClick}></button>
}
```

or

```jsx
function Button() {
	return <button onClick={handleClick}></button>

	const handleClick = () => {
		getData()
		parseData()
		showNotification()
	}

	const getData = () => {
		...
	}

	const parseData = () => {
		...
	}

	const showNotification = () => {
		...
	}
}
```