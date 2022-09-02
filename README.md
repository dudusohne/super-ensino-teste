# TESTE - SUPER ENSINO

---------

## deployed at vercel: [click to see](https://super-ensino-teste.vercel.app/)

---------

### To install 
`yarn`

### To run
`yarn dev` 

### To build
`yarn build`

### To run tests
`yarn test`

---------

## run with docker

### if you already have Makefile installed, just run:
`make run`

### if don't, just run:
`docker build --rm -t super-dev -f Dockerfile .`
#### then run:
`docker run -it --rm --name super-dev -p 3000:8080 super-dev`
#### to stop(kill):
`docker kill super-dev`
#### to remove:
`docker rm super-dev`

---------

## About the project

### - built with vite, react, typescript and sass
#### - tests written with vitest