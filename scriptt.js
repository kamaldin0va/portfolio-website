fetch('galleryy.json')
  .then(response => response.json())
  .then(data => {
    const gallery = document.getElementById('image-gallery');
    data.forEach(item => {
      const imgDiv = document.createElement('div');
      imgDiv.className = 'gallery-item';
      imgDiv.innerHTML = `
        <a href="${item.link}">
          <img src="${item.image}" alt="${item.caption}">
          <p>${item.caption}</p>
        </a>
      `;
      gallery.appendChild(imgDiv);
    });
  });
