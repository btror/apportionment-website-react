import { Row, Container, Col } from "react-bootstrap";

function Home() {
  return (
    <Container>
      <Row id="home-content">
        <Col>
          <article>
            <header>Free to use</header>
            <p>
              We do not require our users to sign up or create an account. Our
              software is completely free to use. We will never ask you for
              money, we only wish that you enjoy our software and share it with
              your friends.
            </p>
          </article>
        </Col>
        <Col>
          <article>
            <header>Try our mobile apps</header>
            <p>
              We also provide a mobile version of this software. Not only is
              this website mobile-friendly, we also have two mobile apps on the
              Google Play store. One is completely free to use and contains ads
              and the other one costs 99 cents and contains extra features such
              as a dark-mode option.{" "}
            </p>
          </article>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
