import React, {useState} from 'react'
import { Col, Row, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import './Order.css'
import PropTypes from 'prop-types'
import { isOrderValid } from '../Validation'

const Order = ({ step, setStep, user, setUser }) => {
    const [errors, setErrors] = useState({})
    const handleUser = ({ target }) => {
        setUser({
            type: 'UPDATE_ORDER_INFO',
            payload: { [target.name]: target.value },
        })
    }

    const handleContinue = (e) => {
        e.preventDefault()
        const errors = isOrderValid(user)
        console.log('Order', errors)
        setErrors(errors)
         if (Object.keys(errors).length > 0) return
        setStep(step + 1)
    }

    return (
        <div>
            <Form onSubmit={handleContinue}>
                <Row form>
                    <Col md={6}>
                        <Label className="font-weight-bold">Advertiser</Label>
                        <Input
                            type="select"
                            name="advertiser" 
                             onChange={(e) => handleUser(e)}
                        >
                            <option value="" selected>Select...</option>
                            <option value="testBacancy" >Test Bacancy</option>
                        </Input>
                        <div>{errors.advertiser}</div>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label className="font-weight-bold">Title</Label>
                            <Input
                                type="text"
                                name="orderTitle"
                                placeholder="Title" 
                                onChange={(e) => handleUser(e)} 
                            />
                            <div>{errors.orderTitle}</div>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label className="font-weight-bold" >Preferred Landing Page URL</Label>
                            <Input
                                type="text"
                                name="orderPreLandPageUR"
                                placeholder="e.g www.testbacancy.com" 
                                 onChange={(e) => handleUser(e)}   
                            />
                            <div>{errors.orderPreLandPageUR}</div>
                        </FormGroup>
                    </Col>
                    
                    <Col md={6}>
                        <FormGroup>
                            <Label className="font-weight-bold" >Price</Label>
                            <Input
                                type="number"
                                name="price"
                                placeholder="Price" 
                                 onChange={(e) => handleUser(e)}
                                  
                            />
                            <div>{errors.price}</div>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label className="font-weight-bold" >Description</Label>
                            <Input
                                type="textarea"
                                name="description"
                                placeholder="Description" 
                                onChange={(e) => handleUser(e)}       
                            />
                            <div>{errors.description}</div>
                        </FormGroup>
                    </Col>
                </Row>
                <div className="contact">
                    Distribution
                </div>
                <Row form>
                <Col md={6}>
                        <Label className="font-weight-bold">Target Market</Label>
                        <Input
                            type="select"
                            name="targetMarket" 
                             onChange={(e) => handleUser(e)}
                              
                        >
                            <option value="" selected>Select...</option>
                            <option value="calgary">Calgary</option>
                        </Input>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label className="font-weight-bold" >Budget</Label>
                            <Input
                                type="number"
                                name="budget"
                                placeholder="$0" 
                                 onChange={(e) => handleUser(e)}
                                  
                            />
                            <div>{errors.budget}</div>
                        </FormGroup>
                    </Col>
                </Row>
                <Button type="submit">Add Order</Button>
            </Form>

        </div>
    )
}
Order.propTypes = {
    step: PropTypes.number,
    setStep: PropTypes.func,
    user: PropTypes.object,
    setUser: PropTypes.func,
}

export default Order
