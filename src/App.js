import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {NavbarInst} from './components/navbar.js';
import {JumbotronInst} from './components/jumbotron.js';
import {ScrollingSubBar} from './components/scrollingSubBar.js';
import {Waypoint} from './components/waypoint.js';
import {TargetRow} from './components/targetRow.js';
import {RequestForm} from './components/requestForm.js';
import wcoLogo from './resources/top_nav/WCO_LOGOMARK_45x45.svg';
import gtasLogo from './resources/decision_makers/GTAS_145x145.svg';
import gtasLogoBg from './resources/decision_makers/GTAS_145x145bg.svg';

import gtasExplainer from './resources/what_is_gtas/GTAS_EXPLAINER.svg';
import gtasTimeline from './resources/system_works/GTAS_TIMELINE.jpg';
import gtasDecision from './resources/decision_makers/diagram.PNG'
import costBreakdown from './resources/cost_analysis/GTAS_COST_BREAKDOWN.jpg';
import customerService from './resources/form/CUSTOMER_SERVICE_250x250.svg';
import footerImg from './resources/footer/WOC_FULL_MARK_370x36.svg';
import {LIGHTBOX_IMGS} from './components/consts.js';
import Lightbox from './components/lightbox.js';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarInst logo={wcoLogo} title="World Customs Organization - GTAS"
          smTitle="WCO - GTAS"/>
        <JumbotronInst bgColor="#1460AA" background={gtasLogoBg} logo={gtasLogo} title="GTAS" subtitle="Global Travel Assessment System">
          Developed by U.S. Customs and Border Protection <br /> for the World Customs Organization
        </JumbotronInst>
        <ScrollingSubBar>
          <Waypoint to="what" content="What is GTAS?"/>
          <Waypoint to="how" content="How the System Works"/>
          <Waypoint to="decision" content="For Decision Makers"/>
          <Waypoint to="dev" content="Developer Resources"/>
          <Waypoint to="support" content="Support"/>
        </ScrollingSubBar>
        <div className="container">
          <TargetRow id="what" className="var-flex-wrap-rev">
            <div className="forty-width flex">
              <img alt="gtasExplainer" className="flex-grow" src={gtasExplainer} />
            </div>
            <div className="sixty-width">
              <h1>What is GTAS?</h1>
              <p className="margin-btm">GTAS is an Open Source web application for improving Global Security by using industry-standard
                Advance Passenger Information (API) to screen commercial air travelers. GTAS was developed in
                response to UN Resolution 2178 to help the world combat terrorism and improve travel security for
                everyone. It is designed for use by: any government entity stakeholder in customs enforcement, border
                management, immigration, national security, or even tourism; any agency without an API/PNR
                (Passenger Name Record) system that needs one in the near term; any agency looking to develop their
                own solution, but is looking for ideas.</p>
              <div className="margin-btm">
                <h3><span className="bold">Free</span> | No Cost to use, free to modify to fit your nation’s needs.</h3>
                <h3><span className="bold">Transparent</span> | Human-readable source code.</h3>
                <h3><span className="bold">Always Improving</span> | A community of developers collaborate on its improvement.</h3>
                <h3><span className="bold">Easy Deployment</span> | Download code, build application, and start the server.</h3>
                <h3><span className="bold">Flexible</span> | Wide range of tools available.</h3>
              </div>
              <p className="margin-btm">GTAS was created by and is maintained by the U.S. Customs and Border Protection agency.</p>
              <Button bsStyle="primary">
                Request Demo Access
              </Button>
            </div>
          </TargetRow>
          <TargetRow id="how" background="#F6F6F6" className="var-flex-wrap">
            <div className="sixty-width">
              <h1>How the system works.</h1>
              <p className="margin-btm">In a conventional passenger vetting workflow, government agencies have little time to react to
                incoming data from the time a passenger manifest is generated to when the traveler reaches a
                border checkpoint. With GTAS not only is this process more efficient, but you can get started as
                early as when the passenger purchases their ticket.</p>
              <ul className="margin-btm">
                <li className="bold">Ingests all of Advance Passenger Data (API).</li>
                <li className="bold">Automatically screens all passengers.</li>
                <li className="bold">Manually vet less than 1% of travelers.</li>
                <li className="bold">Catch terrorists, contraband, missing persons, overstayed visas, etc.</li>
                <li className="bold">Promote legitimate travel.</li>
                <li className="bold">Expedites the screening process.</li>
                <li className="bold">Makes global travel safer for everyone.</li>
              </ul>
            </div>
            <div className="forty-width flex">
              <Lightbox attr={LIGHTBOX_IMGS} >
                <img alt="gtasTimeline" className="flex-grow" src={gtasTimeline} />
              </Lightbox>
            </div>
          </TargetRow>
          <TargetRow id="decision" direction="column">
            <div>
              <h1 className="margin-btm">For decision makers.</h1>
              <p className="margin-btm">GTAS is a pretty straight-forward system. You can have the system up in running in essentially 5 steps. The API airline data is already being collected by the airline providers regardless of whether you use the
                data, so simply getting your nation’s consent via legislation to accept this data may be the biggest hurdle you face in implementation. GTAS has support for many languages but the aggragate data and source
                code is written in english per international standard. You will need IT staff who are proficient in english to use this system.</p>
              <p className="margin-btm">See how the Uganda Revenue Authority launched their GTAS pilot by reading the story here: WCO News site.</p>
              <Lightbox index={1} attr={LIGHTBOX_IMGS} >
                <img alt="gtasDecision" className="full-width padding-sm" src={gtasDecision} />
              </Lightbox>
            </div>
            <div>
              <h2 className="bold">API data collected that GTAS uses for targeting.</h2>
              <div className="flex justify-around var-flex-wrap sm-start">
                <div>
                  Biographic/Travel Document:
                  <ul>
                    <li>Name</li>
                    <li>Gender</li>
                    <li>DOB</li>
                    <li>Citizenship</li>
                    <li>Country of residence</li>
                    <li>Document expiration</li>
                  </ul>
                </div>
                <div>
                  Biographic/Travel Document:
                  <ul>
                    <li>Days booked before travel</li>
                    <li>Number of traverles on the PNR</li>
                    <li>Frequent flyer account info</li>
                    <li>Embarkation/Debarkation</li>
                    <li>Seat Selection</li>
                    <li>Baggage Details</li>
                  </ul>
                </div>
                <div>
                  Flight and Carrier:
                  <ul>
                    <li>Dates</li>
                    <li>Carriers</li>
                    <li>Routes</li>
                  </ul>
                </div>
              </div>
            </div>
          </TargetRow>
          <TargetRow id="dev" background="#F6F6F6" className="var-flex-wrap-rev">
            <div className="forty-width">
              <Lightbox index={2} attr={LIGHTBOX_IMGS} >
                <img alt="costBreakdown" className="full-width" src={costBreakdown} />
              </Lightbox>
            </div>
            <div className="sixty-width">
              <h1>Developer Resources</h1>
              <p className="margin-btm">The Global Travel Assessment System is housed on Github. It’s license-free to use in perpetuity. We
                highly recommend you take a look at the files listed on the GTAS Github page and either download
                them or fork the repository to your account. We have the required software/hardware list as well as two
                sample infrastructure configurations listed here, but your individual country’s needs may vary. If you
                have questions, feel free to fill out the form below and we will be happy to help.</p>
              <p className="margin-btm">The GTAS system requires WCO UN/EDIFACT Passenger (PAXLST V3.0) and/or PNRGOV (V13.1)
              message formats. You can learn more about these formats by reviewing the GTAS Technical Guide
              documentation found on our Github page by clicking the link below.</p>
              <div className="flex flex-wrap">
                <Button bsStyle="primary" className="margin-sm">
                  View on Github
                </Button>
                <Button bsStyle="primary" className="margin-sm">
                  Request Demo Access
                </Button>
              </div>
            </div>
          </TargetRow>
        </div>
        <TargetRow id="support" background="#1360AA" className="var-flex-wrap justify-center">
          <div className="flex forty-width child-text-white flex-col text-center align-items-center">
            <img className="form-img" src={customerService} />
            <h1>How can we help you?</h1>
            <p>Not sure where to start? Need assistance with technical
            questions or pricing out a configuration that meets your
            needs? Fill out this quick form and we will be happy to assist
            you get up and running with GTAS.</p>
          </div>
          <div className="flex sixty-widths align-items-center">
            <RequestForm />
          </div>
        </TargetRow>
        <div className="flex justify-center padding-md">
          <img alt="footerImg" src={footerImg} />
        </div>
      </div>

    );
  }
}
