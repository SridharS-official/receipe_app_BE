const express = require("express");
const router = express.Router();
const { createRecipe, getRecipe, updateRecipe, deleteRecipe } = require('../Controller/recipeController');

router.post('/create', createRecipe);
router.get('/get-recipe/:id', getRecipe);  
router.put('/update/:id', updateRecipe);    
router.delete('/delete/:id', deleteRecipe); 

module.exports = router;
