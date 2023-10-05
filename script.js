const subHeader = document.querySelector("h2");
const form = document.querySelector("form");
const input = document.getElementById("input");
const output = document.getElementById("output");
const copyAlertTxt = document.getElementById("copyAlert");
const copyBinaryBtn = document.getElementById("copyBinaryBtn");

let binaryInput = "";

const numBinary = [
    "00000000",
    "00000001",
    "00000010",
    "00000011",
    "00000100",
    "00000101",
    "00000110",
    "00000111",
    "00001000",
    "00001001"
]

input.value = "";
output.value = "";

setInterval(
    function () {
        if (input.value.length === 0) {
            subHeader.style.color = "#fff";
            output.value = "";
        } else {
            if (/^\d+$/.test(input.value)) {
                subHeader.style.color = "#fff";

                binaryInput = input.value;
                binaryInput = binaryInput.toString().replace(/0/g, numBinary[0]);
                binaryInput = binaryInput.toString().replace(/1/g, numBinary[1]);
                binaryInput = binaryInput.toString().replace(/2/g, numBinary[2]);
                binaryInput = binaryInput.toString().replace(/3/g, numBinary[3]);
                binaryInput = binaryInput.toString().replace(/4/g, numBinary[4]);
                binaryInput = binaryInput.toString().replace(/5/g, numBinary[5]);
                binaryInput = binaryInput.toString().replace(/6/g, numBinary[6]);
                binaryInput = binaryInput.toString().replace(/7/g, numBinary[7]);
                binaryInput = binaryInput.toString().replace(/8/g, numBinary[8]);
                binaryInput = binaryInput.toString().replace(/9/g, numBinary[9]);

                output.value = adjustSpace(binaryInput);
            } else if (/^\d+$/.test(input.value) === false) {
                output.value = "";
                subHeader.style.color = "#f00";
            }
        }
    }, 100
)

let charLength;
let j
let k;
let l;
let m;

function adjustSpace(input) {
    charLength = binaryInput.length / 8;
    m = "";

    for (let i = 0; i < charLength; i++) {
        j = i * 8;
        k = input.slice(j, j + 8);

        m += k + " ";
    }

    return m.slice(0, -1);
}

copyBinaryBtn.addEventListener("click", function () {
    // Select the text field
    output.select();
    output.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(output.value);

    copyAlertTxt.textContent = "Copied!";
    copyBinaryBtn.style.transform = "translateX(-" + (40 + copyAlertTxt.offsetWidth) + "px)";
    sleep(1000).then(() => {
        copyAlertTxt.textContent = "";
        copyBinaryBtn.style.transform = "translateX(-40px)";
    });
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}