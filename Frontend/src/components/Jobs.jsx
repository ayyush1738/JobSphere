import TaskCard from "./Taskcard.jsx";

const Jobs = () => {
    return(
        <div className="w-3/4 h-3/4  bg-black align-middle self-center mx-auto p-10 rounded-3xl">
            <div className="flex justify-between">
                <TaskCard />
                <TaskCard />
                <TaskCard />
            </div>

            <div className="flex justify-between">
                <TaskCard />
                <TaskCard />
                <TaskCard />
            </div>
        </div>
    );
}

export default Jobs;