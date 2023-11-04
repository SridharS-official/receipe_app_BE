const Recipe = require('../Model/recipeModel');

const createRecipe = async (req, res) => {
    const { recipename, recipeDescription, image } = req.body;
  
    if (!(recipename && recipeDescription && image)) {
      return res.status(400).send({ errMessage: 'Input cannot be null' });
    }
  
    try {

      const newRecipe = new Recipe({
        recipename,
        recipeDescription,
        image,
      });
  
      const savedRecipe = await newRecipe.save();
      res.status(201).json(savedRecipe);
    } catch (error) {
      res.status(500).send({ errMessage: 'Error creating recipe' });
    }
  };
  

const getRecipe = async (req, res) => {
    try {
      const recipe = await Recipe.findById(req.params.id);
      if (!recipe) {
        return res.status(404).send({ errMessage: 'Recipe not found' });
      }
      res.json(recipe);
    } catch (error) {
      res.status(500).send({ errMessage: 'Error fetching recipe' });
    }
  };
  
const updateRecipe = async (req, res) => {
    const { recipename, recipeDescription, image } = req.body;
  
    if (!(recipename && recipeDescription && image)) {
      return res.status(400).send({ errMessage: 'Input cannot be null' });
    }  
    console.log(" params id",req.params.id );
    try {
        console.log("i am inside the update");
        const updatedRecipe = await Recipe.findByIdAndUpdate(
        req.params.id,
        {
          recipename,
          recipeDescription,
          image,
        },
        { new: true }
      );
  
      if (!updatedRecipe) {
        return res.status(404).send({ errMessage: 'Recipe not found' });
      }
  
      res.json(updatedRecipe);
    } catch (error) {
      res.status(500).send({ errMessage: 'Error updating recipe' });
    }
  };
  

const deleteRecipe = async (req, res) => {
    try {
      const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
      if (!deletedRecipe) {
        return res.status(404).send({ errMessage: 'Recipe not found' });
      }
      res.json(deletedRecipe);
    } catch (error) {
      res.status(500).send({ errMessage: 'Error deleting recipe' });
    }
  };
  
  module.exports = {
    createRecipe,
    getRecipe,
    updateRecipe,
    deleteRecipe
};