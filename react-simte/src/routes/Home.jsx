import { Link, useNavigate } from "react-router-dom";
const Home = () => {
  let navigate = useNavigate();
  const startTest = () => {
    navigate(`/subpage`);
  };
  return (
    <>
      <main className="">
        <h1>React Simte</h1> <Link to={`/subpage`}>Go to subpage &rarr;</Link>
        <Button btntext={"시작"} onClickEvent={startTest} />
      </main>
    </>
  );
};

export default Home;
