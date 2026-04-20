import TasksCard from "@/components/TasksCard";
import { getTask } from "@/lib/tasks";

const TasksPage = async () => {

    const tasks = await getTask()


    return (
        <div>
            <h2>Task: {tasks.length}</h2>
            <div className="grid grid-cols-3 gap-4">
                {
                    tasks.map(task => <TasksCard task={task} key={task.id}></TasksCard>)
                }
            </div>
        </div>
    );
};

export default TasksPage;