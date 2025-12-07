import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const recipes = await getCollection('recipes');
  
  return rss({
    title: "Anna's Recipes",
    description: 'A collection of culinary experiments, recipes, and food photography',
    site: context.site || 'https://annavanong2003.github.io/my-portfolio/',
    items: recipes.map((recipe) => ({
      title: recipe.data.title,
      description: recipe.data.description,
      link: `/recipes/${recipe.id}/`,
      pubDate: new Date(),
    })),
    customData: `<language>en-us</language>`,
  });
}
