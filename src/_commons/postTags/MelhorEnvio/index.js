import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react'
import Barcode from 'react-barcode';
import './postTagME.scss';

class PostTagME extends Component {

  fourthBarcodeOptions = {
    width: 1.7,
    height: 30,
    format: "CODE128",
    displayValue: false,
    fontOptions: "",
    font: "monospace",
    textAlign: "center",
    textPosition: "bottom",
    textMargin: 2,
    fontSize: 10,
    background: "#ffffff",
    lineColor: "#000000",
    margin: 10,
    marginTop: undefined,
    marginBottom: undefined,
    marginLeft: undefined,
    marginRight: undefined
  }

  thirdBarcodeOptions = {
    width: 2.5,
    height: 60,
    format: "CODE128",
    displayValue: false,
    fontOptions: "",
    font: "monospace",
    textAlign: "center",
    textPosition: "bottom",
    textMargin: 2,
    fontSize: 10,
    background: "#ffffff",
    lineColor: "#000000",
    margin: 10,
    marginTop: undefined,
    marginBottom: undefined,
    marginLeft: undefined,
    marginRight: undefined
  }

  verticalBarcodeOptions = {
    width: 1.1,
    height: 60,
    format: "CODE128",
    displayValue: false,
    fontOptions: "",
    font: "monospace",
    textAlign: "center",
    textPosition: "bottom",
    textMargin: 2,
    fontSize: 10,
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
      <div className='postTagMe-container'>
        <Grid>
          <Grid.Row columns='1' className="firstRow">
            <Grid.Column>
              <img src="https://ajrepositorio.s3.amazonaws.com/images/jadlog.png" alt="Logo Jadlog"></img>
              <img src="https://ajrepositorio.s3.amazonaws.com/images/melhorenvio.png" alt="Logo Melhor Envio"></img>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns='2' className="secondRow">

            <Grid.Column width='12'>
              <Grid>
                <Grid.Row columns='2' className='endereco-destino'>
                  <Grid.Column width='12'>
                    Endereço do dest.<br />
                    Endereço do dest.<br />
                    Endereço do dest.
                  </Grid.Column>
                  <Grid.Column width='4'>
                    Espaço vazio
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row columns='2'>
                  <Grid.Column width='12'>

                    <Grid>
                      <Grid.Row columns='2' style={{ padding: 0 }}>
                        <Grid.Column width='12' className='contato'>
                          Contato/Telefone
                          Contato/Telefone
                          Contato/Telefone
                        </Grid.Column>
                        <Grid.Column width='4' className="pacotes">
                          Pacotes
                        </Grid.Column>
                      </Grid.Row>

                      <Grid.Row columns='2' style={{ paddingTop: 0 }}>
                        <Grid.Column width='12' className='nf'>
                          NF<br/>
                          NF<br/>
                          9248<br/>
                        </Grid.Column>
                        <Grid.Column textAlign="center" width='4' className='package'>
                          <div>1</div>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>

                  </Grid.Column>
                  <Grid.Column width='2' className='remetente'>
                    <div>
                      Remetente na vertical
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>

            <Grid.Column width='1' className="barcode-vertical">
              <Barcode
                {...this.verticalBarcodeOptions}
                value={'000000000000000000'}
             />
            </Grid.Column>

          </Grid.Row>

          <Grid.Row columns='1' className="thirdRow">
            <Grid.Column>
              <p className="package">Package</p>
              <div>
                <div className="div-TrackAndSpan">
                  <p className="track">Track</p>
                  <span>1</span>
                </div>
                <h3 className="title-MelhorEnvio">MELHOR ENVIO</h3>
              </div>
              <Barcode
                {...this.thirdBarcodeOptions}
                value={'000000000000000000'}
              />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns='1' className="fourthRow">
            <Grid.Column>
              <Barcode
                {...this.fourthBarcodeOptions}
                value={'000000000000000000'}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }

}

export default PostTagME;