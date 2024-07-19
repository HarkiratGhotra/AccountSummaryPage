import React, { useContext } from 'react';
import { Context } from '../../Context/Context';
import { prefDocuments } from '../../../static/mockData';
import Table from '../Table/Table';


const DocumentPreference = () => {
  const { updateAccount } = useContext(Context);
  const updatedTable = prefDocuments.filter(docs => docs.account_key === updateAccount.value);

  return (
    <>
      <Table data={updatedTable[0]?.docs} />
    </>
  );
};

export default DocumentPreference;
