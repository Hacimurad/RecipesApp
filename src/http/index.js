import axios from "axios"

export const getRecipesList = async (tags=null,size) => {
    const options = {
        method: 'GET',
        url: 'https://tasty.p.rapidapi.com/recipes/list',
        params: {from: '0', size: size || '20', tags},
        headers: {
          'X-RapidAPI-Key': '197ffb6061msh3b4e22695cc4f2ap106cecjsn74f1b65a7b9d',
          'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        }
      };
   return await axios.request(options)
}