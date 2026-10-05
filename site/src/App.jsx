import { useRoute } from "./useRoute.js";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { HomeScreen } from "./screens/HomeScreen.jsx";
import { ScholarsScreen } from "./screens/ScholarsScreen.jsx";
import { DonateScreen } from "./screens/DonateScreen.jsx";

const SCREENS = { home: HomeScreen, scholars: ScholarsScreen, donate: DonateScreen };

export function App() {
  const [route, navigate] = useRoute();
  const Screen = SCREENS[route];
  return (
    <>
      <Header route={route} onNav={navigate} />
      <main>
        <Screen onNav={navigate} />
      </main>
      <Footer onNav={navigate} />
    </>
  );
}
