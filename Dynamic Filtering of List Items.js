const data = {
    fruits: ['Apple', 'Banana', 'Cherry'],
    vegetables: ['Carrot', 'Broccoli', 'Lettuce'],
    dairy: ['Milk', 'Cheese', 'Yogurt']
  };
  
  const categories = document.getElementById('categories');
  const items = document.getElementById('items');
  
  categories.addEventListener('click', function(event) {
    const category = event.target.getAttribute('data-category');
    if (category && data[category]) {
      items.innerHTML = ''; 
      data[category].forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        itemDiv.textContent = item;
        items.appendChild(itemDiv);
      });
    }
  });
  