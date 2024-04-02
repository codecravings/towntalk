//Home
document.addEventListener('DOMContentLoaded', () => {
    const likeButton = document.querySelector('.like-btn');
    const likeCountElement = document.getElementById('like-count');
    let likeCount = parseInt(likeCountElement.textContent, 10) || 0;
    let isLiked = false; 

    likeButton.addEventListener('click', () => {

        isLiked = !isLiked;

        if (isLiked) {
            likeCount += 1;
        } else {
            likeCount -= 1;
        }

        likeCountElement.textContent = likeCount; 
        likeButton.classList.toggle('active'); 
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const likeButton = document.querySelector('.like-btn1');
    const likeCountElement = document.getElementById('like-count1');
    let likeCount = parseInt(likeCountElement.textContent, 10) || 0;
    let isLiked = false;

    likeButton.addEventListener('click', () => {
 
        isLiked = !isLiked;

        if (isLiked) {
            likeCount += 1;
        } else {
            likeCount -= 1;
        }

        likeCountElement.textContent = likeCount; 
        likeButton.classList.toggle('active');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const likeButton = document.querySelector('.like-btn2');
    const likeCountElement = document.getElementById('like-count2');
    let likeCount = parseInt(likeCountElement.textContent, 10) || 0;
    let isLiked = false; 

    likeButton.addEventListener('click', () => {

        isLiked = !isLiked;


        if (isLiked) {
            likeCount += 1;
        } else {
            likeCount -= 1;
        }

        likeCountElement.textContent = likeCount; 
        likeButton.classList.toggle('active'); 
    });
});



function openStreetView() {
    const latitude = 19.040404760998324 ; 
    const longitude = 73.05992299543499;
    const streetViewUrl = `https://www.google.com/maps?cbll=${latitude},${longitude}&cbp=,0,0,0,0&layer=c`;
    window.open(streetViewUrl, '_blank');
}

function open3DMap() {
    
    window.open('https://www.google.com/maps/place/https://maps.app.goo.gl/CWv18udF4ky31MpC8', '_blank');
}


document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const commentsDiv = document.querySelector('.comments');

    commentForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const newComment = document.createElement('div');
        newComment.className = 'comment';
        newComment.innerHTML = `
        

        <div class="parent">
        <img src="src/NSS.jpg" alt="Profile Picture" class="comment-profile-pic">
        <div class="child">
        <p class="op"><b>NSS Organization</b></p>
        <p class="ip">${commentInput.value}</p>
        </div>
        </div>
    
            
        `;
        commentsDiv.appendChild(newComment);
        commentInput.value = '';
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const mapBtn = document.getElementById('map-btn');
    mapBtn.addEventListener('click', () => {
        window.open('https://www.google.com/maps?q=19.048337,72.895494&hl=en', '_blank');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const mapBtn = document.getElementById('map-btn2');
    mapBtn.addEventListener('click', () => {
        window.open('https://www.google.com/maps?q=19.077966110607765, 72.8842386750368&hl=en', '_blank');
    });
});

document.getElementById('seek-help-btn').addEventListener('click', function() {
    const inputContainer = document.getElementById('input-container');
    inputContainer.innerHTML = `
        <input type="text" class="input-field" id="assistance-input" placeholder="Clearly articulate the assistance">
        <input type="file" class="input-field" id="upload-photo" accept="image/*" capture="camera">
        <button style={font-weight:50;} class="glass-btn1 glass-btn"id="show-profile-btn">Do you want to show your profile picture and name?</button>
        <button class="submit-btn glass-btn" onclick="handleSubmit(false)">Submit</button>
    `;

   
    document.getElementById('show-profile-btn').addEventListener('click', function(event) {
        event.preventDefault(); 
        handleSubmit(true); 
    });
});

function handleSubmit(showProfile) {
    const assistanceInput = document.getElementById('assistance-input').value;
    const photoInput = document.getElementById('upload-photo').files[0];

    const profilePicSrc = showProfile ? "src/om.jpg" : "src/anonymous.png";
    const profileName = showProfile ? "Omkar Gholwe" : "Anonymous";

    const outputContainer = document.createElement('div');
    outputContainer.className = 'container';

    const reader = new FileReader();
    reader.onload = function(e) {
        outputContainer.innerHTML = `
            <div class="profile-section">
                <img src="${profilePicSrc}" alt="Profile Picture" class="profile-pic">
                <p><b>${profileName}</b></p>
            </div>
            <p>${assistanceInput}</p>
            <img src="${e.target.result}" alt="Uploaded Image" class="responsive-img">
        `;
        document.body.appendChild(outputContainer);
        appendMapButton(outputContainer); 
        const capturedImageContainer = document.getElementById('captured-image-container');
        capturedImageContainer.innerHTML = `<img src="${e.target.result}" alt="Captured Image" class="responsive-img">`;
    };

    if (photoInput) {
        reader.readAsDataURL(photoInput);
    } else {

        outputContainer.innerHTML = `
            <div class="profile-section">
                <img src="${profilePicSrc}" alt="Profile Picture" class="profile-pic">
                <p><b>${profileName}</b></p>
            </div>
            <p>${assistanceInput}</p>
        `;
        document.body.appendChild(outputContainer);
        appendMapButton(outputContainer);
    }

    document.getElementById('input-container').innerHTML = '';
}


function appendMapButton(container) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const mapButton = document.createElement('button');
            mapButton.className = 'glass-btn';
            mapButton.textContent = 'View My Location';
            mapButton.onclick = function() {
                openMapWithCoords(latitude, longitude);
            };
            container.appendChild(mapButton);
        }, function(error) {
            console.error('Geolocation error:', error);
        });
    } else {
        alert('Geolocation is not supported by your browser.');
    }
}

function openMapWithCoords(lat, lng) {
    const streetViewUrl = `https://www.google.com/maps?cbll=${lat},${lng}&cbp=,0,0,0,0&layer=c`;
    window.open(streetViewUrl, '_blank');
}



