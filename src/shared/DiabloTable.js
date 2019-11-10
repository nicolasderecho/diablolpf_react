import React from 'react';
import {Table, Content, Title} from 'tenpines-bulma-react';
import EmptyResults from './EmptyResults';

const DiabloTable = ({items, headers, renderRow, className}) => {
    if(items.length === 0 ) { return <EmptyResults /> }
    const classes = `diablo-table ${className}`.trim();
    return <React.Fragment>
        <Title as='span' style={{color: 'white', margin: '1em', marginLeft: '0.5em'}}>{items.length} { items.length > 1 ? 'Resultados' : 'Resultado' } </Title>
        <Content className={'table-container'} style={{padding: '1em'}}>
            <Table bordered striped className={classes}>
                <Table.Head>
                    <Table.Row>
                        { headers.map( (header, key) => <Table.CellHeader key={key} className={'diablo-table-item'}>{header}</Table.CellHeader>) }
                    </Table.Row>
                </Table.Head>
                <Table.Body>
                    { items.map(renderRow) }
                </Table.Body>
            </Table>
        </Content>
    </React.Fragment>
};

export default DiabloTable;