# FollowMeal

## Preview

TO-DO

## Building

Make sure to install all dependencies with `npm install` in your project folder. Then `npm run web`

## Dependencies

### Expo cli

```bash
# anywhere
sudo npm install -g expo-cli

# idk but do it in project folder
npx expo install expo-splash-screen@~0.15.1 expo-status-bar@~1.3.0 react@17.0.2 react-dom@17.0.2 react-native@0.68.1 react-native-web@0.17.7
```

### React Native cli

```bash
# anywhere
sudo npm install -g react-native-cli
```

## Setting host file

Get your IPV4 with `ipconfig` or `ipaddr` and put it in the following file `./config/host.js` :
```js
module.exports = {host:"YOUR IP ADDR"};
```
