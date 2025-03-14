import AppLayout from "./components/layout/AppLayout";
import { CryptoContextProvider } from "./context/cryptocontext";

export default function App() {
  return (
    <CryptoContextProvider>
      <AppLayout />
    </CryptoContextProvider>
  );
}
