import React from 'react';
import {Title, Content, Columns, Column} from 'tenpines-bulma-react';

const NotFoundPage = (props) => {
    return <div className={'page-container'}>
        <Columns>
            <Column>
                <Content>
                    <Title className={'not-found-message'}>Página No encontrada</Title>
                </Content>            
            </Column>
        </Columns>
    </div>;
}

export default NotFoundPage;