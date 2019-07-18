var options = {
    paths: 'path',     // Shape we want to draw
    pointsNumber: 5,            // Number of points
    maxDistance: 10,             // Max distance among points
    color: '#5C1523',   // Element to move accordingly with the centroid of the shape
    intensity: 0.7,
    debug: true               // Uncomment this to see the points
};
var myJellyCircle = new Jelly('.jelly-circle-canvas', options);