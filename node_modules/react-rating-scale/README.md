## Install

```sh
npm install --save react-rating-scale
```

## Demo

[https://stas-raranetskyi.github.io/react-rating-scale/](https://stas-raranetskyi.github.io/react-rating-scale/)

## Usage

```javascript
import React from 'react';
import Rating  from 'react-rating-scale';

class App extends React.Component {
    render() {
        return <Rating />;
    }
}
```

### Settings

Option | Type | Default | Description
------ | ---- | ------- | -----------
length | number | 10 | The max number of items to choose from or to display.
rating | number | 0 | The user's rating. Number of items to highlight. Ranging from 0 to max number of items.
readonly | bool | false | Determines whether user can select a new rating or whether the items are just for display.
onSelect | function | () => {} | Callback that will be passed the new rating a user selects.
beforeSelect | function | () => true | Callback that will before calling onSelect. Must return true for the function onSelect to execute.
icon | string | '' | Path to your icon.
width | number | 20 | Icon width.
height | number | 19 | Icon height.
classNameRatingWrap | string | '' | Class name for rating wrap.
classNameRatingItem | string | '' | Class name for rating icon.
classNameRatingItemActive | string | '' | Class name for rating icon active.

## Author

|[![@Stas Raranetskyi](https://avatars0.githubusercontent.com/u/11090889?s=128&v=4)](https://github.com/stas-raranetskyi/)|
|:---:|
|[Stas Raranetskyi](https://github.com/stas-raranetskyi/)|
