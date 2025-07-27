import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface Recipe {
  title: string;
  image: string;
  time: number;
  description: string;
  vegan: boolean;
  id: string;
}


const fallbackRecipes: Recipe[] = [
  {
    id: "1",
    title: "Default Carbonara",
    image: "profile1.png",
    time: 20,
    description: "Fallback recipe: Pasta me vezë dhe djathë.",
    vegan: false,
  },
  {
    id: "2",
    title: "Default Salad",
    image: "profile2.png",
    time: 10,
    description: "Fallback recipe: Sallatë me perime të freskëta.",
    vegan: true,
  },
  {
      "id": "3",
      "title": "Chickpea Salad",
      "image": "profile3.png",
      "time": 15,
      "description": "A protein-packed salad with chickpeas, cucumber, tomatoes, and lemon dressing.",
      "vegan": true
  }
];

async function getRecipes(): Promise<Recipe[]> {
  try {
    const result = await fetch('http://localhost:4000/recipes', { cache: "no-store" });

    if (!result.ok) throw new Error("Failed to fetch recipes");

    await new Promise((resolve) => setTimeout(resolve, 3000));
    return result.json();
  } catch (error) {
    console.warn("Server is offline, using fallback recipes:", error);
    return fallbackRecipes;
  }
}

export default async function CardContent1() {
  const recipes = await getRecipes();

  return (
    <main>
      <div className="text-center">
        <h2 className="text-5xl pb-15 tracking-tight text-balance text-gray-900 sm:text-5xl">
          Testimonials
        </h2>
      </div>
      <div className="grid xs:grid-cols-3 4xl:grid-cols-1 gap-4 p-4 mb-60">
        {recipes.map((recipe, index) => (
          <Card key={`${recipe.id}-${index}`} className="flex flex-col justify-between">
            <CardHeader className="flex-row gap-4 items-center">
              <Avatar>
                <AvatarImage src={`/img/${recipe.image}`} alt="recipe img" />
                <AvatarFallback>
                  {recipe.title.slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{recipe.title}</CardTitle>
                <CardDescription>{recipe.time} mins to do..</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>{recipe.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button>View Recipe</Button>
              {recipe.vegan && <Badge variant="secondary">Vegan!</Badge>}
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
