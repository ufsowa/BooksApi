module.exports = (fullName) => {
  console.log('1: ', fullName);
  if(typeof fullName !== 'string') return 'Error';
  const [ firstName, lastName, ...rest ] = fullName.split(' ');
  console.log('2: ', firstName, lastName, rest);
  if(rest.length > 0) return 'Error';
  console.log('3: ', firstName, lastName);
  if(!firstName || !lastName) return 'Error';
  console.log('4: ', firstName, lastName);
  return firstName[0].toUpperCase() + firstName.slice(1).toLowerCase() + ' ' + lastName[0].toUpperCase() + lastName.slice(1).toLowerCase() ;
};
