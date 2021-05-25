const send = require('gmail-send')({});
//google hesabindan az guvenilir app ler icin izin ver aktiflestirmen lazim
//settings > security de
const options = {
  user: 'mustafa.erdogan.comerd@gmail.com',  // gmail user
  pass: 'comerd-tech'   // gmail password
};

const sendEmail = async function(person){
  try {
    options.to = 'hamide.bay79@gmail.com';
    options.subject = 'yeni talep';
    options.text = `${person.username},\n\n
    ${person.messageText}\n
    
    ${person.firma}\n
    ${person.telefon}\n
    ${person.email}\n\n
    ${person.address.street}\n
    ${person.address.postalCode}\n`;
    const {result,full} = await send(options);
    console.log(result);
  } catch(error) {
    console.error('ERROR', error);
  }
}

exports.sendEmail = sendEmail;