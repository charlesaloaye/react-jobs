import ActionType from "./components/ActionType"
import AllJobs from "./components/Alljobs"
import Hero from "./components/Hero"
import JobListings from "./components/JobListings"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ActionType />
      <JobListings />
      <AllJobs />
    </>
  )
}

export default App
