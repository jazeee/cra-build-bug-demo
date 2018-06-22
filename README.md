This reproduces a build bug when using config in `package.json`
```
  "browserslist": {
    "development": [
      "last 1 chrome versions"
    ],
    "production": [
      "last 1 chrome versions"
    ]
  }
```

When running `yarn build` the output javascript file contains:
```
  const t = e.data,
        n = e.selectedRows,
```
and then:
```
  n = n, o.every(e => n.includes(e)), alert("Works")
```
When Chrome attempts to reassign `const n`, it throws an exception:
```
main.c1817bd7.chunk.js:1 TypeError: Assignment to constant variable.
```

Repro in Demo app:
1. `yarn start`
1. Click on the red div element. Observe an alert saying `Works`.
1. `yarn build`
1. node_modules/.bin/serve build/
1. Click on the red div element.
Observe an alert saying `TypeError: Assignment to constant variable.`
Expect `Works`
Also, can see the compiled code has a problem:
```
			const t = e.data
			  , n = e.selectedRows
				//...
					onClick: ()=>{
						try {
							n = n, // This is being reassigned...
				//... Stripped for clarity
```

For reference, can make the minified code beautiful using:
`yarn build && js-beautify build/static/js/main.*.js`
