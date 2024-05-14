import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import Link from "next/link";

const mock = [
  {
    id: 1,
    title: "Le loup",
    imageUrl: "https://placehold.it/400",
    shortDescription: "Le loup is the",
  },
  {
    id: 2,
    title: "Le gfdg",
    imageUrl: "https://placehold.it/400",
    shortDescription: "Le sdg is the",
  },
];


const getBooks = async () => {
  const res = await fetch("http://localhost:3000/api/books");
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const BookPage = async () => {

  const books = await getBooks();

  console.log(books)

  return (
    <div className="flex flex-col gap-12">
      <div className="flex justify-between">
        <div>
          <h2 className="text-2xl font-bold">Livres</h2>
          <p>Recherchez l'étendue de votre collection ici.</p>
        </div>
        <Input
          className="w-96"
          placeholder="Rechercher un livre, un auteur, un genre..."
        />
      </div>
      <div>
        <div className="flex justify-between">
          <h3 className="text-2xl font-bold">Explorer</h3>
          <Button variant="ghost">View all</Button>
        </div>
        <div className="flex gap-6 flex-wrap">
          {mock.map((m) => (
            <Link key={m.id} href={`/books/${m.id}`}>
              <Card className="w-64 cursor-pointer">
                <CardHeader>
                  <CardTitle>{m.title}</CardTitle>
                  <CardDescription>{m.shortDescription}</CardDescription>
                </CardHeader>
                <CardContent>
                  <img src={m.imageUrl} />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookPage;
