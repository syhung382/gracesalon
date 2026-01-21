import MainLayout from "./layouts/MainLayout";
import HomePage   from "./pages/Home";
import "./styles/global.css";

export default function App() {
  return (
    <MainLayout>
      <HomePage />
    </MainLayout>
  );
}
