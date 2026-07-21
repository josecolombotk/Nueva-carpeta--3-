import "./Home.css";
import Card from "../../components/Card/Card";
import { stories } from "../../data/stories";

function Home() {
  return (
    <>
      <h1>Biblioteca</h1>

      <div className="stories-grid">
        {stories.map((story) => (
          <Card key={story.id} story={story} />
        ))}
      </div>
    </>
  );
}

export default Home;