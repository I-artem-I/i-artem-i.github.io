particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
                                                                  // DOTS
      "color": {
        // dot color
        "value": "#5C2A02"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#FF6F17"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
                                                                  // OPACITY
      "opacity": {
        "value": 0.7,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.5,
          "sync": false
        }
      },
                                                                  // SIZE
      "size": {
        "value": 2.3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.5,
          "sync": false
        }
      },
                                                                  // LINKS
      "line_linked": {
        "enable": true,
        "distance": 120,
        // line color
        "color": "#5C2A02",
        "opacity": 1,
        "opacity_min": 0.5,
        "width": 1
      },
                                                                  // MOVE
      "move": {
        "enable": true,
        "speed": 5,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
                                                                // ХЗ ШО ТАМ Я НЕ РАЗОБРАЛСЯ
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
                                                                  // MOUSE PUSH
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 100
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);