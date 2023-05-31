import React, { useState } from 'react'

function BookCreate({onCreate}) {
    const [tittle, setTittle] = useState('')

    const handleChange = (event) =>{
        setTittle(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        onCreate(tittle)
        setTittle('')
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Tittle</label>
            <input value={tittle} onChange={handleChange} />
            <button>submit</button>
        </form>
    </div>
  )
}

export default BookCreate