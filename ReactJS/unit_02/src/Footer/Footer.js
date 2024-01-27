import Nav from './../Header/Nav';
function Footer(props) {
  return (
    <footer>
      <h3>{props.site.site_name}</h3>
      <Nav />
    </footer>
  );
}

export default Footer;
