const getLabel = (account) => {
    if(!account.typeDesc){
        const updateId = account.id.replace(/^(\d{3})/, '$1-');
        return `${account.description} ${updateId}`;
    }

    return `${account.description} ${account.id} ${account.typeDesc}`;

}
export const transformedData = (accounts) => {
    console.log(accounts, 'accounts');
    return accounts.map((account) => ({
      value: account.key,
      label: getLabel(account)
    }));
}