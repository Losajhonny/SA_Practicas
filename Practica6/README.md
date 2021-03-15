![logo](../doc/Logo.png)

# Practica 5

Esta practica consiste en realizar pruebas de una clase y mostrar el resultado utilizando sonarqube

## Herramienta de pruebas

Se instalo ***jest*** para realizar el proceso de pruebas unitarias

````
npm install --save-dev jest
````

Ademas se agrego los scripts para realizar las pruebas y su configuracion para tener el archivo lcov.info, todo esto esta en el package.json

````
"test": "jest",
"coverage": "jest --coverage",

"jest": {
    "collectCoverage": true
}

npm run coverage
````

Despues de ejecutar el escript de coverage, se genera una carpeta coverage y ahi se aloja el archivo que se necesita para sonarqube **lcov.info**


### Sonar scanner
````
sonar-scanner.bat 
    -D"sonar.projectKey=sa-practicas"
    -D"sonar.sources=."
    -D"sonar.host.url=http://localhost:9000"
    -D"sonar.login=de7d24339bd38a964c859ec3039f061ae9924864"
    -D"sonar.sourceEncoding=UTF-8"
    -D"sonar.sources=src"
    -D"sonar.exclusions=src/test/**/*.test.js"
    -D"sonar.tests=src/test"
    -D"sonar.test.inclusions=src/test/**/*.test.js"
    -D"sonar.javascript.lcov.reportPaths=coverage/lcov.info"
````

## Link del video

https://youtu.be/nL7HXgAGCjo
