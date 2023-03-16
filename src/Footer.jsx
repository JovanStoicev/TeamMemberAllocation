const Footer = () => {

  var today = new Date();

  return (
    <footer className="container footer-style/" >
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h5>Team Member Allocation app - {today.getDate()}/{today.getMonth() + 1}/{today.getFullYear()}</h5>
        </div>
      </div>
    </footer>
  )
}

export default Footer;