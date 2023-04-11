customElements.define('page-one', class extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `



      <ion-menu content-id="main-content">
      <ion-header>
        <ion-toolbar  color="tertiary">
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
      <ion-toolbar  color="light">
      <ion-button class="refresh-button" expand="block" data-url="#/">Home</ion-button>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
            <ion-button class="refresh-button" expand="block" data-url="#/six">Search Tutors</ion-button>
                  </ion-toolbar>
                  <br></br>
      <ion-toolbar  color="light">
      <ion-button class="refresh-button" expand="block" data-url="#/four">Favourites</ion-button>
        </ion-toolbar>    
        <br></br>
        <ion-toolbar  color="light">
        <ion-button class="refresh-button" expand="block" data-url="#/five">Reviews</ion-button>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
            <ion-button class="refresh-button" expand="block" data-url="#/two">Apply to TutorBase</ion-button>
            </ion-toolbar>
            <br></br>
      <ion-toolbar  color="light">
      <ion-button class="refresh-button" expand="block" data-url="#/three">Maths Tutors</ion-button>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>English</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Physics</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Chemistry</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Biology</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>French</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>German</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Spanish</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Computing</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Personal Statement</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Oxbridge Interview Prep</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>11+</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Other</ion-title>
            </ion-toolbar>
      </ion-content>
    </ion-menu>
    <div class="ion-page" id="main-content">
      <ion-header>
        <ion-toolbar  color="primary">
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>TutorBase</ion-title>
        </ion-toolbar>
      </ion-header>

          <ion-content padding>
              <ion-card>
            
                  <ion-card-content>
                      <ion-item>
                          <ion-img id="img-choice" src="./Pictures/grad.jpg"/>
                      </ion-item>
                      <ion-col></ion-col>
                      <div class="ion-text-justify">
                      <h3>TutorBase is a free access database providing open access to a wide range of private tutors online and F2F across the UK. Find private tutors in your area for all levels from primary to University and beyond.</h3>
                      <ion-col></ion-col>
                      <h3>All tutors will need to provide an up to date dbs check</h3>
                      <ion-col></ion-col>
                      <h3>To apply to join the database as a tutor, please apply below</h3>
                      <ion-col></ion-col>
                      </div>
                      </ion-item>
                      <ion-button class="refresh-button" expand="block" data-url="#/two">Apply</ion-button>
                     
                  </ion-card-content>
              </ion-card>
              
              <ion-card>
              <ion-card-content>
              <ion-item>
                  <ion-img id="img-choice" src="./Pictures/5stars.jpg"/>
              </ion-item>
              <ion-col></ion-col>
              <div class="ion-text-justify">
              <h3>TutorBase has been running since 2023 and quickly built up a loyal following. We are 100% transparent with our user reviews and feedback. Why not check out our latest reviews and leave your own feedback.</h3>
              </div>
              <ion-col></ion-col>
              <ion-button class="refresh-button" expand="block" data-url="#/five">Reviews</ion-button>
           
              </ion-item>
             
          </ion-card-content>
      </ion-card>
           
              <ion-card>
              <ion-card-content>
          
            <iframe src="./mapApi.html" width="100%" height="500" frameBorder="0"></iframe>
         
              </ion-card-content>
            </ion-card>



          </ion-content>
      `;

const scriptTag = document.createElement('script');
scriptTag.src = 'buttonRefresh.js';
document.head.appendChild(scriptTag);


  }
});

