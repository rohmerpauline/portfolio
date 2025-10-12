import { About } from './components/About/About';
import { HeroContainer } from './components/HeroContainer/HeroContainer';
import { MyExperience } from './components/MyExperience/MyExperience';
import { MyWork } from './components/MyWork/MyWork';

export default function Home() {
  return (
    <div className="">
      <HeroContainer />
      <MyWork />
      <MyExperience />
      <About />
    </div>
  );
}
