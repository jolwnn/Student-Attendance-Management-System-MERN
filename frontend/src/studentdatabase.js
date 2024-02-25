import React, { useState, useEffect } from "react"
import { createRoot } from "react-dom/client"
import Axios from "axios"
import CreateNewForm from "./components/CreateNewForm"
import StudentCard from "./components/StudentCard"

function App() {
  const [students, setStudents] = useState([])

  useEffect(() => {
    async function go() {
      const response = await Axios.get("/api/students")
      setStudents(response.data)
    }
    go()
  }, [])

  return (
    <div className="container">
      <p>
        <a href="/studentdatabase">&laquo; Back to public student database</a>
      </p>
      <CreateNewForm setStudents={setStudents} />
      <div className="student-grid">
        {students.map(function (student) {
          return <StudentCard key={student._id} name={student.name} course={student.course} photo={student.photo} id={student._id} setStudents={setStudents} />
        })}
      </div>
    </div>
  )
}

const root = createRoot(document.querySelector("#app"))
root.render(<App />)