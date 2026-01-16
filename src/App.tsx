
import  gsap  from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger) 

const App = () => {
  return (
    <div className="text-3xl font-bold underline text-blue-500">App</div>
  )
}

export default App