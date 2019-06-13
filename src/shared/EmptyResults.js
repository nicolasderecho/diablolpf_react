import React from 'react';
import {Content, Title} from 'tenpines-bulma-react';

const EmptyResults = () => {
    return <Content style={{textAlign: 'center', marginTop: '45px'}}>
        <Title style={{color: 'white'}}>No se encontraron resultados.</Title>
    </Content>
}

export default EmptyResults;