customElements.define('page-two', class extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `

      
      <ion-menu content-id="main-content">
      <ion-header>
        <ion-toolbar  color="tertiary">
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
      <ion-toolbar  color="light">
      <ion-button class="refresh-button" expand="block" data-url="#/">Home</ion-button>
      </ion-toolbar>
      <br></br>
      <ion-toolbar  color="light">
      <ion-button class="refresh-button" expand="block" data-url="#/six">Search Tutors</ion-button>
            </ion-toolbar>
            <br></br>
<ion-toolbar  color="light">
<ion-button class="refresh-button" expand="block" data-url="#/four">Favourites</ion-button>
  </ion-toolbar>    
  <br></br>
  <ion-toolbar  color="light">
  <ion-button class="refresh-button" expand="block" data-url="#/five">Reviews</ion-button>
      </ion-toolbar>
      <br></br>
      <ion-toolbar  color="light">
      <ion-button class="refresh-button" expand="block" data-url="#/two">Apply to TutorBase</ion-button>
      </ion-toolbar>
      <br></br>
<ion-toolbar  color="light">
<ion-button class="refresh-button" expand="block" data-url="#/three">Maths Tutors</ion-button>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>English</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Physics</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Chemistry</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Biology</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>French</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>German</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Spanish</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Computing</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Personal Statement</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Oxbridge Interview Prep</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>11+</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Other</ion-title>
            </ion-toolbar>
      </ion-content>
    </ion-menu>
    <div class="ion-page" id="main-content">
      <ion-header>
        <ion-toolbar  color="primary">
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
            
          </ion-buttons>
          
          <ion-title>Tutor Application</ion-title>
          
        </ion-toolbar>
       
      </ion-header>
  
      <ion-content fullscreen>
        <form onsubmit="processForm(event)">
          <ion-list lines="full" class="ion-no-margin ion-no-padding">
            <ion-item>
              <ion-label position="stacked">First Name <ion-text color="danger">*</ion-text></ion-label>
              <ion-input required type="text" oninput="handleFirstNameValue(event)"></ion-input>
            </ion-item>
  
            <ion-item>
              <ion-label position="stacked">Last Name <ion-text color="danger">*</ion-text></ion-label>
              <ion-input required type="text" oninput="handleLastNameValue(event)"></ion-input>
            </ion-item>
            
            <ion-item>
              <ion-label position="floating">Mobile Number</ion-label>
              <ion-input></ion-input>
            </ion-item>
  
            <ion-item>
              <ion-label position="floating">Subjects</ion-label>
              <ion-input></ion-input>
            </ion-item>
  
            <ion-item>
              <ion-label position="floating">Tuition Rates</ion-label>
              <ion-input></ion-input>
            </ion-item>
  
            <ion-item>
              <ion-label position="floating">Online or F2F</ion-label>
              <ion-input></ion-input>
            </ion-item>
  
         
  
            <ion-item>
              <ion-label position="stacked">Address</ion-label>
              <ion-input placeholder="Address Line 1"></ion-input>
              <ion-input placeholder="Address Line 2"></ion-input>
              <ion-input placeholder="City"></ion-input>
              <ion-input placeholder="Postcode"></ion-input>
            </ion-item>
  
            <ion-item>
              <ion-label position="stacked">DBS Status</ion-label>
              <ion-textarea></ion-textarea>
            </ion-item>
          </ion-list>
  
          <div class="ion-padding">
            <ion-button expand="block" type="submit" class="ion-no-margin">Apply Now</ion-button>
          </div>
        </form>
      </ion-content>
      <ion-alert-controller></ion-alert-controller>
    
      `;

      const scriptTag = document.createElement('script');
      scriptTag.src = 'buttonRefresh.js';
      document.head.appendChild(scriptTag);

  }
});


//const scriptTag = document.createElement('script');
//scriptTag.src = 'database.js';
//document.head.appendChild(scriptTag);


customElements.define('page-three', class extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `

      <ion-menu content-id="main-content">
      <ion-header>
        <ion-toolbar  color="tertiary">
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
      <ion-toolbar  color="light">
      <ion-button class="refresh-button" expand="block" data-url="#/">Home</ion-button>
      </ion-toolbar>
      <br></br>
      <ion-toolbar  color="light">
      <ion-button class="refresh-button" expand="block" data-url="#/six">Search Tutors</ion-button>
            </ion-toolbar>
            <br></br>
<ion-toolbar  color="light">
<ion-button class="refresh-button" expand="block" data-url="#/four">Favourites</ion-button>
  </ion-toolbar>    
  <br></br>
  <ion-toolbar  color="light">
  <ion-button class="refresh-button" expand="block" data-url="#/five">Reviews</ion-button>
      </ion-toolbar>
      <br></br>
      <ion-toolbar  color="light">
      <ion-button class="refresh-button" expand="block" data-url="#/two">Apply to TutorBase</ion-button>
      </ion-toolbar>
      <br></br>
<ion-toolbar  color="light">
<ion-button class="refresh-button" expand="block" data-url="#/three">Maths Tutors</ion-button>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>English</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Physics</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Chemistry</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Biology</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>French</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>German</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Spanish</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Computing</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Personal Statement</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Oxbridge Interview Prep</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>11+</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Other</ion-title>
            </ion-toolbar>
      </ion-content>
    </ion-menu>
    <div class="ion-page" id="main-content">
      <ion-header>
        <ion-toolbar  color="primary">
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>Maths Tutors</ion-title>
        </ion-toolbar>
      </ion-header>

          <ion-content>
              <ion-card>
                  
              <ion-card-header>
                      <ion-card-title id="title-tutor1">Tom Smith</ion-card-title>
              </ion-card-header>

                  <ion-card-content>
                      <ion-item>
                          <ion-img src="./Pictures/tutor1.jpg"/>
                      </ion-item>
                      <ion-item>
                      <div class="ion-text-justify">
                      
                      <h3>Tom has ten years of tutoring experience.</h3>
                      <h3>Rates between £30-40/hour</h3>
                      <h3>Online or F2F in Glasgow</h3>
                      <h3>Contact number: 07950699707</h3>
                      </div>
                    </ion-item>
                      
                            <div class="teacher">
                              <ion-button class="add-to-favorites" data-teacher-name="Tom Smith" id="button-Tom-Smith">Add to favorites</ion-button>
                            </div> 
                      

                  </ion-card-content>
              </ion-card>

              <ion-card>
                  <ion-card-header>
                      <ion-card-title id="title-tutor2">Clive Adams</ion-card-title>
                  </ion-card-header>

                  <ion-card-content>
                      <ion-item>
                          <ion-img src="./Pictures/tutor2.jpg"/>
                      </ion-item>

                      <ion-item>
                      <div class="ion-text-justify">
                      
                      <h3>Clive has five years of tutoring experience.</h3>
                      <h3>Rates between £20-35/hour</h3>
                      <h3>Online or F2F in Aberdeen</h3>
                      <h3>Contact number: 07710580069</h3>
                      </div>
                    </ion-item>

                      <div class="teacher">
                              <ion-button class="add-to-favorites" data-teacher-name="Clive Adams" id="button-Clive-Adams">Add to favorites</ion-button>
                            </div> 
                  </ion-card-content>
              </ion-card>
          </ion-content>
      `;

      const buttonTomSmith = document.querySelector("#button-Tom-Smith");
      buttonTomSmith.addEventListener("click", () => {
        // Code to add Tom Smith to favorites
        console.log("Added Tom Smith to favorites.");
        buttonTomSmith.textContent = "Added to Favorites";
      
      
                
      });
      


const scriptTag = document.createElement('script');
      scriptTag.src = 'db.js';
      document.head.appendChild(scriptTag);

      const scriptTag2 = document.createElement('script');
scriptTag2.src = 'buttonRefresh.js';
document.head.appendChild(scriptTag2);

  }
});



