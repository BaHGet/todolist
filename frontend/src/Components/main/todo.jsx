import dayjs from 'dayjs'
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const Todo = ({todo}) => {
    return (
        <div className="d-flex justify-content-between align-items-center mb-3">
            <h3 className="m-1">{todo.title}</h3>
            <p className="m-1">{todo.description}</p>
            <p className="m-1">{dayjs(todo.created_at).fromNow()}</p>
        </div>
    )
}

export default Todo