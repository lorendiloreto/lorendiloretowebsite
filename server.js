const express  = require( 'express' ),
      app      = express()
      path = require('path')

const todos = [
  { name:'buy groceries', completed:false }
]

app.use( express.json() )

const publicDirectoryPath = path.join(__dirname, 'build')
app.use(express.static(publicDirectoryPath))

app.get("/_snowpack/*", (req, res) => {
  res.sendFile( __dirname + '/build' + req.path)
})

app.get('/', function(request, response) {
    response.sendFile( __dirname + '/' )
})

app.get( '/read', ( req, res ) => res.json( todos ) )

app.post( '/add', ( req,res ) => {
  todos.push( req.body )
  res.json( todos )
})

app.post( '/change', function( req,res ) {
  const idx = todos.findIndex( v => v.name === req.body.name )
  todos[ idx ].completed = req.body.completed
  
  res.sendStatus( 200 )
})

app.listen(process.env.PORT || 3000)

console.log("Running on port 3000")