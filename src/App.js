import "./App.css";
import Influencer from "./components/Individual/Influencer/Influencer";
import Services from "./components/Individual/Services/Services";
import Testimonial from "./components/Individual/Testimonial/Testimonial";
import Socials from "./components/Individual/Socials/Socials";

function App() {
  return (
    <div>
      <Influencer />

      <Services />
      <Testimonial />
      <Socials />
    </div>
  );
}

export default App;
