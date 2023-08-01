import React from "react";

class Valida extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        password: "",
        showError: false,
        };
    }

    onClickValue() {
        const { password } = this.state;
        const confirmPasswordInput = document.getElementById("passwordConfirm");
        const PasswordInput = document.getElementById("password");


        const email = document.getElementById("textInputEmail");//falta mudar o campo para type:email
        const nome = document.getElementById("textInput");

        if (confirmPasswordInput.value === password) {
        confirmPasswordInput.style.border = "";
        PasswordInput.style.border = "";

        confirmPasswordInput.value = "";
        PasswordInput.value = "";
        email.value = "";
        nome.value = "";
        this.setState({ showError: false });

        this.setState({ success: true });

        } else {
        confirmPasswordInput.style.border = "1px solid red";
        PasswordInput.style.border = "1px solid red";
        this.setState({ showError: true });
        this.setState({ success: false });
        }
    }

    render() {
        const { showError } = this.state;
        const { success } = this.state;

        return (
        <div className="items-form">
            <input
            onChange={(event) => this.setState({ password: event.target.value })}
            id="password"
            placeholder="Crie uma senha"
            type="password"
            />

            <input
            id="passwordConfirm"
            placeholder="Confirmar senha"
            type="password"
            />


            <button onClick={() => this.onClickValue()} type="button">
            Verificar
            </button>
            {showError && <p className="error">As senhas não coincidem.</p>}
            {success && <p className="success">Você concluiu o cadastro.</p>}
        </div>

        )
    }
}

export default Valida;