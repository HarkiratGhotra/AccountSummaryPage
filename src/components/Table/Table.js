import React from 'react';
import { StyledTable } from './Table.styles';

const Table = ({data}) => {
    console.log(data, 'dataaa')
    if(data) {
        return <TableMarkup titles={Object.keys(data[0])} data={data} />;
    }
    return ''
}

const getByTitle = (title) => {
    if(title === 'document_type') {
        return 'Document Type'
    }
    if(title === 'is_paper_flag') {
        return 'Document Method'
    }
}

const getItem = (item, title) => {
  if(title === 'is_paper_flag') {
    console.log(item, 'item')
    if (item.is_paper_flag) {
      return 'Paper';
    }
    return 'PaperLess';
  }
  return item[title]
};
const TableMarkup = ({ titles, data }) => {
    console.log(titles, data)
   return (
   
  <StyledTable>
    <colgroup>
      <col />
      <col />
      <col />
    </colgroup>
    <thead>
      <tr>
        {titles.map((title, index) => (
          <th key={index}>{getByTitle(title)}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => {
        return (
        <tr key={index}>
          {titles.map((title, index) => {
          return <td key={index}>{getItem(item, title)}</td>;})}
        </tr>
      )})}
    </tbody>
  </StyledTable>
)};

export default Table;
