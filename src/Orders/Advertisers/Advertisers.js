import React, {useState} from 'react'
import { Col, Row, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './Advertisers.css'
import PropTypes from 'prop-types'
import { isAdvValid } from '../Validation'


const Advertisers = ({ step, setStep, user, setUser }) => {
    const [errors, setErrors] = useState({})
    const handleUser = ({ target }) => {
        setUser({
            type: 'UPDATE_ADVERTISER_INFO',
            payload: { [target.name]: target.value },
        })
    }

    const handleContinue = (e) => {
        e.preventDefault()
        console.log(user)
        const errors = isAdvValid(user)
        console.log('adve',errors)
        setErrors(errors)
        console.log('Hello')
        if (Object.keys(errors).length > 0) return
        console.log('hii')
        setStep(step + 1)
    }

    return (
        <div>
            <Form onSubmit={handleContinue}>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label className="font-weight-bold">Company Name</Label>
                            <Input
                                type="text"
                                name="companyName"
                                placeholder="Company Name" 
                                 onChange={(e) => handleUser(e)}
                                
                            />
                            <div>{errors.companyName}</div>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label className="font-weight-bold" >Company Website Address</Label>
                            <Input
                                type="text"
                                name="companyWebAdd"
                                placeholder="e.g www.abc.com" 
                                 onChange={(e) => handleUser(e)}
                                  
                            />
                            <div>{errors.companyWebAdd}</div>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <Label className="font-weight-bold">Industrial Category</Label>
                        <Input
                            type="select"
                            name="industrialCat" 
                             onChange={(e) => handleUser(e)}
                              
                        >
                            <option value="" selected>Select...</option>
                            <option value="Bacancy" >Bacancy Technology</option>
                        </Input>
                        <div>{errors.industrialCat}</div>
                    </Col>
                </Row>
                <div className="contact">
                    Primary Contact
                </div>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label className="font-weight-bold" >First Name</Label>
                            <Input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                onChange={(e) => handleUser(e)}
                             
                            />
                            <div>{errors.firstName}</div>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label className="font-weight-bold" >Last Name</Label>
                            <Input
                                type="text"
                                name="lastName"
                                placeholder="Last Name" 
                                 onChange={(e) => handleUser(e)}
                                  
                            />
                            <div>{errors.lastName}</div>

                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label className="font-weight-bold" >Email</Label>
                            <Input type="text" name="email" placeholder="Enter email"  
                             onChange={(e) => handleUser(e)}
                              />
                              <div>{errors.email}</div>

                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label className="font-weight-bold" >Phone</Label>
                            <Input
                                type="number"
                                name="phone"
                                placeholder="Enter Contact Number" 
                                 onChange={(e) => handleUser(e)}
                                
                            />
                            <div>{errors.phone}</div>

                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup check className="contact">
                    <Input type="checkbox" name="check" 
                       />
                    <Label check>Secondary Contact (Billing- Optional)</Label>

                </FormGroup>
                <div className="contact">
                    Business Address
                </div>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label className="font-weight-bold" >Address</Label>
                            <Input
                                type="text"
                                name="address"
                                placeholder="Enter Address"  
                                 onChange={(e) => handleUser(e)}
                                  />
                                  <div>{errors.address}</div>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label className="font-weight-bold" >Address line 2</Label>
                            <Input
                                type="text"
                                name="address2"
                                placeholder="Enter Adresss"  
                                 onChange={(e) => handleUser(e)}
                                  />
                                  <div>{errors.address2}</div>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label className="font-weight-bold" >City</Label>
                            <Input
                                type="text"
                                name="city"
                                placeholder="Enter City"  
                                 onChange={(e) => handleUser(e)}
                                  />
                                  <div>{errors.city}</div>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <Label className="font-weight-bold" >Country</Label>
                        <Input type="select"
                            name="country"
                            placeholder="Select..." 
                             onChange={(e) => handleUser(e)}
                              >
                            <option value="" selected>Select...</option>
                            <option value="India" >India</option>
                        </Input>
                        <div>{errors.country}</div>
                    </Col>
                    <Col md={6}>
                        <Label className="font-weight-bold">State/Province</Label>
                        <Input
                            type="select"
                            name="state"
                            placeholder="Select..." 
                             onChange={(e) => handleUser(e)}
                             >
                            <option value="" selected>Select...</option>
                            <option value="Gujarat" >Gujarat</option>
                        </Input>
                        <div>{errors.state}</div>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label className="font-weight-bold">Postal</Label>
                            <Input
                                type="number"
                                name="postal"
                                placeholder="Enter Postal Code" 
                                 onChange={(e) => handleUser(e)}
                                   />
                                  <div>{errors.postal}</div>
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup check className="contact">
                    <Input
                        type="checkbox"
                        name="check"
                        id="exampleCheck" 
                          />
                    <Label check>Billing Address (Optional)</Label>

                </FormGroup>
    
                <Button type="submit">Add Advertiser</Button>

            </Form>

        </div>
    )
}
Advertisers.propTypes = {
    step: PropTypes.number,
    setStep: PropTypes.func,
    user: PropTypes.object,
    setUser: PropTypes.func,
}

export default Advertisers
