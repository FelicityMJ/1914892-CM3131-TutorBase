document.addEventListener('DOMContentLoaded', function() {
  const searchForm = document.querySelector('#search-form');
  const searchInput = document.querySelector('#search-input');
  const teachersList = document.querySelector('#teachers-list');

  let db;

  const request = window.indexedDB.open('teachersDB', 1);

  request.onerror = function() {
    console.log('Database failed to open');
  };

  request.onsuccess = function() {
    console.log('Database opened successfully');

    db = request.result;

    displayData();
  };

  request.onupgradeneeded = function(e) {
    let db = e.target.result;

    let objectStore = db.createObjectStore('teachers', { keyPath: 'id' });
    objectStore.createIndex('name', 'name', { unique: false });

    // Add teacher data to object store
    for (let i = 0; i < teacherData.length; i++) {
      objectStore.add(teacherData[i]);
    }

    console.log('Database setup complete');
  };

  searchForm.addEventListener('submit', search);

  function search(e) {
    e.preventDefault();
    
    // Clear previous results
    teachersList.innerHTML = '';
    
    let transaction = db.transaction(['teachers'], 'readonly');
    let objectStore = transaction.objectStore('teachers');
    let index = objectStore.index('name');
    
    let searchValue = searchInput.value.toLowerCase();
    let range = IDBKeyRange.bound(searchValue, searchValue + '\uffff');
  
    let matches = [];
  
    index.openCursor(range).onsuccess = function(e) {
      let cursor = e.target.result;
    
      if (cursor) {
        const teacher = cursor.value;
    
        matches.push(teacher);
  
        cursor.continue();
      }
      else {
        // Search teacherData array
        for (let i = 0; i < teacherData.length; i++) {
          const teacher = teacherData[i];
    
          if (teacher.name.toLowerCase().includes(searchValue)) {
            matches.push(teacher);
          }
        }
  
        if (matches.length > 0) {
          for (let i = 0; i < matches.length; i++) {
            const teacher = matches[i];
  
            // Add teacher to list
            const listItem = document.createElement('ion-item');
            listItem.textContent = teacher.name + ' - ' + teacher.city + ' - ' + teacher.subject;
      
            teachersList.appendChild(listItem);
          }
        }
        else {
          console.log('No matches found');
        }
      }
    };
  }
  
  

  function displayData() {
    teachersList.innerHTML = '';

    let objectStore = db.transaction('teachers').objectStore('teachers');

    objectStore.openCursor().onsuccess = function(e) {
      let cursor = e.target.result;

      if (cursor) {
        const teacher = cursor.value;

        // Add teacher to list
        const listItem = document.createElement('ion-item');
        listItem.textContent = teacher.name + ' - ' + teacher.city + ' - ' + teacher.subject;

        teachersList.appendChild(listItem);

        cursor.continue();
      }
    };
  }
});

const teacherData = [
  { id: '1', name: 'John Doe', city: 'New York', subject: 'Math' },
  { id: '2', name: 'Jane Smith', city: 'Los Angeles', subject: 'English' },
  { id: '3', name: 'Bob Johnson', city: 'Chicago', subject: 'Science' },
  { id: '4', name: 'Alice Brown', city: 'Houston', subject: 'History' },
  { id: '5', name: 'Tom Davis', city: 'Atlanta', subject: 'Art' }
];
