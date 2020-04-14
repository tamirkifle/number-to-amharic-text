# Number to Amharic Text Converter

This simple library offers conversion capabilities from numerical values to their amharic text equivalent.

## Installation

Use npm to install number.

```bash
npm i number-to-amharic-text
```

## Usage

```node
let convert = require("number-to-amharic-text");

convert(5467) # returns 'አምስት ሺ አራት መቶ ስልሳ ሰባት'
convert(875467) # returns 'ስምንት መቶ ሰባ አምስት ሺ አራት መቶ ስልሳ ሰባት'
convert("01200054") # returns'አንድ ሚሊዮን ሁለት መቶ ሺ ሃምሳ አራት'
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
