function getId(todos) {
  return todos.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId)
  }, -1) + 1
}

let recipeReducer = function(recipes = [], action){
  switch(action.type) {
    case 'ADD_RECIPE':
      return [{
          title: 'oh',
          descript: 'kay',
          ingred: 'action.recipeParams.ingred',
          id: getId(recipes)
        }, ...recipes]
    // case 'ADD_RECIPE_SUCCESS':
    //   return state.set('loading', true)
    default:
      return recipes
    }
}

export default recipeReducer
