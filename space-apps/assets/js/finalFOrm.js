/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */



var names =[];
var emails =[];
var dests =[];
var dates =[];
var reqs =[];
particlesJS(
  "particles-js",

  {
    particles: {
      number: {
        value: 160,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 1,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 4,
          size_min: 0.3,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 600,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "bubble",
        },
        onclick: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 250,
          size: 0,
          duration: 2,
          opacity: 0,
          speed: 3,
        },
        repulse: {
          distance: 400,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  }
);

function openForm() {
  document.querySelector(
    "main"
  ).innerHTML = `<div class="form-popup" id="myForm">
  <section id="booking1">
    <div class="heading2">
      <h2>Book Your Space Adventure</h2>
    </div>
    <form id="bookingform">
      <div class="name">
        <label for="name">Full Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required
        />
      </div>
      <div class="email">
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
      </div>
      <div class="dest">
        <label for="destination">Select Destination:</label>
        <select id="destination" name="destination" required>
          <option disabled selected value="">-- Select a planet --</option>
          <option value="Mercury">Mercury</option>
          <option value="Venus">Venus</option>
          <option value="Earth">Earth</option>
          <option value="Mars">Mars</option>
          <option value="Jupiter">Jupiter</option>
          <option value="Saturn">Saturn</option>
          <option value="Uranus">Uranus</option>
          <option value="Neptune">Neptune</option>
        </select>
      </div>
      <div class="date">
        <label for="departure-date">Departure Date:</label>
        <input
          type="date"
          id="departure-date"
          name="departure-date"
          required
        />
      </div>
      <div class="req">
        <label for="additional-requests">Additional Requests:</label>
        <textarea
          id="additional-requests"
          name="additional-requests"
          rows="4"
          placeholder="Any Message"
        ></textarea>
      </div>
      <div class="submit">
        <button type="submit">Submit</button>
        <button type="button" onclick="closeForm()">Close</button>
      </div>
    </form>
  </section>
</div>`;
document.querySelector("#bookingform").addEventListener("submit", function (event) {
	event.preventDefault();
	const name=document.querySelector("#name");
	const email=document.querySelector("#email");
	const dest=document.querySelector("#destination");
	const date=document.querySelector("#departure-date");
	const req=document.querySelector("#additional-requests");
  names.push(name.value);
  emails.push(email.value);
  dests.push(dest.value);
  dates.push(date.value); 
  reqs.push(req.value);
  const storedNames = localStorage.getItem('names') ? JSON.parse(localStorage.getItem('names')) : [];
  const storedEmails = localStorage.getItem('emails') ? JSON.parse(localStorage.getItem('emails')) : [];
  const storedDests = localStorage.getItem('dests') ? JSON.parse(localStorage.getItem('dests')) : [];
  const storedDates = localStorage.getItem('dates') ? JSON.parse(localStorage.getItem('dates')) : [];
  const storedReqs = localStorage.getItem('reqs') ? JSON.parse(localStorage.getItem('reqs')) : [];


  names = storedNames.concat(names);
  emails = storedEmails.concat(emails);
  dests = storedDests.concat(dests);
  dates = storedDates.concat(dates);
  reqs = storedReqs.concat(reqs);
  localStorage.setItem('names' , JSON.stringify(names));
  localStorage.setItem('emails' , JSON.stringify(emails));
  localStorage.setItem('dests' , JSON.stringify(dests));
  localStorage.setItem('dates', JSON.stringify(dates));
  localStorage.setItem('reqs', JSON.stringify(reqs));  
  document.querySelector("#bookingform").reset();
  window.location.href = "index.html";


});
}


function closeForm() {
  window.location.href = "index.html";
}
