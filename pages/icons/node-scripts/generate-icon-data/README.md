# Generate Icon Data

This `node` script creates a `json` file that maps an array of icons with metadata.

The data is then used on the icon library front end.

- Production url: https://email-gallery.netlify.app/pages/icons/
- Github repo: https://github.com/donnagal/email-gallery

## Data format

```js
type icon {
    // which brand the icon belongs to. cbus or media super
    group:"cbus"| "ms"|"none",

    // desription of the icon. used as keywords for sear
    text: string,

    // the url of the icon
    url: string,
};
```

## How to use this script

#### 1. Export the latest icons from the figma file.

- Figma file: https://www.figma.com/design/xoR7FUbBdcG3Vb1jxmSe2V/Icons?node-id=0-1&t=D2PbZ5RiMxqN6yEr-1

- Replace all images in the `./images/` folder next to the script.

#### 2. Upload images to `AEM`

- Images are hosted on `AEM` so we will upload them there.

- AEM: <insert link here>
- Production img path: `https://www.cbussuper.com.au/content/dam/cbus/images/email/icon_library/`

#### 3. Run the node script

- install dependencies

  `npm i`

- To run the script:
  `npm start`

- The script will output a `json` file in the `/output` folder.

#### 4. Update the `items` array on the front end:

- There is an `items` array in this file.
- https://github.com/donnagal/email-gallery/blob/master/pages/icons/js/vue-icons.js
- Replace the `items` array with the output of the script

---

Tested with Node.js v20.10.0 🙃
