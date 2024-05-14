"use client";

import React from "react";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Plus, Book, User, Library } from "lucide-react";
import DivWithIcon from "@/app/components/generic/div-with-icon";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const elements = [
    {
      label: "Livres",
      link: "/books/add",
      icon: Book,
    },
    {
      label: "Author",
      link: "/authors/add",
      icon: User,
    },
    {
      label: "Série",
      link: "/series/add",
      icon: Library,
    },
  ];

  return (
    <div className="h-12 p-6 flex justify-between">
      <h1>La Collection des Aventuriers</h1>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <DivWithIcon icon={Plus} label={"Proposer un élément"} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-24">
            {elements.map((el) => (
              <DropdownMenuItem key={el.label} className="cursor-pointer">
                <DivWithIcon
                  icon={el.icon}
                  label={el.label}
                  onClick={() => router.push(el.link)}
                />
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
