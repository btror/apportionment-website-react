import { Row, Container, Col, Button, Form, Table } from "react-bootstrap";

function CalculatorHamilton() {
  return (
    <div id="calculator">
      <Container>
        <br />
        <br />
        <Row id="row">
          <label for="seats-input">Enter an amount of seats</label>
          <Form.Control
            type="number"
            placeholder="enter number"
            name="seats-input"
          ></Form.Control>
        </Row>
        <br />
        <br />
        <Row id="row">
          <Table striped bordered hover size="sm" id="table">
            <thead>
              <tr>
                <th>state</th>
                <th>population</th>
                <th>quota</th>
                <th>initial fair share</th>
                <th>final fair share</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <input type="number"/>
                </td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
            </tbody>
            <div id='newItem'></div>
          </Table>
        </Row>
        <br />
        <Row id="row">
          
            <Button id='add-button'>add state</Button>
            <Button id='remove-button'>remove state</Button>
          
          
        </Row>
        <br />
        <br />
      </Container>
    </div>
  );
}

export default CalculatorHamilton;
