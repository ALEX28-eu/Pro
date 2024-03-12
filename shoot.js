AFRAME.registerComponent("bullets", {
    init: function () {
        this.shootBullet();
    },
    shootBullet: function () {
        window.addEventListener('keydown', (e) => {
            if (e.key === "q") {
                console.log("bullets pressed")
                var bullet = document.createElement("a-entity");
                bullet.setAttribute("geometry", {
                    primitive: "sphere",
                    radius: 0.1,
                });
                bullet.setAttribute("material", "color", "black")
            }
                var cam = document.querySelector("#camera");
                pos =cam.getAttribute("position");

            
            bullet.setAttribute("position",
                {
                    x: pos.x,
                    y: pos.y,
                    z: pos.z
                });


            
            bullet.setAttribute("velocity",
                {
                    x: 0,
                    y: 0,
                    z: -1
                });
                cam.appendChild(bullet);
                

            var scene = document.querySelector("#scene");
            bullet.addEventListener("collide", this.removeBullet);

            scene.appendChild(bullet);
        
            var cam = document.querySelector("#camera").object3D;
            // var direction = new THREE.Vetcor3();
            // camera.getWorldDirection(direction);
            // bullet.setAttribute("velocity", direction.multiplyScalar(-10));
            // var scene = document.querySelector("#scene");
            // scene.appendChild(bullet);

        })
    }

});
removeBullet: function (e) {
 console.log(e.detail.target.el);
 console.log(e.detail.body.el);
 var element=e.detail.target.el

 var elementHit = e.detail.body.el;
},

bullet.setAttribute("dynamic-body", {
    shape: "sphere",
    mass: "0",
});