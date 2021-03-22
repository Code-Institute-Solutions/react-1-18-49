import React, {useState} from 'react'

function UseStateWithArrays() {
    const [nums, setNums] = useState([1, 2, 3]);
    const addNums = () => {
        const random = Math.floor(Math.random() * 1000000);
        setNums([...nums, random]);
    }
    const removeNum = () => {
        setNums(
            nums.filter((item, idx) => {
                return idx !== nums.length -1;
            })
        )
    }
    const buggyPushNum = () => {
        const random = Math.floor(Math.random() * 1000000);
        nums.push(random);
        setNums(nums);
        console.log(nums);
    }
    return (
        <div>
            <button onClick={addNums}>Add Item</button>
            <button onClick={removeNum}>Remove Last Item</button>
            <button onClick={buggyPushNum}>Buggy Push Item</button>
            <ul>
                {nums.map(num => <li key={num}>{num}</li>)}
            </ul>
        </div>
    )
}

export default UseStateWithArrays
