import React, { useState } from 'react'

function UseStateWithObjects() {
    const [name, setName] = useState({ firstName: "", lastName: "" });

    return (
        <div>
            <form>
                <input
                    type="text"
                    value={name.firstName}
                    onChange={e => setName({
                        firstName: e.target.value
                    })}
                />
                <input
                    type="text"
                    value={name.lastName}
                    onChange={e => setName({
                        lastName: e.target.value
                    })}
                />
                <h2>{JSON.stringify(name)}</h2>
            </form>
        </div>
    )
}

export default UseStateWithObjects