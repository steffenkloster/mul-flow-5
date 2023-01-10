let currentLineIndex = 0;
let currentCharacterIndex = 0;

const codeElement = document.querySelector(".code");

const quickElement = (type, attributes = {}) => {
  const element = document.createElement(type);
  for (const [key, value] of Object.entries(attributes)) {
    element[key] = value;
  }

  return element;
};

const lines = [
  "<!DOCTYPE html>",
  '<html lang="dk">',
  "  <head>",
  '    <meta charset="UTF-8" />',
  '    <meta name="viewport" content="width=device-width, initial-scale=1.0" />',
  "    <title>",
  "        Flow 1.3 - Byg dit første website",
  "    </title>",
  "  </head>",
  "  <body>",
  "    <h1>Mit første website</h1>",
  "    <p>Velkommen til mit første website :)</p>",
  "  </body>",
  "</html>",
];

const interval = setInterval(() => {
  if (!lines[currentLineIndex]) {
    clearInterval(interval);
    return;
  }

  let currentLineElement = document.querySelector(
    `#line-${currentLineIndex} > div:nth-of-type(2)`
  );

  currentLineElement.innerText = lines[currentLineIndex].substring(
    0,
    currentCharacterIndex + 1
  );

  currentCharacterIndex++;

  if (lines[currentLineIndex].length === currentCharacterIndex) {
    currentCharacterIndex = 0;
    currentLineIndex++;

    currentLineElement.parentElement.classList.remove("active");

    const newLine = quickElement("div", {
      id: `line-${currentLineIndex}`,
      className: `active ${currentLineIndex === 6 ? "text-white" : ""}`,
    });
    newLine.appendChild(
      quickElement("div", { innerText: currentLineIndex + 1 })
    );
    newLine.appendChild(quickElement("div"));
    codeElement.appendChild(newLine);
  }
}, 10);
