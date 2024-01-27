function Nav({ nav }) {
  return (
    <nav>
      <ul>
        {nav.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.text}</a>
          </li>
        ))}
      </ul>
      {console.log(nav)}
    </nav>
  );
}

export default Nav;
