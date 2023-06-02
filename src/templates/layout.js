const layout = ({ title, content }) => {
    return /*html*/ `
      <!doctype html>
      <html lang="en">
        <head>
        <link rel="stylesheet" type="text/css" href="/styles.css">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${title}</title>
        </head>
        <body>
            <main>
              ${content}
            </main>
        </body>
      </html>
    `;
};

module.exports = { layout };
