import Axios from "axios"
import React, { useState } from "react"

function StudentCard(props) {
  const [isEditing, setIsEditing] = useState(false)
  const [draftName, setDraftName] = useState("")
  const [file, setFile] = useState()
  const [draftCourse, setDraftCourse] = useState("")

  async function submitHandler(e) {
    e.preventDefault()
    setIsEditing(false)
    props.setStudents(prev =>
      prev.map(function (student) {
        if (student._id == props.id) {
          return { ...student, name: draftName, course: draftCourse }
        }
        return student
      })
    )
    const data = new FormData()
    if (file) {
      data.append("photo", file)
    }
    data.append("_id", props.id)
    data.append("name", draftName)
    data.append("course", draftCourse)
    const newPhoto = await Axios.post("/update-student", data, { headers: { "Content-Type": "multipart/form-data" } })
    if (newPhoto.data) {
      props.setStudents(prev => {
        return prev.map(function (student) {
          if (student._id == props.id) {
            return { ...student, photo: newPhoto.data }
          }
          return student
        })
      })
    }
  }

  return (
    <div className="card">
      <div className="our-card-top">
        {isEditing && (
          <div className="our-custom-input">
            <div className="our-custom-input-interior">
              <input onChange={e => setFile(e.target.files[0])} className="form-control form-control-sm" type="file" />
            </div>
          </div>
        )}
        <img src={props.photo ? `/uploaded-photos/${props.photo}` : "/fallback.png"} className="card-img-top" alt={`Picture of ${props.name}`} style={{ width: "100%", height: "180px", objectFit: "cover", objectPosition: "top"}}/>
      </div>
      <div className="card-body">
        {!isEditing && (
          <>
            <h4>{props.name}</h4>
            <p className="text-muted small">{props.course}</p>
            {!props.readOnly && (
              <>
                <button
                  onClick={() => {
                    setIsEditing(true)
                    setDraftName(props.name)
                    setDraftCourse(props.course)
                    setFile("")
                  }}
                  className="btn btn-sm btn-primary"
                >
                  Edit
                </button>{" "}
                <button
                  onClick={async () => {
                    const test = Axios.delete(`/student/${props.id}`)
                    props.setStudents(prev => {
                      return prev.filter(student => {
                        return student._id != props.id
                      })
                    })
                  }}
                  className="btn btn-sm btn-outline-danger"
                >
                  Delete
                </button>
              </>
            )}
          </>
        )}
        {isEditing && (
          <form onSubmit={submitHandler}>
            <div className="mb-1">
              <input autoFocus onChange={e => setDraftName(e.target.value)} type="text" className="form-control form-control-sm" value={draftName} />
            </div>
            <div className="mb-2">
              <input onChange={e => setDraftCourse(e.target.value)} type="text" className="form-control form-control-sm" value={draftCourse} />
            </div>
            <button className="btn btn-sm btn-success">Save</button>{" "}
            <button onClick={() => setIsEditing(false)} className="btn btn-sm btn-outline-secondary">
              Cancel
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default StudentCard