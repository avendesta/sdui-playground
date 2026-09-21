import screen from "./sdui/screen.json";
import { Renderer } from "./sdui/Renderer";
import type { SDUIScreen } from "./sdui/types";

function App() {
  const sduiScreen = screen as SDUIScreen;

  return (
    <main>
      {sduiScreen.components.map((node, index) => (
        <Renderer key={index} node={node} />
      ))}
    </main>
  );
}

export default App;
