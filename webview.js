module.exports = (Franz) => {
    function getMessages() {
      const numMessages = parseInt(document.querySelector('.left-nav [data-content="Inbox"] .unread__container .unread').innerHTML.trim());
      if (numMessages >= 0) {  
        Franz.setBadge(numMessages, 0);
      } else {
          Franz.setBadge(0, 0);
      }
    }
  
    Franz.loop(getMessages);
  }