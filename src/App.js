import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import ViewPlans from "./components/ViewPlans/ViewPlans";
import Cards from "./components/Cards/Cards";
import WorkCard from "./components/WorkCard/WorkCard";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <ViewPlans />
      <Cards />
      <WorkCard />
      <Footer />
    </div>
  );
}

export default App;
