import { Row, Container, Col } from "react-bootstrap";

function About() {
  return (
    <Container>
      <Row id="about-content">
        <Col>
          <article>
            <header>About</header>
            <p>
              This website is meant to serve as the web-version of the
              apportionment calculator mobile app on the Google Play store. The
              purpose of this website is to allow people that don't own android
              devices a way to use the apportionment software I created.
            </p>
          </article>
        </Col>
        <Col>
          <article>
            <header>Project Details</header>
            <p>
              This website is a single page application created with React. The
              Bootstrap framework is used in designing the layout of all the
              elements and components on each page. The website is hosted on
              Heroku and the source code can be found on Github here.
            </p>
          </article>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
