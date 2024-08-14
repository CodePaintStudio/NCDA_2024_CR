const photoURLs = ['../images/YX 1.svg', '../images/YX 2.svg', '../images/YX 3.svg', '../images/YX 4.svg'];

// Define the Drop object
function Drop(x, y, vy, l, r, a, photo) {
    this.x = x;
    this.y = y;
    this.vy = vy;
    this.l = l;
    this.r = r;
    this.a = a;
    this.rotation = Math.random() * 360; // Random rotation angle
    this.photo = photo; // Assuming photo is an Image object or image URL

    this.draw = function (ctx) {
        ctx.save(); // Save the current context state
        ctx.translate(this.x + this.r, this.y + this.r); // Translate to the center of the image
        ctx.rotate(this.rotation * Math.PI / 180); // Rotate by the angle in radians
        ctx.drawImage(this.photo, -this.r, -this.r, this.r * 4, this.r * 4); // Draw the photo
        ctx.restore(); // Restore the saved context state
    };

    this.update = function () {
        this.y += this.vy;
        if (this.y > this.l) {
            this.y = -this.r * 2; // Reset position if it falls off the screen
        }
    };
}

// Initialize canvas and context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;

// Create array to hold drops
let drops = [];

// Function to initialize drops
function init() {
    for (let i = 0; i < 20; i++) { // Create 20 drops
        let x = Math.random() * w; // Random x position
        let y = Math.random() * h; // Random y position
        let vy = 1 + Math.random() * 3; // Adjusted vertical speed (slower)
        let l = h + Math.random() * 100; // Random max falling height
        let r = 50 + Math.random() * 50; // Random size
        let a = 0.1 + Math.random() * 0.5; // Random transparency
        let photo = new Image();
        photo.src = photoURLs[Math.floor(Math.random() * photoURLs.length)]; // Random photo URL

        // Create a new Drop instance
        let drop = new Drop(x, y, vy, l, r, a, photo);
        drops.push(drop);
    }
}

// Animation loop
function move() {
    ctx.clearRect(0, 0, w, h);

    for (let i = 0; i < drops.length; i++) {
        let drop = drops[i];
        drop.update();
        drop.draw(ctx);
    }

    requestAnimationFrame(move);
}

// Initialize drops and start animation
init();
move();
