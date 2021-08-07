// send the page title as a chrome message
var browser = browser || chrome
var getParticipants = function(){
  let names = []
  for(let index=0;index<document.getElementsByClassName('GvcuGe')[0].children.length;index++){
    names.push(document.getElementsByClassName('GvcuGe')[0].children[index].innerText)
  }
  console.log(names.join('\n'));
  return names.join('\n')

}
browser.runtime.sendMessage(getParticipants());