customElements.define('page-four', class extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `
     
      <ion-menu content-id="main-content">
      <ion-header>
        <ion-toolbar  color="tertiary">
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
      <ion-toolbar  color="light">
      <ion-button class="refresh-button" expand="block" data-url="#/">Home</ion-button>
      </ion-toolbar>
      <br></br>
      <ion-toolbar  color="light">
      <ion-button class="refresh-button" expand="block" data-url="#/six">Search Tutors</ion-button>
            </ion-toolbar>
            <br></br>
<ion-toolbar  color="light">
<ion-button class="refresh-button" expand="block" data-url="#/four">Favourites</ion-button>
  </ion-toolbar>    
  <br></br>
  <ion-toolbar  color="light">
  <ion-button class="refresh-button" expand="block" data-url="#/five">Reviews</ion-button>
      </ion-toolbar>
      <br></br>
      <ion-toolbar  color="light">
      <ion-button class="refresh-button" expand="block" data-url="#/two">Apply to TutorBase</ion-button>
      </ion-toolbar>
      <br></br>
<ion-toolbar  color="light">
<ion-button class="refresh-button" expand="block" data-url="#/three">Maths Tutors</ion-button>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>English</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Physics</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Chemistry</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Biology</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>French</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>German</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Spanish</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Computing</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Personal Statement</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Oxbridge Interview Prep</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>11+</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Other</ion-title>
            </ion-toolbar>
      </ion-content>

         
          </ion-menu>
    <div class="ion-page" id="main-content">
      <ion-header>
        <ion-toolbar  color="primary">
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>Favourite Tutors</ion-title>
        </ion-toolbar>
      </ion-header>   
      <ion-content> 
          <ion-card>
         
      
          <p>To add to your Favourite Tutor List, please review our subject tutor profiles and select 'Add to Favourites'. Your favourites are listed below:</p>
    
      <ion-item>
            <div id="favorites-list-container">
                <ul id="favorites-list"></ul>
              </div>
      </ion-item>
     
        </ion-card>
        </ion-content>

          
      `;


      const scriptTag = document.createElement('script');
      scriptTag.src = 'database.js';
      document.head.appendChild(scriptTag);

      const scriptTag2 = document.createElement('script');
scriptTag2.src = 'buttonRefresh.js';
document.head.appendChild(scriptTag2);

  }
});



