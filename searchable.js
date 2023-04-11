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
  
      let objectStore = db.createObjectStore('teachers', { keyPath: 'subject' });
      objectStore.createIndex('name', 'name', { unique: false });
  
      let objectStore2 = db.createObjectStore2('teachers', { keyPath: 'id' });
      objectStore2.createIndex('name', 'name', { unique: false });

      let objectStore3 = db.createObjectStore3('teachers', { keyPath: 'city' });
      objectStore3.createIndex('name', 'name', { unique: false });

      // Add teacher data to object store
      for (let i = 0; i < teacherData.length; i++) {
        objectStore.add(teacherData[i]);
      }

       // Add teacher data to object store
       for (let i = 0; i < teacherData.length; i++) {
        objectStore2.add(teacherData[i]);
      }

       // Add teacher data to object store
       for (let i = 0; i < teacherData.length; i++) {
        objectStore3.add(teacherData[i]);
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
      let range = IDBKeyRange.bound(searchValue, searchValue + '\uffff', false, false);
    
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
      
            if (teacher.subject.toLowerCase().includes(searchValue)) {
                matches.push(teacher);
                    
            }

            if (teacher.name.toLowerCase().includes(searchValue)) {
                matches.push(teacher);
              }

              if (teacher.city.toLowerCase().includes(searchValue)) {
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
    { id: '5', name: 'Tom Davis', city: 'Atlanta', subject: 'Art' },
    { id: '6', name: 'Emily Wilson', city: 'Seattle', subject: 'Biology' },
    { id: '7', name: 'James Lee', city: 'San Francisco', subject: 'Chemistry' },
    { id: '8', name: 'Hannah Kim', city: 'Dallas', subject: 'Spanish' },
    { id: '9', name: 'Oliver Lee', city: 'Miami', subject: 'Physics' },
    { id: '10', name: 'Sarah Lee', city: 'Boston', subject: 'French' },
    { id: '11', name: 'David Lee', city: 'Houston', subject: 'Social Studies' },
    { id: '12', name: 'Rachel Kim', city: 'New York', subject: 'Music' },
    { id: '13', name: 'Michael Park', city: 'Los Angeles', subject: 'Drama' },
    { id: '14', name: 'Julia Lee', city: 'Chicago', subject: 'Computer Science' },
    { id: '15', name: 'Ethan Kim', city: 'Houston', subject: 'Economics' },
    { id: '16', name: 'Isabella Lee', city: 'Miami', subject: 'Health' },
    { id: '17', name: 'Lucas Park', city: 'Seattle', subject: 'Geography' },
    { id: '18', name: 'Natalie Kim', city: 'San Francisco', subject: 'Physical Education' },
    { id: '19', name: 'Andrew Lee', city: 'Dallas', subject: 'Literature' },
    { id: '20', name: 'Ava Kim', city: 'Boston', subject: 'Language Arts' },
    { id: '21', name: 'Ryan Lee', city: 'New York', subject: 'Psychology' },
    { id: '22', name: 'Grace Kim', city: 'Los Angeles', subject: 'Sociology' },
    { id: '23', name: 'Elijah Lee', city: 'Chicago', subject: 'Anthropology' },
    { id: '24', name: 'Victoria Park', city: 'Houston', subject: 'Political Science' },
    { id: '25', name: 'Matthew Kim', city: 'Miami', subject: 'Environmental Science' },
    { id: '26', name: 'Sophia Lee', city: 'Seattle', subject: 'Journalism' },
    { id: '27', name: 'Benjamin Park', city: 'San Francisco', subject: 'Engineering' },
    { id: '28', name: 'Chloe Kim', city: 'Dallas', subject: 'Graphic Design' },
    { id: '29', name: 'Christopher Lee', city: 'Boston', subject: 'Marketing' },
    { id: '30', name: 'Sarah Jones', city: 'London', subject: 'Math' },
{ id: '31', name: 'David Wilson', city: 'Manchester', subject: 'Math' },
{ id: '32', name: 'Emma Clarke', city: 'Bristol', subject: 'Math' },
{ id: '33', name: 'John Parker', city: 'Glasgow', subject: 'Math' },
{ id: '34', name: 'Alice Green', city: 'Oxford', subject: 'Math' },
{ id: '35', name: 'Robert Turner', city: 'Newcastle', subject: 'Math' },
{ id: '36', name: 'Lucy Watson', city: 'Birmingham', subject: 'Math' },
{ id: '37', name: 'Matthew Smith', city: 'Leeds', subject: 'Math' },
{ id: '38', name: 'Rebecca Foster', city: 'Cambridge', subject: 'Math' },
{ id: '39', name: 'William Brown', city: 'Liverpool', subject: 'Math' },
{ id: '40', name: 'Emily Cooper', city: 'Nottingham', subject: 'Math' },
{ id: '41', name: 'Oliver Young', city: 'Edinburgh', subject: 'Math' },
{ id: '42', name: 'Sophie Hall', city: 'Cardiff', subject: 'Math' },
{ id: '43', name: 'James Lee', city: 'Belfast', subject: 'Math' },
{ id: '44', name: 'Ella Wright', city: 'Southampton', subject: 'Math' },
{ id: '45', name: 'Adam Cooper', city: 'Brighton', subject: 'Math' },
{ id: '46', name: 'Charlotte Clark', city: 'Leicester', subject: 'Math' },
{ id: '47', name: 'Michael Harris', city: 'Bath', subject: 'Math' },
{ id: '48', name: 'Grace Brown', city: 'Sheffield', subject: 'Math' },
{ id: '49', name: 'Benjamin Turner', city: 'Reading', subject: 'Math' },
{ id: '50', name: 'Lucas Mitchell', city: 'Newport', subject: 'Math' },
{ id: '51', name: 'Chloe Davis', city: 'Plymouth', subject: 'Math' },
{ id: '52', name: 'George Baker', city: 'York', subject: 'Math' },
{ id: '53', name: 'Mia Taylor', city: 'Aberdeen', subject: 'Math' },
{ id: '54', name: 'Nicholas Clark', city: 'Exeter', subject: 'Math' },
{ id: '55', name: 'Jessica Jones', city: 'Durham', subject: 'Math' },
{ id: '56', name: 'Daniel Wilson', city: 'Norwich', subject: 'Math' },
{ id: '57', name: 'Lily Green', city: 'Coventry', subject: 'Math' },
{ id: '58', name: 'John Smith', city: 'Aberdeen', subject: 'Math' },
{ id: '59', name: 'Sarah Johnson', city: 'Aberdeen', subject: 'English' },
{ id: '60', name: 'David Brown', city: 'Aberdeen', subject: 'Physics' },
{ id: '61', name: 'Emma Wilson', city: 'Aberdeen', subject: 'Chemistry' },
{ id: '62', name: 'William Taylor', city: 'Aberdeen', subject: 'Math' },
{ id: '63', name: 'Sophie Anderson', city: 'Aberdeen', subject: 'English' },
{ id: '64', name: 'Andrew Ross', city: 'Aberdeen', subject: 'Physics' },
{ id: '65', name: 'Olivia Martin', city: 'Aberdeen', subject: 'Chemistry' },
{ id: '66', name: 'Thomas Miller', city: 'Aberdeen', subject: 'Math' },
{ id: '67', name: 'Isabella Wright', city: 'Aberdeen', subject: 'English' },
{ id: '68', name: 'Robert Young', city: 'Aberdeen', subject: 'Physics' },
{ id: '69', name: 'Ella Mitchell', city: 'Aberdeen', subject: 'Chemistry' },
{ id: '70', name: 'James Clark', city: 'Aberdeen', subject: 'Math' },
{ id: '71', name: 'Grace Turner', city: 'Aberdeen', subject: 'English' },
{ id: '72', name: 'Michael Scott', city: 'Aberdeen', subject: 'Physics' },
{ id: '73', name: 'Chloe Watson', city: 'Aberdeen', subject: 'Chemistry' },
{ id: '74', name: 'Richard Campbell', city: 'Aberdeen', subject: 'Math' },
{ id: '75', name: 'Lucy Bailey', city: 'Aberdeen', subject: 'English' },
{ id: '76', name: 'Daniel Phillips', city: 'Aberdeen', subject: 'Physics' },
{ id: '77', name: 'Mia Edwards', city: 'Aberdeen', subject: 'Chemistry' },
{ id: '78', name: 'Anthony Turner', city: 'Aberdeen', subject: 'Math' },
{ id: '79', name: 'Emily White', city: 'Aberdeen', subject: 'English' },
{ id: '80', name: 'Simon Cox', city: 'Aberdeen', subject: 'Physics' },
{ id: '81', name: 'Lily Hill', city: 'Aberdeen', subject: 'Chemistry' },
{ id: '82', name: 'Matthew Gray', city: 'Aberdeen', subject: 'Math' },
{ id: '83', name: 'Amelia Reed', city: 'Aberdeen', subject: 'English' },
{ id: '84', name: 'Peter Fraser', city: 'Aberdeen', subject: 'Physics' },
{ id: '85', name: 'Jessica Murray', city: 'Aberdeen', subject: 'Chemistry' },
{ id: '86', name: 'George Bell', city: 'Aberdeen', subject: 'Art' }

  ];
  