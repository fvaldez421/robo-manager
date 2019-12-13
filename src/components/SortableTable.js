import React from 'react';
import styled from 'styled-components';
import { FlexContainer, FlexItem } from './StyleHelpers';


const TableWrapper = styled.div`
`;
const TableRowContainer = styled(FlexContainer)`
  > div:nth-of-type(1) {
    flex-grow: 4;
    flex-shrink: 7;
    flex-basis: 0;
  }
  > div:nth-of-type(2) {
    flex-grow: 3;
    flex-shrink: 8;
    flex-basis: 0;
  }
  > div:nth-of-type(3) {
    flex-grow: 3;
    flex-shrink: 8;
    flex-basis: 0;
  }
  > div:nth-of-type(4) {
    flex-grow: 3;
    flex-shrink: 8;
    flex-basis: 0;
  }
`;
const RowItem = styled(FlexItem)`

`;
const TableHeader = styled(TableRowContainer)`
`;

const TableRow = props => {
  return (
    <TableRowContainer>
      
    </TableRowContainer>
  )
}


const SortableTable = props => {
  const { status='initial', robots=[] } = props;
  console.log(props)
  return (
    <TableWrapper>
      <TableHeader dir='row'>
        <RowItem>
        </RowItem>
      </TableHeader>
      {status == 'initial' ?
        'loading'
        :
        robots.length ?
          robots.map(robot => (
            <TableRow {...robot} />
          ))
          :
          'no robots found'
      }
    </TableWrapper>
  )
}


export default SortableTable;
