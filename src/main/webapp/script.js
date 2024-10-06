const toggleTheme = () => { 
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? '' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
};

const themeToggleButton = document.createElement('button');
themeToggleButton.textContent = 'Dark Mode';
themeToggleButton.style.position = 'fixed';
themeToggleButton.style.top = '10px';
themeToggleButton.style.right = '10px';
themeToggleButton.style.fontSize = '16px'; 
themeToggleButton.style.padding = '10px 15px'; 
themeToggleButton.style.borderRadius = '5px'; 
themeToggleButton.style.backgroundColor = '#ccc'; 
themeToggleButton.style.color = '#000'; 
themeToggleButton.onclick = toggleTheme;
document.body.appendChild(themeToggleButton);

const styleElement = document.createElement('style');
styleElement.textContent = `
    [data-theme="dark"] {
        background-color: #121212;
        color: #ffffff;
    }
    [data-theme="dark"] nav {
        background-color: #1e1e1e;
    }
    [data-theme="dark"] #nav-list li a {
        color: #ffffff;
    }
`;
document.head.appendChild(styleElement);

function toggleNav() {
    const nav = document.querySelector('nav');
    if (nav.style.left === '0px') {
        nav.style.left = '-200px'; 
    } else {
        nav.style.left = '0px'; 
    }
}

function closeNavOnLinkClick() {
    document.querySelectorAll('#nav-list a').forEach(link => {
        link.addEventListener('click', (event) => {
            const nav = document.querySelector('nav');
            nav.style.left = '-200px'; 
        });
    });
}

function createNav() {
    const navHTML = `
        <nav style="left: -200px; position: fixed; top: 0; width: 200px; height: 100%; background: #f8f8f8; box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);">
            <ul id="nav-list" style="list-style: none; padding: 0; margin: 0;">
                <li><a href="index.html">Home</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
        <div class="nav-icon" onclick="toggleNav()" style="cursor: pointer; position: fixed; top: 10px; left: 10px;">
            <div class="bar" style="display: block; width: 30px; height: 4px; margin: 6px 0; background-color: #333;"></div>
            <div class="bar" style="display: block; width: 30px; height: 4px; margin: 6px 0; background-color: #333;"></div>
            <div class="bar" style="display: block; width: 30px; height: 4px; margin: 6px 0; background-color: #333;"></div>
        </div>
    `;
    document.getElementById('nav-container').innerHTML = navHTML;
    closeNavOnLinkClick(); 
}

createNav();
