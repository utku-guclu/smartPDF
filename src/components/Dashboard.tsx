import UploadButton from "./UploadButton";

const Dashboard = () => {
  return (
    <main className="mx-auto max-w-7xl md:p-10">
      <div className="mt-8 flex flex-row items-start justify-between gap-4 border-b broder-gray-200 pb-5 sm:flex-rw sm:items-center sm:gap-0">
        <h1 className="mb-3 font-bold text-5xl text-gray-900">My Files</h1>

        <UploadButton />
      </div>
    </main>
  );
};

export default Dashboard;
