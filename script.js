// Get the list and create an array of initial list items
const list = document.getElementById('infi-list');
const initialListItems = Array.from(list.children);

// Function to add new list items
function addMoreListItems() {
  // Number of list items to add
  const numberOfItemsToAdd = 2;

  for (let i = 0; i < numberOfItemsToAdd; i++) {
    const newItem = document.createElement('li');
    newItem.textContent = 'New Item';
    list.appendChild(newItem);
  }
}

// Function to check if the user has reached the end of the list
function checkEndOfList() {
  const listRect = list.getBoundingClientRect();
  const lastItemRect = list.lastElementChild.getBoundingClientRect();

  if (lastItemRect.bottom <= listRect.bottom) {
    addMoreListItems();
  }
}

// Event listener for scrolling
window.addEventListener('scroll', checkEndOfList);

// Add initial list items
initialListItems.forEach(item => {
  list.appendChild(item);
});

// Add extra list items to fill the initial view
addMoreListItems();
