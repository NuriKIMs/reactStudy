import { Link } from "react-router-dom";
import Button from "../components/Button"; //추가

const Home = () => {
  return (
    <>
      <main className="">
        <h1>React Simte</h1>
        <Link to={`/subpage`}>Go to subpage &rarr;</Link>
        <Button />
      </main>
    </>
  );
};

export default Home;
