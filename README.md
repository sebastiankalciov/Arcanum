# Arcanum
Arcanum is an interactive mobile application made with React Native meant to teach school subjects using Augmented Reality

### Commands [in order] to create a development build [personal notes]:

- npx create-expo-app [Create the react native app]

- npx expo install expo-dev-client [install dependencies]

- npx expo prebuild --clean -p android --no-install [create android folder]

- npm install --save @reactvision/react-viro

- [modify/add dependencies for reactvision]

- eas build --profile development --platform android [for building on cloud]

- eas build --platform android --local [for building locally]
