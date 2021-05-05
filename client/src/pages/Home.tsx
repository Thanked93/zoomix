import React from "react";
import JumbotronContainer from "../container/JumbotronContainer";
import { PageContent } from "./styles";

export const Home: React.FC = () => {
  return (
    <PageContent>
      <JumbotronContainer />
    </PageContent>
  );
};

export default Home;
