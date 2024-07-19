import React, { useContext, useEffect, useState } from 'react';
import Select from 'react-select';
import { Context } from '../../Context/Context';
import { AccountContainer } from './Account.styles';

const Account = () => {
    const { accountData, updateAccountInfo } = useContext(Context);
    const [selectedOption, setSelectedOption] = useState([])
    useEffect(() => {
      if(accountData.length) {
      const defaultAccount = accountData.find(({ label }) => label === 'Company A 11112345 TFSA');

      setSelectedOption([{ value: defaultAccount.value, label: defaultAccount.label }]);
      updateAccountInfo(defaultAccount);
      }
    }, [accountData]);

    const onChangeAccount = (account) => {
      updateAccountInfo(account);
      setSelectedOption(account);
    }
 
  return (
    <AccountContainer>
      <Select value={selectedOption} onChange={onChangeAccount} options={accountData} />
    </AccountContainer>
  );
};

export default Account;
