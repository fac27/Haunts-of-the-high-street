const styles = require('../../public/styles.css')

const Layout = ({ title, content }) => {
  return /*html*/ `
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>${title}</title>
          <style>${styles}</style>
        </head>
        <body>
            <main>
              ${content}
            </main>
          </div>
        </body>
      </html>
    `
}

module.exports = { Layout }
