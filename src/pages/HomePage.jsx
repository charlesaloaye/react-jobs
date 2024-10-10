import ActionType from "../components/ActionType";
import AllJobs from "../components/Alljobs";
import Hero from "../components/Hero";
import JobListings from "../components/JobListings";

const HomePage = () => {
  return (
    <>
      <Hero />
      <ActionType />
      <JobListings />
      <AllJobs />
    </>
  );
};

export default HomePage;
