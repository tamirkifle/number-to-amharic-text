# Number to Amharic Text Converter

This simple library offers conversion capabilities from numerical values to their amharic text equivalent.

## Installation

Use npm to install

```bash
npm i number-to-amharic-text
```

## Usage

```node
const convert = require("number-to-amharic-text");

convert(5467) # returns 'አምስት ሺህ አራት መቶ ስልሳ ሰባት'
convert(875467) # returns 'ስምንት መቶ ሰባ አምስት ሺህ አራት መቶ ስልሳ ሰባት'
convert("01200054") # returns'አንድ ሚሊዮን ሁለት መቶ ሺህ ሃምሳ አራት'
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
