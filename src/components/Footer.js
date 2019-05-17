import React from 'react'

const Footer = () => {
  return (
    <div className="text-center bg-white fixed-bottom py-2">
      <footer className="footer">
        <a href="https://github.com/mattjaikaran" target="_blank">
          <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-react-239cd.appspot.com/o/github.svg?alt=media&token=3fb9a3ab-82d5-426f-bc4c-b9a5fe919492" className="footerImg" />
        </a>
        <a href="https://linkedin.com/in/mattjaikaran" target="_blank">
          <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-react-239cd.appspot.com/o/linkedin.png?alt=media&token=55dfae9f-3d12-43fc-bb0a-bc8e1e78524c" className="footerImg" />
        </a>
        <a href="https://instagram.com/mattjaikaran" target="_blank">
          <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-react-239cd.appspot.com/o/instagram.png?alt=media&token=2fe6753f-d415-4d3d-b8bf-3fb776f392dd" className="footerImg" />
        </a>
      </footer>
    </div>
  )
}

export default Footer
