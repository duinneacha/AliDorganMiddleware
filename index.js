// Index.js for AliDorganMiddleware

// Dependencies here
const express = require('express')


// Config Express
const app = express()
const port = 3000


// Endpoint
app.get('/', (request, response) =>{
  console.log("Root Accessed")
  response.send('API Backend')
})


app.get('/ad', (request, response) => {
  console.log('/ad accessed')
  let recipeData = [
    {
      title: 'Chocolate muffins',
      caption: 'Make incredible healthy muffins',
      ingredients: [
        '90% Lindt Chocolate',
        'Honey',
        'Brown Wheat',
        'Bananas'
      ],
      instructions: [
        'Melt chocolate',
        'Add honey to chocolate',
        'Instruction 3',
        'Fourth Instruction',
        'Instruction 5'
      ]
    },
    {
      title: 'Second Recipe',
      caption: 'Delicious second recipe',
      ingredients: [
        'Ingredient 1',
        'Ingredient 2',
        'Ingredient 3',
        'Ingredient 4'
      ],
      instructions: [
        'Instruction 1',
        'Instruction 2',
        'Instruction 3',
        'Instruction 4'
      ]
    }
  ]
  response.send(recipeData)
})


// Listen
app.listen(process.env.PORT || port, () => {
  console.log(`Backend API for www.alinutrition.com listening on port ${port}`)
})