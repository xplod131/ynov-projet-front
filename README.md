## Installation

Pour lancer le projet vous devez tout d'abord builder la libraie UI pour cela faire :

```bash
  cd my-lib-ui
  npm yalc:build
```
Ensuite il faut lier notre librairie à notre front. Pour cela faire : 
```bash
  cd front
  yalc link my-lib-ui
```

Pour lancer le front : 
```bash
  cd front
  npm run dev
```
