import React from "react";
import "./style.css";
function RegistrationForm() {
  return (
    <div className="form">
      <div className="form-body">
        <div className="username">
          <label className="form__label" for="firstName">
            First Name{" "}
          </label>
          <input
            className="form__input"
            type="text"
            id="firstName"
            placeholder="First Name"
          />
        </div>
        <div className="lastname">
          <label className="form__label" for="lastName">
            Last Name{" "}
          </label>
          <input
            type="text"
            name=""
            id="lastName"
            className="form__input"
            placeholder="LastName"
          />
        </div>
        <div className="gender">
          <label className="form__label" for="gender">
            gender{" "}
          </label>
          male
          <input
            type="radio"
            name="male"
            id="male"
            className="form__input"
            placeholder="male"
          />
          female
          <input
            type="radio"
            name="male"
            id="male"
            className="form__input"
            placeholder="male"
          />
        </div>
        <div className="game">
          <label className="form__label" for="game">
            game{" "}
          </label>
          <input
            type="text"
            name=""
            id="game"
            className="form__input"
            placeholder="--enter your game--"
          />
        </div>
        <div className="question">
          <label className="form__label" for="gender">
            did youn have any certificate{" "}
          </label>
          yes
          <input
            type="radio"
            name="male"
            id="male"
            className="form__input"
            placeholder="male"
          />{" "}
          no
          <input
            type="radio"
            name="male"
            id="male"
            className="form__input"
            placeholder="male"
          />
        </div>
        <div className="gender">
          <label className="form__label" for="gender">
            your age in between{" "}
          </label>
          18-28
          <input
            type="radio"
            name="male"
            id="male"
            className="form__input"
            placeholder="male"
          />{" "}
          29-38
          <input
            type="radio"
            name="male"
            id="male"
            className="form__input"
            placeholder="male"
          />
        </div>
        <div className="email">
          <label className="form__label" for="email">
            Email{" "}
          </label>
          <input
            type="email"
            id="email"
            className="form__input"
            placeholder="Email"
          />
        </div>
        <div className="password">
          <label className="form__label" for="password">
            Password{" "}
          </label>
          <input
            className="form__input"
            type="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="confirm-password">
          <label className="form__label" for="confirmPassword">
            Confirm Password{" "}
          </label>
          <input
            className="form__input"
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
          />
        </div>
      </div>
      <div class="footer">
        <button type="submit" class="btn">
          Register
        </button>
      </div>
    </div>
  );
}
export default RegistrationForm;
