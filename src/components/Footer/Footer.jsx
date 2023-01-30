import './Footer.css'

function Footer() {
  return (
    <footer>
      <div className="container">
        <ul>
          <li>Data from <a   target="_blank" rel='noreferrer' href="https://rapidapi.com/weatherapi/api/weatherapi-com/" >RapidApi</a></li>
          <li>Link to<a  target='_blank'rel='noreferrer' href="https://github.com/NolascoZapata/weatherapp"> Repository</a></li>
        </ul>
      </div>
      <div className="footer-copyright">
        <div className="container">
        © 2023 Copyright
        </div>
      </div>
    </footer>
  )
}

export default Footer