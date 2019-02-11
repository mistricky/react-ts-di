# react-ts-di
The DI library of TypeScript for react.

## Install

**npm**

```
yarn add react-ts-di -D
```

**yarn**

```
npm insatll --save-dev react-ts-di
```

## Usage

**user.service.ts**

````
import { Injectable } from "react-ts-di";

@Injectable()
export class User {
  name: string = "Jon";
}
````

**id-card.tsx**

```
import { Component } from "react";
import * as React from "react";
import { Inject } from "react-ts-di";
import { User } from "../services";

export class IDCard extends Component {
  @Inject
  user: User;

  render() {
    let { name } = this.user;
    return <div>Hello my name is {name}.</div>;
  }
}
```

see ` /example`

## LISENCE
MIT.
