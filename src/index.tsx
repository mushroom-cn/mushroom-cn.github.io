import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import mermaid from "mermaid";
(async () => {
  mermaid.initialize({ startOnLoad: false });
  await mermaid.run({
    querySelector: ".language-mermaid",
  });
})();
function App() {
  // TODO
  return <></>;
}
const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
