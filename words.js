
document.addEventListener("DOMContentLoaded", function () {
    // Select all rows in the table
    let rows = document.querySelectorAll("table tr");

    rows.forEach(function (row) {
        // Set 'data-lang' for the second column (French)
        let frenchCell = row.querySelector("td:nth-child(2)");
        if (frenchCell) {
            frenchCell.setAttribute("data-lang", "fr-FR");
        }

        // Set 'data-lang' for the third column (German)
        let germanCell = row.querySelector("td:nth-child(3)");
        if (germanCell) {
            germanCell.setAttribute("data-lang", "de-DE");
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Add data-lang attributes
    let rows = document.querySelectorAll("table tr");
    rows.forEach(function (row) {
        let frenchCell = row.querySelector("td:nth-child(2)");
        if (frenchCell) {
            frenchCell.setAttribute("data-lang", "fr-FR");
        }

        let germanCell = row.querySelector("td:nth-child(3)");
        if (germanCell) {
            germanCell.setAttribute("data-lang", "de-DE");
        }
    });

    // Play audio on click
    let tds = document.querySelectorAll("td[data-lang], td:first-child");
    tds.forEach(function (td) {
        td.addEventListener("click", function () {
            // When index is clicked
            if (td === td.parentElement.querySelector("td:first-child")) {
                let rowIndex = td.innerText;
                let frenchAudio = new Audio("audio/" + rowIndex + "_fr-FR.wav");
                let germanAudio = new Audio("audio/" + rowIndex + "_de-DE.wav");

                // Play German audio after French audio finishes
                frenchAudio.addEventListener("ended", function () {
                    germanAudio.play();
                });

                // Play the French audio
                frenchAudio.play();
            }
            // For individual language cells
            else {
                let rowIndex = td.parentElement.querySelector("td:first-child").innerText;
                let lang = td.getAttribute("data-lang");
                let audioFile = "audio/" + rowIndex + "_" + lang + ".wav";
                let audio = new Audio(audioFile);
                audio.play();
            }
        });
    });
});

