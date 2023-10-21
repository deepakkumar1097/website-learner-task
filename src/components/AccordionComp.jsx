import React from "react";
import Accordion from "react-bootstrap/Accordion";
import CardComp from "./CardComp";
import CardCollapseComp from "./CardCollapseComp";
import Image1 from "../assets/image 1.png";
import Image2 from "../assets/image 10.png";
import Image3 from "../assets/image 11.png";
import Image4 from "../assets/image 12.png";
import Image5 from "../assets/image 13.png";
import Image6 from "../assets/image 14.png";
import Image7 from "../assets/image 15.png";
import Image8 from "../assets/image 3.png";
import Image9 from "../assets/image 16.png";
import ButtonComp from "./ButtonComp";

function AccordionComp() {
  return (
    <div className="accordion-container">
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header bsPrefix="accordion-header">
            Step 1: Niche Products
          </Accordion.Header>
          <Accordion.Body bsPrefix="accordion-body">
            <div className="baby-items">
              <h5>Baby Products</h5>
              <div className="card-container">
                <CardCollapseComp
                  image={Image1}
                  title={"Baby Carriers"}
                  content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud`}
                />
                <CardComp
                  image={Image2}
                  title={"Baby Diapers"}
                  content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud`}
                />
                <CardCollapseComp
                  image={Image3}
                  title={"Baby Skin Care"}
                  content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud`}
                />
                <CardCollapseComp
                  image={Image4}
                  title={"Bottle Feeding"}
                  content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud`}
                />
                <CardCollapseComp
                  image={Image5}
                  title={"Baby Monitors"}
                  content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud`}
                />
                <CardCollapseComp
                  image={Image6}
                  title={"Baby Teethers"}
                  content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud`}
                />
              </div>
              <div className="kitchen-items">
                <h5>Kitechen Tools</h5>
                <div className="card-container">
                  <CardCollapseComp
                    image={Image7}
                    title={"Food Stainers"}
                    content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud`}
                  />
                  <CardComp
                    image={Image8}
                    title={"Kitchen Knives"}
                    content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud`}
                  />
                  <CardCollapseComp
                    image={Image9}
                    title={"Peelers"}
                    content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud`}
                  />
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Step 2: Get Hosting & Domain</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Step 3: Finding Keyword</Accordion.Header>
          <Accordion.Body>
            <div className="keywords-container">
              <h5>Tools to find keywords</h5>
              <div className="tool tool-one">
                <ButtonComp
                  text={"#1 Tool"}
                  background={"#12AA84"}
                  border={"transparent"}
                  color="white"
                />
                <p>Keyword.io</p>
              </div>
              <div className="tools">
                <div className="tool tool-two">
                  <ButtonComp
                    text={"#2 Tool"}
                    background="transparent"
                    border="#12AA84"
                    color="#12AA84"
                  />
                  <p>Keyword Sheeter</p>
                </div>
                <div className="tool tool-three">
                  <ButtonComp
                    text={"#3 Tool"}
                    background={"transparent"}
                    border={"#12AA84"}
                    color="#12AA84"
                  />
                  <p>Keyword Sheeter</p>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Step 4 : Find Number of Searches</Accordion.Header>
          <Accordion.Body>
            <div className="keywords-container">
              <h5>Tools to get Search Volume</h5>
              <div className="tool tool-one">
                <ButtonComp
                  text={"#1 Tool"}
                  background={"#12AA84"}
                  border={"transparent"}
                  color="white"
                />
                <p>SemScoop</p>
              </div>
              <div className="tools">
                <div className="tool tool-two">
                  <ButtonComp
                    text={"#2 Tool"}
                    background="transparent"
                    border="#12AA84"
                    color="#12AA84"
                  />
                  <p>LinkGraph</p>
                </div>
                <div className="tool tool-three">
                  <ButtonComp
                    text={"#3 Tool"}
                    background={"transparent"}
                    border={"#12AA84"}
                    color="#12AA84"
                  />
                  <p>SearchVolume.io</p>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default AccordionComp;
