"use client";

import {
  Card,
  CardHeader,
  CardBody,
  // CardFooter,
  Divider,
  // Link,
  // Image,
} from "@heroui/react";
import { GithubIcon } from "./icons";

export default function ProjectCard() {
  const list = [
    {
      title: "Brainfuck",
      description: "Brainfuck interpreter written in C",
      link: "https://github.com/prasanna-ezhilmurugan/brainfuck.git",
    },
    {
      title: "Game of Life",
      description: "Conway's game of life written in C & SDL",
      link: "https://github.com/prasanna-ezhilmurugan/game-of-life.git",
    },
    {
      title: "Portfolio",
      description: "The portfolio you are currently looking at.",
      link: "https://github.com/prasanna-ezhilmurugan/porfolio.git",
    },
    {
      title: "Chip-8",
      description: "Chip 8 emulator written in C++",
      link: "https://github.com/prasanna-ezhilmurugan/Chip-8.git",
    },
  ];
  return (
    <div className="m-8 gap-2 grid grid-col-2 sm:grid-cols-4">
      {list.map((item) => (
        <Card
          key={item.title}
          className="max-w-[400px]"
          isPressable
          onPress={() => {
            window.open(item.link);
          }}
        >
          <CardHeader className="flex gap-3">
            <GithubIcon size={40} />
            <div className="flex flex-col">
              <p className="text-md">{item.title}</p>
              {/* <p className="text-small text-default-500">heroui.com</p> */}
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>{item.description}</p>
          </CardBody>
          {/* <Divider />
          <CardFooter>
            <Link isExternal showAnchorIcon href={item.link}>
              Visit source code on GitHub.
            </Link>
          </CardFooter> */}
        </Card>
      ))}
    </div>
  );
}
