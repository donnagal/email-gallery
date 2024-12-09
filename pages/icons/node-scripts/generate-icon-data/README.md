# Generate Icon Data

This `node` script creates a `json` file that maps an array of icons with metadata.

The data is then used on the icon library front end.

- Production url: https://email-gallery.netlify.app/pages/icons/
- Github repo: https://github.com/donnagal/email-gallery

## Data format

```js
type icon {
    // The brand that the icon belongs to. Cbus or Media Super
    group:"cbus"| "ms"|"none",

    // Desription of the icon. Used as keywords for search functionality
    text: string,

    // The filename of the icon
    url: string,
};
```

## How to use this script

#### 1. Export the latest icons from the figma file.

- Figma file: https://www.figma.com/design/xoR7FUbBdcG3Vb1jxmSe2V/Icons?node-id=0-1&t=D2PbZ5RiMxqN6yEr-1

- Replace all images in the `./icons/` folder next to the script.

#### 2. Upload images to `AEM`

- Images are hosted on `AEM` so we will upload them there.

- AEM: https://author.prod.internal.cbussupertech.com.au/assets.html/content/dam/cbus/images/email/icon_library
- Production img path: `https://www.cbussuper.com.au/content/dam/cbus/images/email/icon_library/`

#### 3. Update the search words
- Update description search words from Figma to: `search-words.js`

#### 4. Run the node script

- install dependencies, if you haven't already

  `npm i`

- To run the script:

  `npm start`

- The script will output a `json` file in the `/output` folder.

#### 4. Update the `items` array on the front end:

- There is an `items` array in this file.
- https://github.com/donnagal/email-gallery/blob/master/pages/icons/js/vue-icons.js
- Replace the `items` array with the output of the script
- To test local file update the fetch path in `https://github.com/donnagal/email-gallery/blob/master/pages/reports/data/list_icons.json` 

---
Tested with Node.js v20.10.0 🙃
