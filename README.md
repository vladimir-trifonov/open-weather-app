# Open weather application

## Prerequisites

- jspm
- node
- appcelerator cli

## Installing

```
[sudo] npm install appcelerator -g
[sudo] npm install jspm -g
```

## Usage

```
./appc install
./jspm install
```

## Start App

`OPEN_WEATHER_MAP_API_ID=key appc run`

Navigate to [127.0.0.1:8080/](http://127.0.0.1:8080/)

## Developing

#### Unbundle front-end deps

`./npm run unbundle`

#### Set arrow in development mode

`To enable in development, set enableAdminInProduction to false in your config`

## Production

#### Bundle front-end deps

`./npm run bundle`

#### Set arrow in production mode

`To enable in production, set enableAdminInProduction in your config`

## Configs

### Front-end config file

`<project_folder>/web/public/env.js`

### Open Weather Map API Key

`OPEN_WEATHER_MAP_API_ID=key`