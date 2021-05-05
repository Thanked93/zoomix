import React from "react";
import Jumbotron from "../components/jumbotron/Jumbotron";

const JumbotronContainer: React.FC = () => {
  return (
    <Jumbotron>
      <Jumbotron.Row>
        <Jumbotron.Small>Welcome to Zoomix</Jumbotron.Small>
        <Jumbotron.Big>
          Enjoy time with your family and friends in boring covid times.
        </Jumbotron.Big>
      </Jumbotron.Row>
      <Jumbotron.Row flexDirection="row-reverse">
        <Jumbotron.Small>{"Video & Chat"}</Jumbotron.Small>
        <Jumbotron.Big>
          Zoomix supports Video calls and implements a simple Chat application.
        </Jumbotron.Big>
      </Jumbotron.Row>
      <Jumbotron.Row>
        <Jumbotron.Small>The code base</Jumbotron.Small>
        <Jumbotron.Big>
          The Code can be visited by one click below.
          <div>
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/Thanked93/zoomix"
            >
              Github
            </a>
          </div>
        </Jumbotron.Big>
      </Jumbotron.Row>
      <Jumbotron.Row flexDirection="row-reverse">
        <Jumbotron.Small>Email?</Jumbotron.Small>
        <Jumbotron.Big>
          No, you do not even need an email to register. We stay anonym.
        </Jumbotron.Big>
      </Jumbotron.Row>
    </Jumbotron>
  );
};

export default JumbotronContainer;
