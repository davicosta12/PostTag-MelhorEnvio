import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react'
import Barcode from 'react-barcode';
import './postTagME.scss';

class PostTagME extends Component {

  barcodeOptions = {
    width: 2,
    height: 100,
    format: "CODE128",
    displayValue: true,
    fontOptions: "",
    font: "monospace",
    textAlign: "center",
    textPosition: "bottom",
    textMargin: 2,
    fontSize: 20,
    background: "#ffffff",
    lineColor: "#000000",
    margin: 10,
    marginTop: undefined,
    marginBottom: undefined,
    marginLeft: undefined,
    marginRight: undefined
  }

  render() {

    return (
      <div className='container'>
        <Grid relaxed className="Grid">
          <Grid.Row columns='1' className="firstRow">
            <Grid.Column>
              <img src="https://ajrepositorio.s3.amazonaws.com/images/jadlog.png" alt="Logo Jadlog"></img>
              <img src="https://ajrepositorio.s3.amazonaws.com/images/melhorenvio.png" alt="Logo Melhor Envio"></img>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns='3' className="secondRow">
            <Grid.Column width='8' className="secondRow-firstColumn">
              <Grid>
                <Grid.Row columns='1' className="secondRow-firstColumn-firstRow">
                  <Grid.Column>2</Grid.Column>
                </Grid.Row>
                <Grid.Row columns='2' className="secondRow-firstColumn-secondRow">
                  <Grid.Column>89</Grid.Column>
                  <Grid.Column>40</Grid.Column>
                </Grid.Row>
                <Grid.Row columns='2' className="secondRow-firstColumn-thirdRow">
                  <Grid.Column>3</Grid.Column>
                  <Grid.Column>4</Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>

            <Grid.Column width='4' className="secondRow-secondColumn">
              <Grid.Row>2</Grid.Row>
              <Grid.Row>6</Grid.Row>
            </Grid.Column>

            <Grid.Column width='4' className="secondRow-thirdColumn">7</Grid.Column>
          </Grid.Row>

          <Grid.Row columns='1' className="thirdRow">
            <Grid.Column>8</Grid.Column>
          </Grid.Row>

          <Grid.Row columns='1' className="fourthRow">
            <Grid.Column>
              {/*<Barcode
                {...this.barcodeOptions}
              /> */}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }

}

export default PostTagME;