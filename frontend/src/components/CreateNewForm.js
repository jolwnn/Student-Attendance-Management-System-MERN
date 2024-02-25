import Axios from "axios"
import React, { useState, useRef } from "react"

function CreateNewForm(props) {
  const [name, setName] = useState("")
  const [course, setCourse] = useState("")
  const [file, setFile] = useState("")
  const CreatePhotoField = useRef()

  async function submitHandler(e) {
    e.preventDefault()
    const data = new FormData()
    data.append("photo", file)
    data.append("name", name)
    data.append("course", course)
    setName("")
    setCourse("")
    setFile("")
    CreatePhotoField.current.value = ""
    const newPhoto = await Axios.post("/create-student", data, { headers: { "Content-Type": "multipart/form-data" } })
    props.setStudents(prev => prev.concat([newPhoto.data]))
  }

  return (
    <form className="p-3 bg-primary bg-opacity-25 mb-5" onSubmit={submitHandler}>
      <div className="mb-2">
        <input ref={CreatePhotoField} onChange={e => setFile(e.target.files[0])} type="file" className="form-control" />
      </div>
      <div className="mb-2">
        <input onChange={e => setName(e.target.value)} value={name} type="text" className="form-control" placeholder="Student name" />
      </div>
      <div className="mb-2">
        <input onChange={e => setCourse(e.target.value)} value={course} type="text" className="form-control" placeholder="Course enrolled" />
      </div>

      <button className="btn btn-primary">Create New Student</button>
    </form>
  )
}

export default CreateNewForm