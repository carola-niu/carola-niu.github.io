import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#e9f6f7" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
        <a
          rel="noopener"
          href="https://github.com/carola-niu"
          aria-label="My GitHub"
        > <span className="badge bg-dark">
            Yiyi Niu
          </span>
        </a>{" "}
        using <i className="fab fa-react" />
        <p>
          <small className="text-muted">
            Inspired by <a href="https://github.com/hashirshoaeb">hashirshoaeb</a>
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
