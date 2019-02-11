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
