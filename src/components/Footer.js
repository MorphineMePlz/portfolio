function Footer({ contacts, onScroll }) {
  return (
    <footer className="footer" ref={contacts} onScroll={onScroll}></footer>
  );
}
export default Footer;
