import React, {useState} from  'react';
import {Table} from 'tenpines-bulma-react';

function tcColor(tcNumber) {
    if(tcNumber >= 60 && tcNumber <= 70) {
        return "blue-text font-bold"
    }
    if(tcNumber > 70 && tcNumber < 85) {
        return "orange-text font-bold"
    }
    if(tcNumber >= 85) {
        return "yellow-text font-bold"
    }
    return ""
}

const ActAreas = ({actData, title, className, startOpened=false}) => {
    const [isOpened, setIsOpened] = useState(startOpened)
    const classes = `collapsible-component ${className || ''}`.trim();

    const toggleCollapsible = () => setIsOpened(!isOpened)
    return <div className={classes}>
        <div className="collapsible-trigger" onClick={toggleCollapsible}>
            <span>{title}</span>
            {
                isOpened 
                    ? <span>-</span>
                    : <span>+</span>
            }
        </div>
        <div className={`collapsible-content ${isOpened ? 'open' : ''}`}>
            <Table bordered striped className={'diablo-table'}>
                <Table.Head>
                    <Table.Row>
                        <Table.CellHeader className={'diablo-table-item'}>Area</Table.CellHeader>
                        <Table.CellHeader className={'diablo-table-item'}>Normal</Table.CellHeader>
                        <Table.CellHeader className={'diablo-table-item'}>Pesadilla</Table.CellHeader>
                        <Table.CellHeader className={'diablo-table-item'}>Infierno</Table.CellHeader>
                    </Table.Row>
                </Table.Head>
                <Table.Body>
                    { 
                        actData.map(row => <Table.Row key={row.name + row.originalName}>
                            <Table.Cell className={'diablo-table-item'} >{row.name}</Table.Cell>
                            <Table.Cell className={`diablo-table-item ${tcColor(row.normalTc)}`} >{row.normalTc}</Table.Cell>
                            <Table.Cell className={`diablo-table-item ${tcColor(row.nightmareTc)}`} >{row.nightmareTc}</Table.Cell>
                            <Table.Cell className={`diablo-table-item ${tcColor(row.hellTc)}`} >{row.hellTc}</Table.Cell>
                        </Table.Row> ) 
                    }
                </Table.Body>
            </Table>
        </div>
    </div>;
}

export default ActAreas;