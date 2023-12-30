import { Grid, styled } from "@mui/material";
import React from "react";
import theme from "../../theme";
import { setSpacing } from "../../services/function";
import Header from "../molecules/Header";


interface DashBoardTemplateProps {
  header?: React.ReactElement;
  content?: React.ReactElement;
}

const Container = styled(Grid)({
  display: "flex",
  backgroundColor: "#F7F8FA",
  height: "100vh",
});

const RightBox = styled(Grid)({
  margin: "0",
  display: "flex",
  flexDirection: "column",

  width: "100%",
});

const NavigationBar = styled(Grid)({});

const HeaderComp = styled(Grid)(() => ({
  border:  "none" ,
}));

const ScrollableContent = styled(Grid)(
  ({ scrollablecontent }: { scrollablecontent: React.ReactNode }) => ({
    border: scrollablecontent ? "none" : "1px solid grey",
    scrollbarWidth: "thin",
    scrollbarColor: "transparent transparent",
    "&::-webkit-scrollbar": {
      width: "6px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "transparent",
    },
  })
);

const LandingPageTemplate = ({  content }: DashBoardTemplateProps) => {
  return (
    <Container>
      {/* <NavigationBar>
        <NavBar />
      </NavigationBar> */}
      <RightBox>
        <HeaderComp className="header">
          {<Header/>}
        </HeaderComp>
        <ScrollableContent scrollablecontent={content} className="maincontent">
          {content ?? "Content"}
        </ScrollableContent>
      </RightBox>
    </Container>
  );
};

export default LandingPageTemplate;