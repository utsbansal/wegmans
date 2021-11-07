import React, { useState } from 'react';
import logo from '../images/logo.png';
import bottom from '../images/login_bottom.jpg';
import { Form, Label, Input, Card, CardHeader, CardBody, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';

const Welcome = (props) => {
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ redirect, setRedirect ] = useState(0);

    function handleSubmit(){
        if(username === "employee"){
            setRedirect(1);
        }else{
            if(username === "manager"){
                setRedirect(2);
            }else{
                alert('Invalid username');
            }
        }
    };
    
    return(
        <>
            {redirect === 2?<Redirect to="/manager"/>:redirect === 1?<Redirect to="/employee"/>:<></>}
            <div className="row">
                <div className="col-12 text-center mt-3">
                    <div className="row">
                        <img src={logo} className="offset-4 col-4" alt="logo"/>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <hr className="offset-4 col-4"/>
                        </div>
                    </div>
                    <h2>Welcome to Wegmans Employee Promotion System</h2>
                    <div className="row">
                        <div className="offset-4 col-4">
                            <Card className="row mt-3">
                                <CardHeader>
                                    Login
                                </CardHeader>
                                <CardBody>
                                    <Form>
                                        <div className="row">
                                            <div className="col-2">
                                                <Label htmlFor="username">Username</Label>
                                            </div>
                                            <div className="offset-2 col-8">
                                                <Input name="username" type="text" onChange={(e) => setUsername(e.target.value)}/>
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-2">
                                                <Label htmlFor="password">Password</Label>
                                            </div>
                                            <div className="offset-2 col-8">
                                                <Input name="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="offset-2">
                                                <Button onClick={()=>handleSubmit()}>Submit</Button>
                                            </div>
                                        </div>
                                    </Form>
                                </CardBody>
                            </Card>
                        </div>
                    </div>     
                    <div className="row mt-4">
                        <div className="col-12">
                            <img src={bottom} alt="login_bottom"/>
                        </div>
                    </div>        
                </div>
            </div>
        </>
    );
};

export default Welcome;