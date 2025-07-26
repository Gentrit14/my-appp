


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
  title: string,
  image:string,
  time: number,
  description: string,
  vegan: boolean,
  id: string
}

async function getRecipes(): Promise<Recipe[]> {
  const result = await fetch('http://localhost:4000/recipes')

  await new Promise((resolve) => setTimeout(resolve, 3000))

  return result.json()
}


export default async function CardContent1() {

  const recipes = await getRecipes()

  return (
    <main>
      <div className="text-center">
        <h2 className="text-5xl pb-15  tracking-tight text-balance text-gray-900 sm:text-5xl">
              Testimonials
        </h2>
      </div>
      <div className='grid xs:grid-cols-3 4xl:grid-cols-1 gap-4 p-4 mb-60'>
        
      {recipes.map((recipe, index) => (
        <Card key={`${recipe.id}-${index}`} className='flex flex-col justify-between'>
          <CardHeader className='flex-row gap-4 items-center'>
            <Avatar>
              <AvatarImage src={`/img/${recipe.image}`} alt='recipe img' />
              <AvatarFallback>
                {recipe.title.slice(0,2)}
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
          <CardFooter className='flex justify-between'>
            <Button>View Recipe</Button>
            {recipe.vegan && <Badge variant="secondary">Vegan!</Badge>}
          </CardFooter>
        </Card>
      ))}


      </div>
    </main>
  )
}



 