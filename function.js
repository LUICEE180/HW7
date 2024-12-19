let isEditing = false;

document.getElementById('edit-button').addEventListener('click', function() {
    const nameDisplay = document.getElementById('name-display');
    const nameInput = document.getElementById('name-input');
    const button = document.getElementById('edit-button');

    if (isEditing) {
        // Save state: update the display with the input value
        nameDisplay.textContent = nameInput.value;
        nameInput.classList.add('hidden');
        nameDisplay.classList.remove('hidden');
        button.textContent = 'edit';
    } else {
        // Edit state: show the input with the current name
        nameInput.value = nameDisplay.textContent;
        nameDisplay.classList.add('hidden');
        nameInput.classList.remove('hidden');
        button.textContent = 'save';
    }

    isEditing = !isEditing;
});
document.getElementById('add-button').addEventListener('click', function() {
    const form = document.getElementById('add-music-form');
    form.classList.toggle('hidden');
});

document.getElementById('submit-music').addEventListener('click', function() {
    const musicUrl = document.getElementById('music-url').value;
    const musicLabel = document.getElementById('music-lable').value;
    
    if (musicUrl && musicLabel) {
        const albumCovers = document.getElementById('album-covers');
        const newMusic = document.createElement('a');
        newMusic.href = musicUrl;
        newMusic.target = "_blank";
        newMusic.innerHTML = `<img src="image_副本.jpg" alt="album"><div class="label">${musicLabel}</div>`;
        albumCovers.appendChild(newMusic);
        
        // Clear the input fields and hide the form
        document.getElementById('music-url').value = '';
        document.getElementById('music-lable').value = '';
        document.getElementById('add-music-form').classList.add('hidden');
    } else {
        alert('Please fill out both fields');
    }
});