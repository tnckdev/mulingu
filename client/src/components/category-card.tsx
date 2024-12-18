import { Category } from "@/utils/types";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { ArrowRight, Pencil } from "lucide-react";

const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <div className="w-[23%]">
      <Card>
        <CardHeader>
          <p className="font-bold text-left text-2xl">{category.title}</p>
        </CardHeader>
        <Separator />
        <CardContent>
          <p className="text-left p-2">{category.description}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex gap-2 pl-2">
            <p className="font-semibold">{category.wordCount} </p>
            <Pencil />
          </div>
          <Button>
            Learn <ArrowRight />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CategoryCard;
