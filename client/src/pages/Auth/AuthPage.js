import React from 'react';
import { Link } from "react-router-dom";
import { Row, Col, FormGroup, FormControl, Button } from "react-bootstrap";

const initialUser = {
    username: "",
    password: ""
  };


class AuthPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: { ...initialUser }
        };
    }
    
    onChange = e => {
        this.setState({
            user: {
            ...this.state.user,
            [e.target.name]: e.target.value
            }
        });
    };
    
    onSubmit = e => {
        e.preventDefault();
        alert("Submitted Successfully!");
        this.setState({
            user: { ...initialUser }
        });
    };

    render() {
        return(
            <Row className="form-parent">
                <Col xs sm={{ span: 4, offset: 4 }} className="form-container">
                <Col xs>
                    <h3 className="text-center heading">Sign in</h3>
                    <p className="text-center text-block text-secondary">
                    Авторизируйтесь используя свой логин и пароль домена oiate.ru
                    </p>
                    <form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <FormControl
                        placeholder="Логин"
                        required
                        onChange={this.onChange}
                        value={this.state.user.username}
                        name="username"
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormControl
                        placeholder="Пароль"
                        type="password"
                        required
                        onChange={this.onChange}
                        value={this.state.user.password}
                        name="password"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Button variant="outline-success" block type="submit">
                        Авторизироваться
                        </Button>
                    </FormGroup>
                    </form>
                    <p className="text-center">
                    <Link to="/forgotpassword" className="text-info">
                        Забыли пароль?
                    </Link>
                    </p>
                </Col>
                </Col>
            </Row>
        )
    }
}

export default AuthPage