customElements.define('page-five', class extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `

      <ion-menu content-id="main-content">
      <ion-header>
        <ion-toolbar  color="tertiary">
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
      <ion-toolbar  color="light">
      <ion-button class="refresh-button" expand="block" data-url="#/">Home</ion-button>
      </ion-toolbar>
      <br></br>
      <ion-toolbar  color="light">
      <ion-button class="refresh-button" expand="block" data-url="#/six">Search Tutors</ion-button>
            </ion-toolbar>
            <br></br>
<ion-toolbar  color="light">
<ion-button class="refresh-button" expand="block" data-url="#/four">Favourites</ion-button>
  </ion-toolbar>    
  <br></br>
  <ion-toolbar  color="light">
  <ion-button class="refresh-button" expand="block" data-url="#/five">Reviews</ion-button>
      </ion-toolbar>
      <br></br>
      <ion-toolbar  color="light">
      <ion-button class="refresh-button" expand="block" data-url="#/two">Apply to TutorBase</ion-button>
      </ion-toolbar>
      <br></br>
<ion-toolbar  color="light">
<ion-button class="refresh-button" expand="block" data-url="#/three">Maths Tutors</ion-button>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>English</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Physics</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Chemistry</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Biology</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>French</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>German</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Spanish</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Computing</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Personal Statement</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Oxbridge Interview Prep</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>11+</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Other</ion-title>
            </ion-toolbar>
      </ion-content>
    </ion-menu>
    <div class="ion-page" id="main-content">
      <ion-header>
        <ion-toolbar  color="primary">
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>Reviews</ion-title>
        </ion-toolbar>
      </ion-header>
              <ion-content>
              <ion-card>
                  <ion-card-header>
                  <div class="my-list">
                  <ion-list id="myList"></ion-list>
                  </div>
                  </ion-card-header>


                  <ion-list id="commentList">
                  <!-- List items will be dynamically added here -->
                      <ion-label>{{ comment.name }}:</ion-label>
                      <ion-label>{{ comment.review }}</ion-label>
                    </ion-item>
                  </ion-list>




              </ion-card>

              <ion-card>
              <ion-card-content>
          
             
              <ion-list>
  <ion-item>
    <ion-label position="floating">Name:</ion-label>
    <ion-input type="text" id="reviewerName" [(ngModel)]="reviewerName"></ion-input>
  </ion-item>
  <ion-item>
    <ion-label position="floating">Review:</ion-label>
    <ion-input type="text" id="reviewName" [(ngModel)]="reviewName"></ion-input>
  </ion-item>
  
  <ion-button id="addBtn" (click)="addReview()">Add to Reviews</ion-button>
  
</ion-list>
  
              </ion-list>
         
              </ion-card-content>
            </ion-card>
        </ion-content>
      `;

      // Define an array to store data
const myArray = ['Kyle: Excellent!', 'Tiffany: Life Saver!', 'Graham: Highly Recommend!', 'Alice: Will use again!'];

// Display the data in a list
const myList = document.getElementById('myList');
for (const item of myArray) {
  const ionItem = document.createElement('ion-item');
  const ionLabel = document.createElement('ion-label');
  ionLabel.textContent = item;
  ionLabel.classList.add('my-label'); // add custom CSS class
  ionItem.appendChild(ionLabel);
  myList.appendChild(ionItem);


  const scriptTag = document.createElement('script');
  scriptTag.src = 'reviewNew.js';
  document.head.appendChild(scriptTag);
 
  const scriptTag2 = document.createElement('script');
scriptTag2.src = 'buttonRefresh.js';
document.head.appendChild(scriptTag2);

}
  }
});

customElements.define('page-six', class extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `



      <ion-menu content-id="main-content">
      <ion-header>
        <ion-toolbar  color="tertiary">
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
      <ion-toolbar  color="light">
      <ion-button class="refresh-button" expand="block" data-url="#/">Home</ion-button>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
            <ion-button class="refresh-button" expand="block" data-url="#/six">Search Tutors</ion-button>
                  </ion-toolbar>
                  <br></br>
      <ion-toolbar  color="light">
      <ion-button class="refresh-button" expand="block" data-url="#/four">Favourites</ion-button>
        </ion-toolbar>    
        <br></br>
        <ion-toolbar  color="light">
        <ion-button class="refresh-button" expand="block" data-url="#/five">Reviews</ion-button>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
            <ion-button class="refresh-button" expand="block" data-url="#/two">Apply to TutorBase</ion-button>
            </ion-toolbar>
            <br></br>
      <ion-toolbar  color="light">
      <ion-button class="refresh-button" expand="block" data-url="#/three">Maths Tutors</ion-button>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>English</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Physics</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Chemistry</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Biology</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>French</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>German</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Spanish</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Computing</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Personal Statement</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Oxbridge Interview Prep</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>11+</ion-title>
            </ion-toolbar>
            <br></br>
            <ion-toolbar  color="light">
              <ion-title>Other</ion-title>
            </ion-toolbar>
      </ion-content>
    </ion-menu>
    <div class="ion-page" id="main-content">
      <ion-header>
        <ion-toolbar  color="primary">
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>Search Tutors</ion-title>
        </ion-toolbar>
      </ion-header>

          <ion-content padding>
          <ion-card>
          <ion-card-content>
      
        <iframe src="./Searchable.html" width="100%" height="500" frameBorder="0"></iframe>
     
          </ion-card-content>
        </ion-card>        
      `;
   
      const scriptTag = document.createElement('script');
scriptTag.src = 'buttonRefresh.js';
document.head.appendChild(scriptTag);

  }
});
