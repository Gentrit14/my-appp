import HeroSection from "./components/HeroSection"
import TeamSection from "@/components/TeamSection/TeamSection"
import LogoClouds from "@/components/LogoClouds/LogoClouds"




export default async function About() {

  return (
    <div className="bg-white">
      <HeroSection />   
      <TeamSection />
      <LogoClouds />
    </div>
  )
}
