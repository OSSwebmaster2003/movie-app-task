import { Helmet } from "react-helmet-async";
import HomeView from "../sections/Home/view/index";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Movie</title>
      </Helmet>

      <HomeView />
    </>
  );
}
