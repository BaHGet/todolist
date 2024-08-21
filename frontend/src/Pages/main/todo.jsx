import { CardCompoent } from '../../Components/Card/Cards';

const Todo = ({index, todo, handelDelete}) => {
    return (
        <div key={index}>
            <CardCompoent todo={todo} index={index} handelDelete={handelDelete}/>
        </div>
    )
}

export default Todo