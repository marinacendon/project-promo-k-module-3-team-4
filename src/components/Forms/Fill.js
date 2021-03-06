import React from 'react';
import Input from './Input';
import '../../stylesheets/layout/Forms/Fill-avatar.scss';
import '../../stylesheets/layout/Forms/Fill-main.scss';

const fr = new FileReader();
class Fill extends React.Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.handleFileChange = this.handleFileChange.bind(this);
    this.writeImage = this.writeImage.bind(this);
    this.fakeClick = this.fakeClick.bind(this);
  }

  writeImage() {
    const fileUrl = fr.result;
    this.props.handleInputChange('photo', fileUrl);
  }

  handleFileChange() {
    const file = this.fileInput.current.files[0];
    fr.onload = this.writeImage;
    fr.readAsDataURL(file);
  }

  fakeClick() {
    this.fileInput.current.click();
  }

  render() {
    return (
      <form className="fill__form js-fill__form" action="" method="post">
        <Input
          htmlFor="name"
          labelTitle="Nombre Completo"
          inputID="name"
          inputName="name"
          inputPlaceholder="Ej: Sally Hill"
          inputMaxLenght={20}
          classN="fill__form--input js__form js-input-name"
          handleInputChange={this.props.handleInputChange}
          value={this.props.name}
        />
        <Input
          htmlFor="work"
          labelTitle="Puesto"
          inputID="work"
          inputName="job"
          inputPlaceholder="Ej: Front-end unicorn"
          inputMaxLenght={24}
          classN="fill__form--input js__form js-input-job"
          handleInputChange={this.props.handleInputChange}
          value={this.props.job}
        />
        <label htmlFor="img" className="fill__form--label">
          Imagen de perfil
        </label>
        <div className="action">
          <button
            className="action__upload-btn js__profile-trigger"
            type="button"
            onClick={this.fakeClick}
          >
            Añadir imagen
          </button>
          <input
            onChange={this.handleFileChange}
            ref={this.fileInput}
            type="file"
            name=""
            id="img-selector"
            className="action__hiddenField js__profile-upload-btn"
          />
          <div
            className="profile__preview js__profile-preview"
            style={{ backgroundImage: `url(${this.props.photoMin})` }}
          ></div>
        </div>
        <Input
          htmlFor="mail"
          labelTitle="Email"
          inputType="email"
          inputID="mail"
          inputName="mail"
          inputPlaceholder="Ej: sally-hill@gmail.com"
          classN="fill__form--input js__form js-input-mail"
          handleInputChange={this.props.handleInputChange}
          value={this.props.mail}
        />
        <Input
          htmlFor="phone"
          labelTitle="Teléfono"
          inputType="tel"
          inputID="phone"
          inputName="phone"
          inputPlaceholder="Ej: 555-55-55-55"
          classN="fill__form--input js__form js-input-phone"
          handleInputChange={this.props.handleInputChange}
          value={this.props.phone}
        />
        <Input
          htmlFor="linkedin"
          labelTitle="Linkedin"
          inputID="linkedin"
          inputName="linkedin"
          inputPlaceholder="Ej: linkedin.com/in/sally.hill"
          classN="fill__form--input js__form js-input-linkedin"
          handleInputChange={this.props.handleInputChange}
          value={this.props.linkedin}
        />
        <Input
          htmlFor="github"
          labelTitle="Github"
          inputID="github"
          inputName="github"
          inputPlaceholder="Ej: @sally-hill"
          classN="fill__form--input fill__form--inputGitHub js__form js-input-github"
          handleInputChange={this.props.handleInputChange}
          value={this.props.github}
        />
      </form>
    );
  }
}

export default Fill;
