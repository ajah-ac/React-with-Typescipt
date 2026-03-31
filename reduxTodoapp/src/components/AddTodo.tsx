import  { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtodo } from '../features/todoSlice'
import { Plus } from 'lucide-react'
import { nanoid } from 'nanoid'
const AddTodo = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    return (
        <>
            <div>
                <input type="text"
                    placeholder='Add a tasK'
                    onChange={(e) => setInput(e.target.value)} />
                <button onClick={() => dispatch(addtodo({ id: nanoid(), text: input, complete: false }))}><Plus />
                </button>
            </div>

        </>
    )
}

export default AddTodo