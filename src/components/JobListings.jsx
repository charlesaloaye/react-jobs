import jobs from "../data/jobs.json";
import Job from "./Job";
let JobListings = ({ heading = "", home = true }) => {
  const topThreeJobs = jobs.slice(0, 3);
  if (home) {
    heading = "Browse Jobs";
  }
  if (!home) {
    heading = "All Jobs";
  }

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topThreeJobs.map((job) => {
            return (
              <>
                <Job key={job.id} job={job} />
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JobListings;
