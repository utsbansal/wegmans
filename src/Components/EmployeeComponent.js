import React, { useState } from 'react';
import { Form, Label, Button, Input } from 'reactstrap';

const Employee = (props) => {
    return(
        <>
            <div className="row">
                <div className="col-12 text-center">
                    <h3>Hi Employee</h3>
                </div>
                <Form>
                    <div className="row">
                        <div className="col-12 text-center">
                            <Label htmlFor="department">Which department are you currently from?</Label>
                        </div>
                        <div className="offset-4 col-4 mt-1">
                            <Input type="select" name="department">
                                <option key={0}>Select Department</option>
                                <option key={1}>Store Operation</option>
                                <option key={2}>Culinary</option>
                                <option key={3}>Corporate</option>
                                <option key={4}>Hospitality</option>
                                <option key={5}>Distribution Center</option>
                                <option key={6}>Service Team Leader</option>
                                <option key={7}>Food Manufacturing</option>
                                <option key={8}>Asset Protection</option>
                            </Input>
                        </div>
                        <div className="col-12 text-center mt-2">
                            <Label htmlFor="reason">What position are you applying for and what makes you qualified for this position?</Label>
                            <div className="offset-4 col-4 mt-1">
                                <Input type="textarea" name="reason" rows={5} maxLength="675" placeholder="Max 75 words"/>
                            </div>
                        </div>
                        <div className="col-12 text-center mt-2">
                            <Label htmlFor="response">How will you respond if you don't get the promotion?</Label>
                            <div className="offset-4 col-4 mt-1">
                                <Input type="textarea" name="response" rows={5} maxLength="675" placeholder="Max 75 words"/>
                            </div>
                        </div>
                        <div className="col-12 text-center mt-2">
                            <Label htmlFor="current">What is your current position and what do you like about it?</Label>
                            <div className="offset-4 col-4 mt-1">
                                <Input type="textarea" name="current" rows={5} maxLength="675" placeholder="Max 75 words"/>
                            </div>
                        </div>
                        <div className="col-12 text-center mt-2">
                            <Label htmlFor="choice">Are you willing to work more hours if the position requires you to do so?</Label>
                            <div className="offset-4 col-4 mt-1">
                                <Input type="select" name="choice">
                                    <option key={0}>No</option>
                                    <option key={1}>Yes</option>
                                </Input>
                            </div>
                        </div>
                        <div className="col-12 text-center mt-2">
                            <Label htmlFor="position_choice">Are you willing to relocate for this position if needed?</Label>
                            <div className="offset-4 col-4 mt-1">
                                <Input type="select" name="position_choice">
                                    <option key={0}>No</option>
                                    <option key={1}>Yes</option>
                                </Input>
                            </div>
                        </div>
                        <div className="col-12 text-center mt-2">
                            <Label htmlFor="salary">What is your expected pay raise if hired?(Hourly)</Label>
                            <div className="offset-4 col-4 mt-1">
                                <Input type="text" name="text"/>
                            </div>
                        </div>
                        <div className="col-12 text-center mt-2">
                            <Button color="success" onClick={() => alert("Form Submitted Successfully")}>Submit</Button>
                        </div>
                    </div>
                </Form>
            </div>
        </>
    );
};

export default Employee;