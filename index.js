// from https://developers.trello.com/get-started/start-building

<script src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
<script src="https://api.trello.com/1/client.js?key=cabb272f59fa7b13d813ba3c8054a42d"></script>

var authenticationSuccess = function() { console.log('Successful authentication'); };
var authenticationFailure = function() { console.log('Failed authentication'); };

Trello.authorize({
  type: 'popup',
  name: 'Getting Started Application',
  scope: {
    read: 'true',
    write: 'true' },
  expiration: 'never',
  success: authenticationSuccess,
  error: authenticationFailure
});

var myList = 585a49d64837028f91aa3712';
var creationSuccess = function(data) {
  console.log('Card created successfully. Data returned:' + JSON.stringify(data));
};
var newCard = {
  name: 'New Test Card',
  desc: 'This is the description of our new card.',
  // Place this card at the top of our list
  idList: myList,
  pos: 'top'
};
Trello.post('/cards/', newCard, creationSuccess);

Trello.put('/cards/[ID]', {name: 'New Test Card'});
