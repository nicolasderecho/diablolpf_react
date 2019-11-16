import React from 'react';
import {Title, Columns, Column, Table, Subtitle, Image} from 'tenpines-bulma-react';
import { Sets, imageUrl } from '../../shared/information/data';
import { requirementName, requirementKeysFor, characterName } from '../../shared/information/data';

const setBonifications = (bonifications) => <Column className='set-bonuses'>
  <Subtitle sizeNumber='6' className='is-bold dark-brown-text'>Bonificaciones Totales</Subtitle>
  { bonifications.length > 0 
    ? bonifications.map( (bonification, index) => <span key={index} className='brown-text is-heavy'>{bonification}</span> )
    : <span className='brown-text is-heavy'>Ninguna</span> 
  }									
</Column>

const SetTable = ({ setId }) => {
  const set = Sets.find(aSet => aSet.id === setId);

  if(!set) { return <div className='set-select-label'>Elegí un Set</div> }

  return <React.Fragment>
    <div className='title-wrapper'>
      <Title as='span' className='white-text' >{set.name}</Title>
    </div>
    <div className={'table-container'} style={{padding: '1em'}}>
      <Table bordered striped className={'diablo-table'}>
        <Table.Head>
          <Table.Row>
            <Table.CellHeader className={'diablo-table-item item-column'}>Item</Table.CellHeader>
            <Table.CellHeader className={'diablo-table-item specifications-column'}>Especificaciones</Table.CellHeader>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          { set.items.map( item => <Table.Row key={item.name}>
            <Table.Cell className={'diablo-table-item item-column'} >
              <Columns from={'mobile'} multiline>
                <Column>
                  <div className='flex-column'>
                    <span className='orange-text'>{item.labelName}</span>
                    <Image src={imageUrl(item.image)} className='item-image' />
                    <span className='green-text is-bold'>{item.name}</span>
                    <span className='green-text is-bold'>{item.originalName}</span>
                    { item.isCharacterItem 
                        ? <span className='gold-text is-heavy'>Solo para {characterName(set.character)}</span>
                        : null
                    }
                  </div>
                </Column>
              </Columns>
            </Table.Cell>
            <Table.Cell className={'diablo-table-item specifications-column'} >
              <div className='flex-column flex-align-start'>
                { requirementKeysFor(Object.keys(item.requirements)).map( (key, index) => <span key={index}>
                  { requirementName(key) }: { item.requirements[key] }
                </span> )}
              </div>
              <div className='blue-text flex-column flex-align-start'>{item.attributes.map( (attribute, index) => <span key={index}>{attribute}</span>)}</div>
              <div className='green-text flex-column flex-align-start'>{(item.setAttributes || []).map( (attribute, index) => <span key={index}>{attribute}</span>)}</div>
            </Table.Cell>
          </Table.Row>)}
          <Table.Row>
            <Table.Cell colSpan={2} className='bonuses-container'>
              <Columns multiline>
                { setBonifications(set.partialBonuses) }
                { setBonifications(set.completeBonuses) }
              </Columns>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  </React.Fragment>
}

export default SetTable;