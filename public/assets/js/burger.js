// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.querySelectorAll('.isReady').forEach(button => {
    button.addEventListener('click', function (event) {
      const id = this.getAttribute('data-id')
  
      fetch(`/api/burgers/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ colName: "is_ready" }) 
      }).then(response => {
        if (response.ok) location.reload()
        console.log(response)
      })
    })
  })


document.querySelectorAll('.isServed').forEach(button => {
    button.addEventListener('click', function (event) {
      const id = this.getAttribute('data-id')
  
      fetch(`/api/burgers/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ colName: "is_served"}) 
      }).then(response => {
        if (response.ok) location.reload()
        console.log(response)
      })
    })
  })
  
//when the "place an order" btn is clicked, triggers API post request, sending the burger name to database to add in
  document.getElementById('create-form').addEventListener('submit', event => {
    event.preventDefault()
  
    const newBurger = {
      name: document.getElementById('burgername').value.trim(),
    }
  
    fetch(`/api/burgers`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBurger)
    }).then(response => {
      if (response.ok) location.reload();
      console.log(response)
    })
  })
  