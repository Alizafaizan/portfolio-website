

import { Button } from "@/components/ui/button"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Link from "next/link"
import Education from "./ui/education"
import Skills from "./skills"
import Projects from "./projects"
import Experience from "./experience"
import Contact from "./contact"


export function Deatail() {
  return (
    <Tabs defaultValue="education" className="w-full p-3">
      <TabsList className="grid w-full grid-cols-5">
        {/* Tabs Triger Button */}
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
        <TabsTrigger value="projects">Projects</TabsTrigger>
        <TabsTrigger value="contacts">Contact</TabsTrigger>

      </TabsList>
      {/* Tabs Contant Here */}
      {/* Education */}
      <TabsContent value="education">
        <Education/>
      </TabsContent>
      {/* Experience */}
      <TabsContent value="experience">
        <Experience/>
      </TabsContent>
       {/* Skills */}
       <TabsContent value="skills">
        <Skills/>
      </TabsContent>
       {/* Projects */}
       <TabsContent value="projects">
        <Projects/>
      </TabsContent>
      {/* Contact */}
      <TabsContent value="contacts">
        <Contact/>
      </TabsContent>
 
    </Tabs>
  )
}
