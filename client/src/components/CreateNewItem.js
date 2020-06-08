import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class CreateNewItem extends Component {
  clickHandler = (event) => {
    const itemsApi = "http://localhost:5000/inventory";
    let itemNameInput = document.getElementsByClassName("");
    let itemName = itemNameInput.value;
  };
  render() {
    return (
      <div className="new-item">
        <h1 className="new-item__title">Create New</h1>

        <ul className="new-item__list">
          <li className="new-item__input">
            <p className="new-item__input--title">PRODUCT</p>
            <input
              className="new-item__input--content"
              type="text"
              placeholder="Item Name"
            />
          </li>
          <li className="new-item__input">
            <p className="new-item__input--title">LAST ORDERED</p>
            <input
              className="new-item__input--content"
              type="text"
              placeholder="yyyy-mm-dd"
            />
          </li>
          <li className="new-item__input">
            <p className="new-item__input--title">CITY</p>
            <input
              className="new-item__input--content"
              type="text"
              placeholder="City"
            />
          </li>
          <li className="new-item__input">
            <p className="new-item__input--title">COUNTRY</p>
            <select className="new-item__input--content-select">
              <option value="0">Canada</option>
              <option value="1">United States</option>
              <option value="2">Mexico</option>
              <option value="3">International</option>
            </select>
          </li>
          <li className="new-item__input">
            <p className="new-item__input--title">QUANTITY</p>
            <input
              className="new-item__input--content"
              type="text"
              placeholder="0"
            />
          </li>
          <li className="new-item__input">
            <p className="new-item__input--title">STATUS</p>
            <input className="new-item__input--content" type="checkbox" />
          </li>
          <li className="new-item__input">
            <p className="new-item__input--title">ITEM DESCRIPTION</p>
            <textarea
              className="new-item__input--content-text"
              name="new-item__input--content"
              placeholder="(Optional)"
            ></textarea>
          </li>
        </ul>

        <div className="new-item__cta">
          <button className="new-item__cta--save">SAVE</button>
          <button className="new-item__cta--cancel">CANCEL</button>
        </div>
      </div>
    );
  }
}