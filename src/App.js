import timelinePDF from "./assets/60th-timeline.pdf";
import "./App.css";
import React, { useRef } from "react";
import timeline from "./assets/timeline.png";
import { Footer } from "mapc-design-system";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Button } from "react-bootstrap";
import { FileEarmarkArrowDown, ZoomIn, ZoomOut, XLg } from "react-bootstrap-icons";

const Controls = ({ zoomIn, zoomOut, resetTransform }) => (
  <div id={"nav"}>
    <div id={"title"}>
      <span style={{ fontSize: "42px", fontStyle: "italic" }}>60</span>
      <span style={{ verticalAlign: "super", fontStyle: "italic" }}>th</span> ANNIVERSARY TIMELINE
    </div>
    <Button className={"NavButton"}>
      <a href={timelinePDF} download style={{ color: "#00332d" }}>
        <FileEarmarkArrowDown />
      </a>
    </Button>
    <Button className={"NavButton"} onClick={() => resetTransform()}>
      <XLg />
    </Button>
    <Button className={"NavButton"} onClick={() => zoomOut()}>
      <ZoomOut />
    </Button>
    <Button className={"NavButton"} onClick={() => zoomIn()}>
      <ZoomIn />
    </Button>
  </div>
);

function App() {
  const transformComponentRef = useRef(null);

  return (
    <div>
      <TransformWrapper initialScale={1} ref={transformComponentRef}>
        {(utils) => (
          <React.Fragment>
            <Controls {...utils} />
            <TransformComponent>
              <img src={timeline} alt="60th Anniversary Timeline" id="timeline" />
            </TransformComponent>
          </React.Fragment>
        )}
      </TransformWrapper>
      <Footer style={{ marginTop: "1rem" }} />
    </div>
  );
}

export default App;
