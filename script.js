document.addEventListener("DOMContentLoaded", function () {
    const circle = document.querySelector(".circle");
    const welcome = document.querySelector(".welcome");
    const breathingExercise = document.querySelector(".breathing_exercise");
    const info = document.querySelector(".info");
    let exercise_tick = 0;

    const yesRadio = document.getElementById('yes');
    const noRadio = document.getElementById('no');
    const surveyDiv = document.getElementById("survey");

    yesRadio.addEventListener('change', function() {
        if (yesRadio.checked) {
            surveyDiv.style.opacity = "0";
            setTimeout(function() {
                surveyDiv.style.display = "none"
                breathingExercise.style.display = "contents"
                info.style.display = "initial"
            }, 1000);
            setTimeout(function() {
              info.style.opacity = "1"
            }, 1100)
            setTimeout(function() {
              info.style.opacity = "0"
            }, 6000)
            setTimeout(function() {
              info.textContent = "Stop if you feel dizzy at any point."
              info.style.opacity = "1"
            }, 6700)
            setTimeout(function() {
              info.style.opacity = "0"
            }, 11000)
            setTimeout(function() {
              info.textContent = "Press Start whenever you're ready"
              info.style.display = "block"
              circle.style.display = "initial"
            }, 11500)
            setTimeout(function() {
              info.style.opacity = "1"
              circle.style.opacity = "1"
            }, 11600)
        }
    });
    noRadio.addEventListener('change', function() {
        if (noRadio.checked) {
            surveyDiv.style.opacity = "0";
        }
        setTimeout(function() {
          welcome.style.display = "block";
        }, 1000);
        setTimeout(function() {
          welcome.style.opacity = "1";
        }, 1100);
    });
  
    function breathing_exercise() {
      info.style.opacity = "0"
      circle.classList.add("expandAndShrink");
      circle.style.color = "rgba(227, 203, 159, 0)";
      setTimeout(function () {
        circle.style.color = "rgba(227, 203, 159, 1)";
        circle.textContent = "Inhale";
      }, 200);
      setTimeout(function () {
        circle.style.color = "rgba(227, 203, 159, 0)";
      }, 6000);
      setTimeout(function () {
        circle.style.color = "rgba(227, 203, 159, 1)";
        circle.textContent = "Hold";
      }, 6200);
      setTimeout(function () {
        circle.style.color = "rgba(227, 203, 159, 0)";
      }, 12200);
      setTimeout(function () {
        circle.style.color = "rgba(227, 203, 159, 1)";
        circle.textContent = "Exhale";
      }, 12400);
      setTimeout(function () {
        circle.style.color = "rgba(227, 203, 159, 0)";
      }, 19000);
      setTimeout(function() {
         circle.classList.remove("expandAndShrink");
      }, 19010);
      setTimeout(function () {
        circle.style.color = "rgba(227, 203, 159, 1)";
        exercise_tick++;
        if (exercise_tick < 3) {
          breathing_exercise();
        } else {
          circle.textContent = "Namaste";
          setTimeout(function() {
            circle.style.opacity = "0";
          }, 2000);
          setTimeout(function() {
            welcome.style.display = "block";
          }, 3000);
          setTimeout(function() {
            welcome.style.opacity = "1";
          }, 3100);
        }
      }, 19200);
    }
  
    circle.addEventListener("click", function () {
      exercise_tick = 0;
      breathing_exercise();
    });
  });