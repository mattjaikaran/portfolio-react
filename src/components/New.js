import React, { useState } from 'react'
// import axios from 'axios'

const New = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [technologies, setTechnologies] = useState([])
  const [imageLinks, setImageLinks] = useState([])
  const [github, setGithub] = useState('https://github.com/')
  const [demo, setDemo] = useState('https://')

  const onSubmit = (e) => {
    e.preventDefault()
    const url = ''
    const techSplit = technologies.split(',')
    const imgSplit = imageLinks.split(',')
    const obj = {
      title,
      description,
      technologies: techSplit,
      imageLinks: imgSplit,
      github,
      demo
    }
    try {
      // const response = axios.post(url, obj)
      console.log('submit')
      console.log(obj)
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <div>
      <h3>New</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            name="title"
            placeholder="Title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            name="description"
            placeholder="Description"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Technologies (Separate by comma)</label>
          <input
            name="technologies"
            placeholder="Technologies"
            className="form-control"
            value={technologies}
            onChange={(e) => setTechnologies(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Image Links (Separate by comma)</label>
          <input
            name="images"
            placeholder="Images"
            className="form-control"
            value={imageLinks}
            onChange={(e) => setImageLinks(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Link to GitHub</label>
          <input
            name="github"
            className="form-control"
            defaultValue={github}
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Link to Application</label>
          <input
            name="demo"
            className="form-control"
            defaultValue={demo}
            value={demo}
            onChange={(e) => setDemo(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default New
