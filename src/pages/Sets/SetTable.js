import React from 'react';
import {Title, Columns, Column, Table, Subtitle, Image} from 'tenpines-bulma-react';
import { Sets } from '../../shared/information/data';
import { requirementName, requirementKeysFor } from '../../shared/information/data';

const SetTable = ({ setId }) => {
  const set = Sets.find(aSet => aSet.id === setId);

  if(!set) { return <div className='set-select-label'>Elegí un Set</div> }

  return <React.Fragment>
    <Title as='span' style={{color: 'white', margin: '1em', marginLeft: '0.5em'}}>{set.name}</Title>
    <div className={'table-container'} style={{padding: '1em'}}>
      <Table bordered striped className={'diablo-table'}>
        <Table.Head>
          <Table.Row>
            <Table.CellHeader className={'diablo-table-item item-column'}>Item</Table.CellHeader>
            <Table.CellHeader className={'diablo-table-item'}>Especificaciones</Table.CellHeader>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          { set.items.map( item => <Table.Row key={item.name}>
            <Table.Cell className={'diablo-table-item item-column'} >
              <Columns from={'mobile'} multiline>
                <Column>
                  <div className='flex-column'>
                    <span className='orange-text'>{item.labelName}</span>
                    <Image src={item.image} className='item-image' />
                    <span className='green-text is-bold'>{item.name}</span>
                    <span className='green-text is-bold'>{item.originalName}</span>
                  </div>
                </Column>
              </Columns>
            </Table.Cell>
            <Table.Cell className={'diablo-table-item'} >
              <div className='flex-column flex-align-start'>
                { requirementKeysFor(Object.keys(item.requirements)).map( (key, index) => <span key={index}>
                  { requirementName(key) }: { item.requirements[key] }
                </span> )}
              </div>
              <div className='blue-text flex-column flex-align-start'>{item.attributes.map(attribute => <span>{attribute}</span>)}</div>
              <div className='green-text flex-column flex-align-start'>{(item.setAttributes || []).map(attribute => <span>{attribute}</span>)}</div>
            </Table.Cell>
          </Table.Row>)}
          <Table.Cell colspan='2' className='bonuses-container'>
            <Columns multiline>
              <Column className='set-bonuses'>
                <Subtitle sizeNumber='6' className='is-bold dark-brown-text' >Bonificaciones Parciales</Subtitle>
                { set.partialBonuses.length > 0 
                  ? set.partialBonuses.map( bonus => <span className='brown-text is-heavy'>{bonus}</span> )
                  : <span className='brown-text is-heavy'>Ninguna</span> 
                }
              </Column>
              <Column className='set-bonuses'>
                <Subtitle sizeNumber='6' className='is-bold dark-brown-text'>Bonificaciones Totales</Subtitle>
                  { set.completeBonuses.length > 0 
                    ? set.completeBonuses.map( bonus => <span className='brown-text is-heavy'>{bonus}</span> )
                    : <span className='brown-text is-heavy'>Ninguna</span> 
                  }									
              </Column>
            </Columns>
          </Table.Cell>
        </Table.Body>
      </Table>
    </div>
  </React.Fragment>
}

export default SetTable;