window.addEventListener("load", solve);

function solve() {

  let sendInfoButton = document.querySelector('#right form button');
  sendInfoButton.addEventListener('click', sendInfo);
 let productType = document.querySelector('#type-product')
 let descriptionText = document.querySelector('#description')
 let clientNameElement = document.querySelector('#client-name')
 let clientPhoneElement = document.querySelector('#client-phone')

 let receicedOrders = document.querySelector('#received-orders')
 let completeOrders = document.querySelector('#completed-orders')
 
 let clearBtn = document.querySelector('#completed-orders button')
 clearBtn.addEventListener('click', clearOrders)
 function sendInfo(event) {
   event.preventDefault();
   
   const product = productType.value
   const description = descriptionText.value;
   const clientName = clientNameElement.value;
   const clientPhone = clientPhoneElement.value;
   
   if (description == '' || clientName == '' || clientPhone == '') {
     return;
    }
    
    productType.value = ''
    descriptionText.value = ''
    clientName.value = ''
    clientPhone.value = ''
    
    let containerDiv = document.createElement('div');
    containerDiv.classList.add('container')
    
    let h2element = document.createElement('h2')
    h2element.textContent = `Product type for repair: ${productType}`
    
    let h3element = document.createElement('h3')
    h3element.textContent = `Client information: ${clientName} ${clientPhone}`
    
    let h4element = document.createElement('h4')
    h4element.textContent = `description of the problem: ${description}`
    
    
    let startBtn = document.createElement('button')
    startBtn.classList.add('start-btn')
    startBtn.textContent = 'Start Repair'
    
    let finishBtn = document.createElement('button')
    finishBtn.classList.add('finish-btn')
    finishBtn.textContent = 'Finish Repair'
    finishBtn.disabled = true;
    
    startBtn.addEventListener('click', startRepair)
    finishBtn.addEventListener('click', finishRepair)
    
    containerDiv.appendChild(h2element)
    containerDiv.appendChild(h3element)
    containerDiv.appendChild(h4element)
    containerDiv.appendChild(startBtn)
    containerDiv.appendChild(finishBtn)
    
    receicedOrders.appendChild(containerDiv)
 
    
    function startRepair(event) {
      event.currentTarget.disabled = true

      event.currentTarget.parentNode.querySelector('.finish-btn').disabled = false;
      
      
    }
    function finishRepair(event) {
      let containerDiv = event.currentTarget.parentNode;
      //remove 2 buttons
      event.currentTarget.remove()
      containerDiv.querySelector('.start-btn').remove()

      containerDiv.remove()
      completeOrders.appendChild(containerDiv)

      
    }
  }
  function clearOrders(event) {
    let allContainers = Array.from(event.currentTarget.parentNode.querySelectorAll('.container'))

    for(const container of allContainers) {
      container.remove()
    }

  }
};
