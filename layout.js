function layout(title, content) {
  return /*html*/ `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="App for book reviews">
  <title>${title}</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  ${content}
</body>
</html>
  `;
}

module.exports = layout;
