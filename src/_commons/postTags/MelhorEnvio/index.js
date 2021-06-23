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
                    Endereço do dest.<br/>
                    Endereço do dest.<br/>
                    Endereço do dest.
                  </Grid.Column>
                  <Grid.Column width='4'>
                    Espaço vazio
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row columns='2'>
                  <Grid.Column width='12'>

                    <Grid>
                      <Grid.Row columns='2'>
                        <Grid.Column width='12' className='contato'>
                          Contato/Telefone
                          Contato/Telefone
                          Contato/Telefone
                        </Grid.Column>
                        <Grid.Column width='4'>
                          Pacotes
                        </Grid.Column>
                      </Grid.Row>

                      <Grid.Row columns='2'>
                        <Grid.Column width='12' className='nf'>
                          NF
                        </Grid.Column>
                        <Grid.Column width='4'>
                          1
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>

                  </Grid.Column>
                  <Grid.Column width='2' className='remetente'>
                    Remetente na vertical
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>

            <Grid.Column width='1' className="barcode-vertical">
              Barcode na vertical
            </Grid.Column>

          </Grid.Row>

          <Grid.Row columns='1' className="thirdRow">
            <Grid.Column>
              3ª
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns='1' className="fourthRow">
            <Grid.Column>
              <Barcode
                {...this.barcodeOptions}
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